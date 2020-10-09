const { app, http, routes } = require("./modules");

app.set("view engine", "ejs");
app.use("/views", routes);

http.listen(3000, () => {
    console.log("[app] Listening on port 3000");
});