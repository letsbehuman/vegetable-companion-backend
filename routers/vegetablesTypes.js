const express = require('express');
const { vegetablesType } = require('../database').database;

const routerVegetablesType = express.Router();
//* '/api/vegetablesType'
//*types
routerVegetablesType.get('/', (req, res) => {
  res.send(vegetablesType);
});

routerVegetablesType.get(`/:name`, (req, res) => {
  const name = req.params.name;
  const result = vegetablesType.filter((type) => type.name === name);
  if (result) {
    return res.send(result);
  } else {
    return res.status(400).send(`${name} Not found`);
  }
});

module.exports = routerVegetablesType;
