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
    client: 'postgresql',
    connection: {
      host: 'ec2-23-22-156-110.compute-1.amazonaws.com',
      database: 'd717a90n7raibh',
      user:     'xmszhcydqvsftf',
      password: '7302d60196a7d91c30717db482d2cf6d16df2510a229121302960410a2ae85bc'    
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }

};

