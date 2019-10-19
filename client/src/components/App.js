import React, { Component } from 'react';
import Customers from './Customers';
import axios from 'axios';

class App extends Component {
	render() {
		return (
			<div>
				<h1>My React/Express App</h1>
				<Customers />
			</div>
		);
	}
}

export default App;
