import { HashRouter, Route } from 'react-router-dom';

import { Linegraph } from './components/Linegraph/Linegraph';
import { Bargraph } from './components/Bargraph/Bargraph';
import { Piechart } from './components/Piechart/Piechart';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header/Header';

function App() {
	return (
		<HashRouter>
			<Header />
			<Route path='/line-graph'>
				<Linegraph />
			</Route>
			<Route path='/bar-graph'>
				<Bargraph />
			</Route>
			<Route path='/pie-chart'>
				<Piechart />
			</Route>
		</HashRouter>
	);
}

export default App;
