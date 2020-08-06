const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const { projects } = require('./angular.json');
const distPath = projects['flowers-store'].architect.build.options.outputPath;
const productsHandlerGet = require('./BACKEND/api-routes/products/get');
const ordersHandlerPost = require('./BACKEND/api-routes/orders/post');
const seedInitial = require('./BACKEND/helpers/seed-initial');


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, distPath)));

// Products routes
app.get('/api/products', productsHandlerGet);

// Orders routes
app.post('/api/orders', ordersHandlerPost);

// index.html route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, distPath + '/index.html'));
});


seedInitial();


app.listen(PORT, () => {
    console.log('Running on port ' + PORT)
});