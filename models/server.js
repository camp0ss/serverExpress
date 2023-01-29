const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares() {
    //cors
    this.app.use(cors());

    //read and parse body
    this.app.use(express.json());

    //Directory Public
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/users.routers'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
