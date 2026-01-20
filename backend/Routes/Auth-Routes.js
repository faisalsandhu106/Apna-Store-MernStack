const { Signup, Login } = require('../Controllers/AuthController');
const { SignupValidation, LoginValidation } = require('../Middlewares/AuthValidation');
const adminController = require('../Controllers/Admin-Controller');
const router = require('express').Router();

router.post('/signup', SignupValidation, Signup );
router.post('/login', LoginValidation, Login );
router.get('/user/:id', adminController.getUserIndividual );
router.patch('/user/update/:id',adminController.userUpdate );

module.exports = router
