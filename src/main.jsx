import ReactDOM from 'react-dom/client';
import { Layout } from './Layout';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<div>
		<BrowserRouter basename="/React-QR-Code">
			<Layout />
		</BrowserRouter>
	</div>
)