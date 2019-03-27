var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '12345678',
      database : 'tienda'
    }
  });

  module.exports = knex