require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const massive = require('massive');
const app = express();
app.use( bodyParser.json() );
const port = process.env.SERVER_PORT || 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
