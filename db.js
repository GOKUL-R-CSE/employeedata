const {Pool} = require('pg')

const pool = new Pool({
	user: 'postgres',
	database: 'formdata',
	password: 'fullstackdev',
	host: 'localhost',
	port: 5432

}) 

module.exports = pool
