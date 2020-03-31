module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },
  staging: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: 'staging',
      user:     'postgres',
      password: 'postgres'      
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  production: {
    client: 'postgres',
    connection: 'postgres://xmszhcydqvsftf:7302d60196a7d91c30717db482d2cf6d16df2510a229121302960410a2ae85bc@ec2-23-22-156-110.compute-1.amazonaws.com:5432/d717a90n7raibh',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    },
    ssl: true
  }

};

