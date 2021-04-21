import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Detail, Home, Favorite} from './components';
import { Provider } from 'react-redux';
import store from './redux/store';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

	const [favorites, setFavorites] = useLocalStorage('favorites', []);

	const addToFavorite = (item) => {
		setFavorites([...favorites, item]);
		console.log(favorites);
	}

	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/detail/:id" render={(props) => <Detail {...props} addFavorite={addToFavorite} />}/>
					<Route path="/Favorite">
						<Favorite favorites={favorites} />
					</Route>
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
