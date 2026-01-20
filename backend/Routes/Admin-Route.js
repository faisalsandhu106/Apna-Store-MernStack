const adminController = require('../Controllers/Admin-Controller');
const route = require('express').Router()

// *-----------------------------
// *Crud Operations User API Data
// *-----------------------------
route.get('/user', adminController.getUserData);
route.get('/user/:id', adminController.getUserIndividual);
route.delete('/user/delete/:id', adminController.deleteUser);
route.patch('/user/update/:id', adminController.userUpdate)


// ?------------------------------------
// ?Crud Operations ContactForm API Data
// ?------------------------------------
route.get('/contactform', adminController.getContactFormData);
route.get('/contactform/:id', adminController.getFormIndividual);
route.patch('/contactform/update/:id', adminController.ContactUpdate);
route.delete('/user/contactform/delete/:id', adminController.deleteContact);


// TODO--------------------------------
// *Crud Operations Product API Data
// TODO--------------------------------
route.get('/allproduct', adminController.getAllproduct);
route.get('/allproduct/:id', adminController.getAllproductIndividual);
route.patch("/allproduct/update/:id", adminController.AllproductUpdate);
route.post('/craeteproduct', adminController.createProduct);
route.delete('/allproduct/delete/:id', adminController.deleteProduct);

module.exports = route;