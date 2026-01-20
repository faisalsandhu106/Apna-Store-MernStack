const express = require('express');
const app = express();
const bodyPaser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// *-------------------------------------------------------
// *Import Files Form ENV & Route & Middleware & Controller
// *-------------------------------------------------------
const PORT = process.env.PORT || 3000;
const ConnectDB = require('./Models/ConnectDB');
const AuthRoute = require('./Routes/Auth-Routes')
const ContactRoute = require('./Routes/Contact-Routes')
const AllProductRoute = require("./Routes/Allproduct-Routes")
const AdminRoute = require('./Routes/Admin-Route')

app.get('/', (req, res) => {
    res.send('I am Live ')
});

app.use(bodyPaser.json());
app.use(cors());

// *------------
// *Creat Routes
// *------------
app.use('/auth', AuthRoute);
app.use('/contact', ContactRoute);
app.use('/api', AllProductRoute);
app.use('/admin', AdminRoute);


const start = async () => { 
    try {
        await ConnectDB(process.env.MONGOODB_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log('Your Server is not Running', error)
    }
};

start();