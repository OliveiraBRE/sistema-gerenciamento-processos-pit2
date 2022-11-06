const cardManager = require('./ManagerCardController');

module.exports = {
  getCards(req, res) {
    const { projectName } = req.params;
    const currentProject = cardManager.getCards(`${projectName}.json`);

    res.json(currentProject);
  },

  createNewCard(req, res) {
    const {projectName} = req.params;
    const card = req.body;
    const currentProject = cardManager.getCards(`${projectName}.json`);

    const newCard = {
      cardId: currentProject.cards.length+1,
      title: card.title,
      manager: card.manager,
      description: card.description,
      status: card.local
    }

    currentProject.cards.push(newCard);
    cardManager.setNewCard(currentProject);

    res.status(200).json({message:"Gravado com sucesso"});

  }
}



// "id": 1,
//   "title": "some title",
//     "manager": "Bruno",
//       "description": "short text to descript this card",
//         "status": "backlog"