const express = require('express');
const app = express();
const path = require('path')

app.use(requireHTTPS);
app.use(express.static('./dist/Front-end'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Front-end/'}),
);

app.listen(process.env.PORT || 8080);