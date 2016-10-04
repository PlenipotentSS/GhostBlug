// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'), config;

config = {
  // ### Development **(default)**
  development: {
    // The url to use when providing links to the site, E.g. in RSS and email.
    url: 'http://ios-coder.com',

    // Example mail config
    // Visit http://docs.ghost.org/mail for instructions
    // ```
    //  mail: {
    //      transport: 'SMTP',
    //      options: {
    //          service: 'Mailgun',
    //          auth: {
    //              user: '', // mailgun username
    //              pass: ''  // mailgun password
    //          }
    //      }
    //  },
    // ```

    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost-dev.db')
      },
      debug: false
    },
    server: {
      // Host to be passed to node's `net.Server#listen()`
      host: 'localhost',
      // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
      port: '3000'
    }
  },

  // ### Production
  // When running Ghost in the wild, use the production environment
  // Configure your URL and mail settings here
  production: {
    url: 'http://blog.isorocket.com',
    mail: {
      transport: 'SMTP',
      options: {
        service: 'Gmail',
        auth: {
          user: 'ioscoderblog@gmail.com',
          pass: 'lolipoplolipop'
        }
      }
    },
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost.db')
      },
      debug: false
    },
    server: {
      // Host to be passed to node's `net.Server#listen()`
      host: '127.0.0.1',
      // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
      port: '2369'
    }
  },

  // **Developers only need to edit below here**

  // ### Testing
  // Used when developing Ghost to run tests and check the health of Ghost
  // Uses a different port number
  testing: {
    url: 'http://ios-coder.com',
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost-test.db')
      }
    },
    server: {
      host: '127.0.0.1',
      port: '2369'
    }
  },

  // ### Travis
  // Automated testing run through GitHub
  'travis-sqlite3': {
    url: 'http://127.0.0.1:2369',
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost-travis.db')
      }
    },
    server: {
      host: '127.0.0.1',
      port: '2369'
    }
  },

  // ### Travis
  // Automated testing run through GitHub
  'travis-mysql': {
    url: 'http://127.0.0.1:2369',
    database: {
      client: 'mysql',
      connection: {
        host     : '127.0.0.1',
        user     : 'travis',
        password : '',
        database : 'ghost_travis',
        charset  : 'utf8'
      }
    },
    server: {
      host: '127.0.0.1',
      port: '2369'
    }
  },

  // ### Travis
  // Automated testing run through GitHub
  'travis-pg': {
    url: 'http://127.0.0.1:2369',
    database: {
      client: 'pg',
      connection: {
        host     : '127.0.0.1',
        user     : 'postgres',
        password : '',
        database : 'ghost_travis',
        charset  : 'utf8'
      }
    },
    server: {
      host: '127.0.0.1',
      port: '2369'
    }
  }
};

// Export config
module.exports = config;
