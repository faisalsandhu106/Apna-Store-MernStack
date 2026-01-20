const User = require('../Models/AuthSchema');
const Contact = require('../Models/Contact-Schema')
const Product = require('../Models/Product-Schema')

// *----------------------------
// *Get User Data In Admin Panel
// *----------------------------
const getUserData = async (req, res) => {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
        return res.status(404).json({ message: "No Found User Data" })
    };
    return res.status(200).json(users)
};

// *---------------------------------------
// *Get User Individual Data In Admin Panel
// *---------------------------------------
const getUserIndividual = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json({ message: "User Individual Error", error });
    }
};

// !-------------------------------
// *Delete User Data In Admin Panel
// !-------------------------------
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await User.deleteOne({ _id: id });
        return res.status(200).json(deleteUser)
    } catch (error) {
        return res.status(404).json({ message: "Delete User Error", error })
    }
};

// TODO--------------------------------
// *Get User Update Data In Admin Panel
// TODO--------------------------------
const userUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const updateUserData = req.body;
        const updateUser = await User.updateOne(
            { _id: id },
            {
                $set: updateUserData
            });
        return res.status(200).json(updateUser);
    } catch (error) {
        return res.status(404).json({ message: "User Updated Error", error });
    }
};


// *-----------------------------------
// *Get ContactForm Data In Admin Panel
// *-----------------------------------
const getContactFormData = async (req, res) => {
    try {
        const contactData = await Contact.find({});
        if (!contactData || contactData.length === 0) {
            return res.status(400).json({ message: "No Found Contact Data" })
        };
        return res.status(200).json(contactData)
    } catch (error) {
        return res.status(404).json({ message: "No Found Contact Data", error })
    }
};


// *---------------------------------------
// *Get User Individual Data In Admin Panel
// *---------------------------------------
const getFormIndividual = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Contact.findOne({ _id: id });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json({ message: "Contact Individual Error", error });
    }
};


// !---------------------------------------
// *Delete Contact Form Data In Admin Panel
// !---------------------------------------
const deleteContact = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteContact = await Contact.deleteOne({ _id: id });

        // "ContactForm Delete Successfully, Please Refresh Your Page"
        return res.status(200).json(deleteContact)
    } catch (error) {
        return res.status(404).json({ message: "Delete ContactForm Error", error })
    }
};


// TODO---------------------------------------------
// *Get Contact Update Data In Admin Panel
// TODO---------------------------------------------
const ContactUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const updateContactData = req.body;
        const updateContact = await Contact.updateOne(
            { _id: id },
            {
                $set: updateContactData
            });
        return res.status(200).json(updateContact);
    } catch (error) {
        return res.status(404).json({ message: "Contact Updated Error", error });
    }
};


// *-----------------------------------
// *Get Allproduct Data In Admin Panel
// *-----------------------------------
const getAllproduct = async (req, res) => {
    try {
        const productData = await Product.find();
        if (!productData || productData.length === 0) {
            return res.status(404).json({ message: "Product API is Empty" })
        }
        return res.status(200).json(productData)
    } catch (error) {
        res.status(404).json({ message: "Not Gat All Products Data", error })
    }
};

// *---------------------------------------------
// *Get Allproduct Individual Data In Admin Panel
// *---------------------------------------------
const getAllproductIndividual = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findOne({ _id: id });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json({ message: "Product Individual Data Error", error });
    }
};

// TODO------------------------------
// Product Update Data In Admin Panel
// TODO------------------------------
const AllproductUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const updateProductData = req.body;
        const updateData = await Product.updateOne(
            { _id: id },
            {
                $set: updateProductData
            }
        )
        return res.status(200).json(updateData);
    } catch (error) {
        return res.status(404).json({ message: 'Updated Error Please "Feature Field Requried"', error });
    }
};


// ?----------------------------------
// *Create Product Data In Admin Panel
// ?----------------------------------
const createProduct = async (req, res) => {
    try {
        const res = req.body;
        const createProduct = await Product.insertMany(res);
        return res.status(200).json(createProduct)

    } catch (error) {
        return res.status(404).json({ message: "Product Create Error", error })
    }
}

// !----------------------------------
// *Delete Product Data In Admin Panel
// !----------------------------------
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteProduct = await Product.deleteOne({ _id: id });
        return res.status(200).json(deleteProduct)
        
    } catch (error) {
        return res.status(404).json({ message: "Delete Product Error", error })
    }
};



module.exports = {
    // * Admin UserCrud Operation 
    getUserData,
    getUserIndividual,
    userUpdate,
    deleteUser,

    // ? Admin ContactForm Operation 
    getContactFormData,
    deleteContact,
    getFormIndividual,
    ContactUpdate,

    // TODO Admin Products Operation 
    getAllproduct,
    getAllproductIndividual,
    createProduct,
    deleteProduct,
    AllproductUpdate
};



