const express = require('express');
const path = require("path");

const app = express();
const port = 8000;

const ROOT_PATH = "../"
const FE_PATH = "/frontend/"

app.get('/', (req, res) => {
    let _index_path = path.join(FE_PATH, "index.html")
    res.sendFile(_index_path, {root: ROOT_PATH});            
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 