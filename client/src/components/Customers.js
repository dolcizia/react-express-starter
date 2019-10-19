import React, { Component } from 'react';
import axios from 'axios';

class Customers extends Component {
	state = {
		customers: []
	};
	componentDidMount() {
		// get data
		axios.get('/api/customers').then((res) => this.setState({ customers: res.data }));
	}
	// fetch('/api/customers')
	// 	.then((res) => res.json())
	// 	.then((customers) =>
	// 		this.setState({ customers }, () =>
	// 			console.log('Customers fetched..', customers)
	// 		)
	// 	);

	render() {
		return (
			<div>
				<h2>Customers</h2>
				<ul>
					{this.state.customers.map((customer) => (
						<li key={customer.id}>
							{customer.firstName} {customer.lastName}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Customers;
