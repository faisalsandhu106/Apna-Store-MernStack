require('dotenv').config();
const ConnectionDB = require('./Models/ConnectDB');
const model = require('./Models/Product-Schema');
const ProductJSON = require('./AllProducts.json')

const start = async () => {
    try {
        await ConnectionDB(process.env.MONGOODB_URL);
        await model.deleteMany();
        await model.create(ProductJSON);
        console.log('Data Exporting Data successfully');
    } catch (error) {
        console.log('Error Exporting data:', error);
    }
};

start();