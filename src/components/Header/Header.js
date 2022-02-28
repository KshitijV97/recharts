import { Link } from 'react-router-dom';

import './Header.css';

export const Header = () => {
	return (
		<nav>
			<label className='logo'>Recharts</label>
			<ul>
				<li>
					<Link to='/line-graph'>Line</Link>
				</li>
				<li>
					<Link to='/bar-graph'>Bar</Link>
				</li>
				<li>
					<Link to='/pie-chart'>Pie</Link>
				</li>
			</ul>
		</nav>
	);
};

