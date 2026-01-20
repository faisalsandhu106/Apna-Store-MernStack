const bcrypt = require('bcrypt');
const AuthModel = require('../Models/AuthSchema');

const AdminLogin = async (req, res) => {
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
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
};

module.exports = { AdminLogin }
