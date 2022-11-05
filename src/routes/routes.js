const route = require('express').Router();

route.get('/', () => console.log("It works"));
route.post('/value', (req, res) => console.log(req.body.id));

module.exports = route;