const joi = require('joi');

const SignupValidation = (req, res, next) => {
    const Schema = joi.object({
        firstname: joi.string().required(),
        lastname: joi.string().required(),
        email: joi.string().email().required(),
        address: joi.string().required(),
        password: joi.string().required(),
    });

    const { error } = Schema.validate(req.body);
    if (error) {
        return res.status(404).json({ message: 'Please, correct your email ', error })
    };

    next();
};

const LoginValidation = (req, res, next) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
    });

    const { error } = Schema.validate(req.body);
    if (error) {
        return res.status(404).json({ message: 'Incorrect your email & password', error })
    };

    next();
};

module.exports = { SignupValidation, LoginValidation }