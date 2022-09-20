const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');

const { database } = require('./database');
const routerUsers = require('./routers/users');
const routerVegetables = require('./routers/vegetables');
const routerVegetablesType = require('./routers/vegetablesTypes');
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

app.use((req, res, next) => {
  console.log(`${new Date().toString()}=>${req.originalUrl} `);
  next();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`it is alive son http://localhost:${PORT}`));
app.use(express.json());
app.use(cors());
//Routers
app.use('/api/vegetables', routerVegetables);
app.use('/api/vegetablesType', routerVegetablesType);
app.use('/api/users', routerUsers);

//*home
app.get('/', (req, res) => {
  res.send('it is working');
});
