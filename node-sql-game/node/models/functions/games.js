const conn = require("../../mysql");

class gamesFunctions {
    static getId = gameId => gamesFunctions.id = gameId;

    static getGameInfo() {
        gamesFunctions.gameInfo = new Promise((resolve, reject) => {
            let sql = `SELECT * FROM (SELECT * FROM games WHERE id = ${gamesFunctions.id}) as g
                                    INNER JOIN players as p ON g.id = p.game_id
                                    INNER JOIN attacks as a ON a.player_id = p.id
                                    INNER JOIN immunities as i ON i.player_id = p.id;`;
            conn.query(sql, (err, rows) => {
                if (err) reject(err);
                resolve(rows);
            });
        });

        return gamesFunctions.gameInfo;
    }

    static getHistory() {
        return new Promise(async (resolve, reject) => {
            let gameInfoData = JSON.stringify(await gamesFunctions.gameInfo);
            let sql = `INSERT INTO history (game_id, data) VALUES (${gamesFunctions.id}, JSON_QUOTE('${gameInfoData}'))`;
            conn.query(sql, err => err ? reject(err) : resolve("Saved in history"));
        });
    }

    static getDeleteGames() {
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM games WHERE id = ${gamesFunctions.id}`;
            conn.query(sql, (err) => {
                if(err) reject(err);
                resolve("Record deleted");
            });
        });
    }
}

module.exports = gamesFunctions;