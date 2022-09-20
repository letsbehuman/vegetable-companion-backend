const express = require('express');
const { users } = require('../database').database;
const bcrypt = require('bcrypt-nodejs');
const routerUsers = express.Router();
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'test',
    database: 'vegetables',
  },
});

//* '/api/users'
routerUsers.use(express.json());

//! ADD VALIDATION
// routerUsers.post('/', (req, res) => {
//   const newUser = req.body;
//   users.push(newUser);
//   res.send(users);
// });

routerUsers.post('/signin', (req, res) => {
  const { userName, password } = req.body;
  db.select('userName', 'hash')
    .from('login')
    .where('userName', '=', userName)
    .then((data) => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db
          .select('*')
          .from('users')
          .where('userName', '=', userName)
          .then((user) => {
            res.json(user[0]);
          })
          .catch((err) => res.status(400).json('Unable to get user'));
      } else {
        res.status(400).json('Wrong credentials');
      }
    })
    .catch((err) => res.status(400).json('Wrong credentials'));
});

routerUsers.post('/register', (req, res) => {
  const { email, password, userName } = req.body;
  const hash = bcrypt.hashSync(password);
  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        userName: userName,
      })
      .into('login')
      .returning('userName')
      .then((loginuserName) => {
        return trx('users')
          .returning('*')
          .insert({
            email: email,
            userName: loginuserName[0].userName,
            joined: new Date(),
          })
          .then((user) => {
            res.json(user[0]);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json('Unable to register'));
});

routerUsers.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  db.select('*')
    .from('users')
    .where({ id: id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json('Not found');
      }
    })
    .catch((err) => res.status(400).json('Error getting user'));
});

routerUsers.put('/favorite', (req, res) => {
  const { id } = req.body;
  let found = false;
  users.filter((user) => {
    if (user.id == id) {
      found = true;
      return res.json(user.favorite);
    }
  });
  if (!found) {
    res.status(400).json('user not found');
  }
});

// bcrypt.hash('a', null, null, function (err, hash) {});
// bcrypt.compare('b', hash, function (err, res) {});
// bcrypt.compare('a', hash, function (err, res) {});

module.exports = routerUsers;
