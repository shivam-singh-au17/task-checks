const Sequelize = require('sequelize');

// Assume we have a database connection
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Assume we have a database query
const query = 'SELECT * FROM users WHERE city = \'New York\'';

// Execute the query using Sequelize
sequelize.query(query).then(results => {
    console.log(results); // Output: Array of user objects
}).catch(err => {
    console.error(err);
});