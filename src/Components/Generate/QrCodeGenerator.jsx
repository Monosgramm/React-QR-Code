import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import style from './QrCodeGenerator.module.css';
import { GENERATE_DATA } from '../../constants';

export const QrCodeGenerator = () => {
	const [inputValue, setInputValue] = useState(''); 
	const [generatedQR, setGeneratedQR] = useState(''); 

	const generateQR = () => {
		if (!inputValue.trim()) return; 

		const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
		localStorage.setItem(
			GENERATE_DATA,
			JSON.stringify([...prevData, inputValue]) 
		);

		setGeneratedQR(inputValue); 
		setInputValue(''); 
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<div className={style.container}>
			<input
			type="text"
			value={inputValue}
			placeholder="Enter text"
			onChange={handleInputChange}
			className={style.input}
			/>
			<button 
			type="button" 
			className={style.button} 
			onClick={generateQR}
			disabled={!inputValue.trim()} 
			>
			Generate QR Code
			</button>

			{generatedQR && (
			<div className={style.qrWrapper}>
				<QRCodeSVG 
					value={generatedQR} 
					size={200} 
					level="H" 
				/>
			</div>
			)}
		</div>
	);
};