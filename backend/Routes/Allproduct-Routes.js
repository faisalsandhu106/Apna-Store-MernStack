const Allproduct = require("../Controllers/Product-controller");
const router = require('express').Router();

// *------------------
// *Allproduct Routes 
// *------------------
router.get("/allproducts", Allproduct.getAllproduct);
router.get('/allproducts/:id', Allproduct.getAllproductIndividual);


module.exports = router