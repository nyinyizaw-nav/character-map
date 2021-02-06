import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrintMmChar from './character_table/character_table.js';
import NavBar from './nav_bar/nav_bar.js';
import SearchBar from './search_bar/search_bar.js';

function App() {
	return (
		<>
		<Router>
			<NavBar />
			<SearchBar />
			<Switch>
				<Route path="/" exact component={
						() => "Home Page"} />
				<Route path="/home" exact component={
						() => "Home Page"} />
				<Route path="/compare" exact component={
						() => "Compare Page"} />
				<Route path="/character" exact component={
						() => <PrintMmChar font="pyidaungsu" />} />
				<Route path="/about" exact component={
						() => "About Page"} />
			</Switch>
		</Router>
		</>
	)
}

ReactDOM.render(<App />,document.getElementById('root')
);
