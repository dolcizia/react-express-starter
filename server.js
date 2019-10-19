const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
	const customers = [
		{
			id: 1,
			firstName: 'John',
			lastName: 'Doe'
		},
		{
			id: 2,
			firstName: 'Mary',
			lastName: 'Black'
		},
		{
			id: 3,
			firstName: 'Phil',
			lastName: 'Sampson'
		}
	];

	res.json(customers);
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
