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

app.post('/todo', async (req, res) => {
    const obj = {
        id: Math.floor(Math.random() * 1000000),
        title: req.body.title,
        description: req.body.description
    };
    toDo.push(obj);
    await writeTodos();
    res.send(toDo);
});

async function writeTodos() {
    try {
        await fs.writeFile(FILE_PATH, JSON.stringify(toDo));
    } catch (error) {
        console.error('Error writing file:', error);
    }
}

start();
