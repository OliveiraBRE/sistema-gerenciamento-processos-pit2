const cardRoute = require('express').Router();
const newCard = require('../controller/CardController');

cardRoute.post('/', newCard.getCards);

module.exports = cardRoute;