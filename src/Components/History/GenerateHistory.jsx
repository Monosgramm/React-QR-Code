import { GENERATE_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';
import style from './GenerateHistory.module.css';

export const GenerateHistory = () => {
	const getStoredData = () => {
		try {
			const rawData = localStorage.getItem(GENERATE_DATA);
			return rawData ? JSON.parse(rawData) : [];
		} catch (error) {
			console.error('Error reading from localStorage:', error);
			return [];
		}
	};

	const data = getStoredData();

	return (
		<div className={style.generateHistoryContainer}>
			{data.length > 0 ? (
			data.map((text, index) => (
				<div key={index} className={style.generateItem}>
					<p className={style.generateText}>{text}</p>
					<QRCodeSVG 
					value={text} 
					size={100} 
					level="H"  
					/>
				</div>
			))
			) : (
			<p className={style.emptyMessage}>No saved QR codes</p>
			)}
		</div>
	);
};