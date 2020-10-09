const conn = require("../mysql");

class Players {
    static getGame(id) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT g.* FROM (SELECT * FROM players WHERE id = ${id}) AS p
                        INNER JOIN games AS g ON p.game_id=g.id`;
            // SELECT games.* FROM  players INNER JOIN games ON games.id=players.game_id WHERE players.id = ${id}
            conn.query(sql, (err,rows) => {
                if(err) reject(err);
                resolve(rows[0]);
            });
        });
    }

    static async killUser(playerId, virusId) {
        return new Promise((resolve, reject) => {
            let sql = `UPDATE players SET alive = 
                        IF((SELECT id FROM immunities WHERE player_id = ${playerId} AND virus_id = ${virusId}) > 0, 1, 0) WHERE id = ${playerId};`;
            conn.query(sql, (err) => {
                if (err) reject(err);
                resolve("working");
            });
        });
    }
};


module.exports = Players;