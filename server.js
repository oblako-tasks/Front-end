const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(__dirname + '/dist/my-app'));

app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname + '/dist/my-app/index.html')),
);

app.listen(process.env.PORT || 8080);

console.log(`Example app listening on port ${process.env.PORT || 8080}`);