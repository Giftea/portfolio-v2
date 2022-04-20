import React from 'react';
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/articles" exact component={ArticlePage} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
