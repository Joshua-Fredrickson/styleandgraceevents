'use strict';

const express = require('express');
const pg = require('pg');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const connectionString = 'postgres://localhost:5432/style_and_grace_blog'; //this is for testing
const client = new pg.Client(connectionString);

app.get('*', (response, request) => {
    console.log('the GET functionality works')
});



// TEST THE FUNCTIONALITY OF THE SERVER PRIOR TO ENABLING THIS CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function createBlogTable() {
//     client.query(`
//     CREATE TABLE IF NOT EXISTS SaG_blog(
//         id SERIAL PRIMARY KEY,
//         Author VARCHAR (100),
//         Title VARCHAR (180),
//         Category VARCHAR (180),
//         Body VARCHAR (1000)
//     );
//     `
//     )
//     .then(function(response){
//      console.log('SaG Blog Table Created in DB!!!!!!!!!!!!!!!!!!!!!!!!!');   
//     })
// }

// createBlogTable();

app.listen(PORT, () => {
    console.log(`currently listening on ${PORT}`);
});