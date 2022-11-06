const cardRoute = require('express').Router();
const newCard = require('../controller/CardController');

cardRoute.get('/:projectName', newCard.getCards);
cardRoute.post('/:projectName', newCard.createNewCard);

module.exports = cardRoute;