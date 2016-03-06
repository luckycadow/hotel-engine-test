const request = require('request');
const fs = require('fs');
const apiUrl = 'http://api.walmartlabs.com/v1/paginated/items?format=json&category=3944&brand=Apple&apiKey=xhmxcf52ge7cguujszp5s83s';

request(apiUrl, (err, res, body) => {
    const products = JSON.parse(body).items.map((fullProduct) => {
        // Include only the properties we need and cast the rating to a number
        return {
            id: fullProduct.itemId,
            name: fullProduct.name,
            price: fullProduct.salePrice,
            shortDescription: fullProduct.shortDescription,
            thumbnailImage: fullProduct.thumbnailImage,
            mediumImage: fullProduct.mediumImage,
            largeImage: fullProduct.largeImage,
            customerRating: Number(fullProduct.customerRating)
        };
    });

    fs.writeFile('./products.json', JSON.stringify(products), () => {
        process.exit();
    });
});