const cardManager = require('./ManagerCardController');

module.exports = {
  getCards(req, res) {
    const { name } = req.body;
    const fileName = cardManager.getFileName(name);
    const { cards } = cardManager.getCardList(fileName);

    res.json(cards);
  }
}