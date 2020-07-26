const fs = require('fs');
const responseSender = require('../../helpers/response-sender');

const productsHandlerGet = async (req, res) => {
    const rawData = fs.readFileSync('./BACKEND/DB/products.json');
    const products = JSON.parse(rawData);
    const productId = req.query.id;

    if (productId) {
        const product = products.find(evt => evt.id === productId);

        return product
            ? responseSender(res, 200, 'Got it!', product)
            : responseSender(res, 404, 'Product not found!');  
    }

    responseSender(res, 200, 'Got it!', products);    
};

module.exports = productsHandlerGet;