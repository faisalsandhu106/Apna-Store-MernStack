const Contact = require('../Models/Contact-Schema');

const ContactForm = async (req, res) => {
    try {
        const response = req.body;
        const contactForm = await Contact.insertMany(response);
        return res.status(200).json({ contactForm, success: true });
    } catch (error) {
        return res.status(404).json({ message: "Message Not Delivered", success: false });
    }
};

module.exports = ContactForm

