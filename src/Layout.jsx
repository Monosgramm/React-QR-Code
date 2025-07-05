import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Components/Navigation/Navigation';
import { QrCodeGenerator } from './Components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './Components/Scan/QrCodeScanner'; // Импорт сканера
import { GenerateHistory } from './Components/History/GenerateHistory';
import { ScanHistory } from './Components/History/ScanHistory';

export const Layout = () => {
	return (
		<div>
			<Navigation />
			
			<Routes>
			<Route path="/generate" element={<QrCodeGenerator />} />
			<Route path="/scan" element={<QrCodeScanner />} /> 
			<Route path="/generateHistory" element={<GenerateHistory />} />
			<Route path="/scanHistory" element={<ScanHistory />} />
			</Routes>
		</div>
	);
};