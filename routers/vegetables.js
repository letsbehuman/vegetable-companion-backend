const express = require('express');
const { vegetables } = require('../database').database;
const knex = require('knex');

// const db = knex({
//   client: 'pg',
//   connection: {
//     host: '127.0.0.1',
//     port: 5432,
//     user: 'postgres',
//     password: 'test',
//     database: 'vegetables',
//   },
// });

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
    // host: 'postgresql-metric-42319',
    // port: 5432,
    // user: 'postgres',
    // password: 'test',
    // database: 'vegetables',
  },
});

const routerVegetables = express.Router();
//* '/api/vegetables'

//*vegetables
// routerVegetables.get('/', (req, res) => {
//   const result = vegetables;
//   if (!result) {
//     return res.status(400).send('Not found');
//   }
//   console.log(req.query.sort);
//   if (req.query.sort === 'name') {
//     return res.send(result.sort((a, b) => b.name + a.name));
//   }
//   res.send(result);
// });
// routerVegetables.get('/', (req, res) => {
//   const type = req.query.type;
//   const sortByName = vegetables.sort((a, b) => {
//     let na = a.name.toLocaleLowerCase();
//     let nb = b.name.toLocaleLowerCase();
//     if (na < nb) return -1;
//     if (na > nb) return +1;
//     return 0;
//   });

//   if (type === 'Favorite') {
//     res.send(vegetables.filter((vegetable) => vegetable.favorite === true));
//   }

//   if (type === 'All') {
//     res.send(sortByName);
//   }
//   if (type) {
//     res.send(vegetables.filter((vegetable) => vegetable.type === type));
//   }

//   res.send(vegetables);
// });

routerVegetables.get('/', (req, res) => {
  db.select('*')
    .from('vegetable_list')
    .then((list) => {
      res.json(list);
    })
    .catch((err) => console.log(err));
});

routerVegetables.get('/:type', (req, res) => {
  const type = req.params.type;
  if (type === 'All') {
    db.select('*')
      .from('vegetable_list')
      .orderBy('name', 'asc')
      .then((list) => {
        res.json(list);
      })
      .catch((err) => console.log(err));
  } else if (type === 'Favorite') {
    db.select('*')
      .from('vegetable_list')
      .where({ favorite: true })
      .then((list) => {
        res.json(list);
      })
      .catch((err) => console.log(err));
  } else {
    db.select('*')
      .from('vegetable_list')
      .where({ type: type })
      .then((list) => {
        res.json(list);
      })
      .catch((err) => console.log(err));
  }
});

// routerVegetables.get(`/:name`, (req, res) => {
//   const reqName = req.params.name;
//   const result = vegetables.filter(({ name }) =>
//     name.toLowerCase().includes(reqName.toLowerCase())
//   );
//   if (!result) {
//     return res.status(204).send('Not found');
//   }

//   res.send(result);
// });

routerVegetables.get('/search/:name', (req, res) => {
  db.select('*')
    .from('vegetable_list')
    .where({ name: req.params.name })
    .then((vegetable) => {
      if (!vegetable) {
        return res.status(204).send('Not found');
      } else {
        res.json(vegetable);
      }
    })
    .catch((err) => console.log(err));
});

//! ADD VALIDATION
// routerVegetables.post('/', (req, res) => {
//   const newVegetable = req.body;
//   users.push(newVegetable);
//   res.send(vegetables);
// });

// routerVegetables.put('/:id', (req, res) => {
//   const updateVegetable = req.body;
//   const id = req.params.id;
//   const index = vegetables.findIndex((vegetable) => vegetable.id == id); //number==string
//   if (index >= 0) {
//     vegetables[index] = updateVegetable;
//   }
//   res.send(vegetables);
// });

routerVegetables.patch('/:name', (req, res) => {
  const update = req.body;
  const name = req.params.name;
  const index = vegetables.findIndex((vegetable) => vegetable.name == name);
  if (index >= 0) {
    const vegetableToUpdate = vegetables[index];
    Object.assign(vegetableToUpdate, update);
  }
  res.send(vegetables);
});

//!not working
// routerVegetables.put('/favorite', (req, res) => {
//   const { name } = req.body;
//   db('vegetables')
//     .where('name', '=', name)
//     .update({ favorite: true })
//     .returning('favorite')
//     .then((favorite) => console.log(favorite));
//   if (!found) {
//     res.status(400).json('user not found');
//   }
// });

routerVegetables.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = vegetables.findIndex((vegetable) => vegetable.id == id);
  if (index >= 0) {
    vegetables.splice(index, 1);
  }
  res.send(vegetables);
});
module.exports = routerVegetables;
