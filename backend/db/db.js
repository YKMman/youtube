const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Youtube',
  password: '20011207',
  port: 5432
})

module.exports = pool