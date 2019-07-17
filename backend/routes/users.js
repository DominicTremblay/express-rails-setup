const express = require('express');
const router = express.Router();
const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig['development']);
require('dotenv').config();

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex
    .select('*')
    .from('users')
    .then(users => res.json(users));
});

module.exports = router;
