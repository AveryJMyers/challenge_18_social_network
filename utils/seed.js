const connection = require('../config/connection')
const { User, Reaction, Thought } = require('../models');


connection.on('error', (err) => err);