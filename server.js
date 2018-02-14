'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static('./styleandgraceevnets/'));

app.get('*', (request, response) => {
    console.log('recieved request this is a test');
});

app.listen(PORT, () => {
    console.log(`Front End Server listening on ${PORT}`);
});