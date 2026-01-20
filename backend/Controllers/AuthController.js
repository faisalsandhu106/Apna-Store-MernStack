const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthModel = require('../Models/AuthSchema');

const Signup = async (req, res) => {
    try {
        const { firstname, lastname, email, address, password } = req.body;
        const user = await AuthModel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: 'User already exists, Please Login', success: false })
        };

        const authModel = new AuthModel({ firstname, lastname, email, address, password });
        authModel.password = await bcrypt.hash(password, 10);
        const jwtToken = jwt.sign(
            { email: authModel.email, _id: authModel._id },
            process.env.JWT_TOKEN,
            { expiresIn: '24h' },
        );

        res.status(200).json({
            message: 'User Registered Successfully',
            success: true,
            jwtToken,
            email,
            firstname: authModel.firstname,
            _id: authModel._id

        });

        await authModel.save();

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', success: false })
    }
};

const Login = async (req, res) => {
    try {
        const error = 'Auth failed email or password incorrect';
        const { email, password } = req.body;
        const user = await AuthModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: error, success: false })
        };

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(403).json({ message: error, success: false })
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_TOKEN,
            { expiresIn: '24h' },
        );

        res.status(200).json({
            message: 'User Login Successfully',
            success: true,
            jwtToken,
            email,
            firstname: user.firstname,
            _id: user._id
        });

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', success: false })
    }
};

// *------------------------
// *Get User Individual Data 
// *------------------------
const getUserIndividual = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await AuthModel.findOne({ _id: id }, { password: 0 });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json({ message: "User Individual Error", error });
    }
};


// TODO-------------
// *Update User Data
// TODO-------------
const userUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const profileUpdate = req.body;
        const updateProfile = await AuthModel.updateOne(
            { _id: id },
            {
                $set: profileUpdate
            });
        return res.status(200).json(updateProfile)
    } catch (error) {
        return res.status(404).json({ message: "User Profile Not Updated", error })
    }
};

module.exports = { Signup, Login, getUserIndividual, userUpdate }