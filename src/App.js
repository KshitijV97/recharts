import { HashRouter, Route } from 'react-router-dom';

import { Linegraph } from './components/Linegraph/Linegraph';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';

function App() {
	return (
		<HashRouter>
			<Header />
			<Route path='/line-graph'>
				<Linegraph />
			</Route>
		</HashRouter>
	);
}

export default App;
