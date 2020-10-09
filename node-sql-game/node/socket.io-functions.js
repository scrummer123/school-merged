const { Players, Games } = require("./models/Handler");

module.exports = getFunctions = io => {
    io.on("connection", socket => {
        socket.emit("msg", "user connected");

        socket.on("killPlayer", async ({virus, player}) => {
            const message = await Players.killUser(player, virus);
            socket.emit("msg", message);
        });

        socket.on("endGame", async game => {
            const message = await Games.endGame(game);
            socket.emit("msg", message);
        });
    });

};

