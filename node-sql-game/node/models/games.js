const conn = require("../mysql");
const gamesFunctions = require("./functions/games");

class Games extends gamesFunctions {
    static endGame(id) {
        gamesFunctions.getId(id);

        const gameInfo = gamesFunctions.getGameInfo();

        const history = gamesFunctions.getHistory();

        const deleteGames = gamesFunctions.getDeleteGames();

        return Promise.all([gameInfo, history, deleteGames]).then(values => values[0]);
    }
}


module.exports = Games;