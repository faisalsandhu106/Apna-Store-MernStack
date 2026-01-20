const ContactForm = require('../Controllers/Contact-Controller');
const ContactFormValidation = require('../Middlewares/Contact-Middlewave');
const router = require('express').Router();

router.post('/user', ContactFormValidation, ContactForm);

module.exports = router
