import { Link } from 'react-router-dom';
import style from './Navigation.module.css';

export const Navigation = () => {
	return (
		<nav className={style.container} >
			<Link to="generate" >Generate QR code</Link>
			<Link to="scan" >Scan QR code</Link>
			<Link to="generateHistory" >Generated QR codes</Link>
			<Link to="scanHistory" >Scanned QR codes</Link>
		</nav>
	);
};