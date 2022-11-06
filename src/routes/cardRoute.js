const cardRoute = require('express').Router();
const card = require('../controller/CardController');

cardRoute.get('/:projectName', card.getCards);
cardRoute.post('/:projectName', card.newCard);
cardRoute.post('/:projectName/:id', card.setCardStatus);
cardRoute.delete('/:projectName/:id', card.deleteCard);

module.exports = cardRoute;