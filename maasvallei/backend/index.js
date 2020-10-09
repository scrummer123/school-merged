const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../', 'build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});

// create a GET route
app.get('/backend', (req, res) => {
    res.json(['A', 'B', 'C']);
});

console.log(__dirname);
app.listen(port, () => console.log(`Listening on port ${port}`));