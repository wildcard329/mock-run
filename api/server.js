const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../routes/auth/authenticate-middleware.js');
const authRoute = require('../routes/auth/auth-route');
const ticket = require('../routes/ticketss/ticket-route.js');
const feedback = require('../routes/ticketss/ticket-route');

const server = express();

server.use(express.json());
server.use('/', authRoute);
server.use('/ticket', authenticate, ticket);
// server.use('/feedback', authenticate, feedback);

module.exports = server;