import { SCAN_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';
import style from './ScanHistory.module.css';

export const ScanHistory = () => {
	const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

	return (
		<div className={style.scanHistoryContainer}>
			{data.map((text, index) => (
				<div key={index} className={style.scanItem}>
					<p className={style.scanText}>
						{text}
					</p>
					<QRCodeSVG value={text} size={100} />
				</div>
			))}
		</div>
	);
};