const express = require('express');
const server = express();

server.get('/geeks', (req, res) => {
    return res.json({ message: 'Hello word'});
})

server.listen(3000);
