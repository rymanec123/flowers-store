const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 5000;

const productsHandlerGet = require('./BACKEND/api-routes/products/get');

app.use(cors())
app.use(bodyParser.json())

// Products routes
app.get('/api/products', productsHandlerGet);


app.listen(PORT, () => {
    console.log(`Running on port ${process.env.PORT || PORT}`)
})