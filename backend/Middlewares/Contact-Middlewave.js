const joi = require('joi');

const ContactFormValidation = (req, res, next) => {
    const Schema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        address: joi.string().required(),
        message: joi.string().required(),
    });

    const { error } = Schema.validate(req.body);
    if (error) {
        return res.status(404).json({ message: 'All Fields Validate', error })
    };

    next();
};

module.exports = ContactFormValidation