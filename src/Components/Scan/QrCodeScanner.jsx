import { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import style from './QrCodeScanner.module.css';
import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {
		const [scanned, setScanned] = useState(null);
		const webcamRef = useRef(null);
		const intervalRef = useRef(null);

		const captureAndScan = () => {
			const imageSrc = webcamRef.current?.getScreenshot();
			if (!imageSrc) return;

			const img = new Image();
			img.src = imageSrc;
			img.onload = () => {
					const canvas = document.createElement('canvas');
					canvas.width = img.width;
					canvas.height = img.height;
					const ctx = canvas.getContext('2d');
					ctx.drawImage(img, 0, 0);

					const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
					const code = jsQR(imageData.data, imageData.width, imageData.height);

					if (code) {
						setScanned(code.data);
						const prev = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
						localStorage.setItem(SCAN_DATA, JSON.stringify([...prev, code.data]));
						if (intervalRef.current) {
							clearInterval(intervalRef.current);
						}
					}
			};
		};

		useEffect(() => {
			intervalRef.current = setInterval(captureAndScan, 300);
			
			return () => {
					if (intervalRef.current) {
						clearInterval(intervalRef.current);
					}
			};
		}, []);

		const videoConstraints = {
			facingMode: 'environment',
		};

		return (
			<div className={style.container}>
					<div className={style.scannerWrapper}>
						<Webcam
							ref={webcamRef}
							audio={false}
							screenshotFormat="image/jpeg"
							videoConstraints={videoConstraints}
							onUserMediaError={(err) => console.error('Camera error:', err)}
							style={{ width: '100%', height: '100%', objectFit: 'cover' }}
						/>
					</div>
					<p className={style.result}>{scanned || "Point your camera at the QR code"}</p>
			</div>
		);
};