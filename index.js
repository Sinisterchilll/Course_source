const express = require('express');
const app = express();
const port = 1337;
const fs = require('fs').promises;
const path = require('path');
app.use(express.json());
let toDo = [];

const FILE_PATH = path.join(__dirname, 'file.json');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

async function start() {
    //await readTodos();
    app.listen(port, () => {
        console.log("Server is running");
    });
}

start();
