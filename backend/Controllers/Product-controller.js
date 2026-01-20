const ProductModel = require('../Models/Product-Schema');

// *--------------------
// *Get Allproduct Data
// *--------------------
const getAllproduct = async (req, res) => {
    try {
        const { title, category, feature, _id, sort, select } = req.query;
        const queryObject = {};

        // React Query Searching in API Name, company, feature 
        if (_id) {
            queryObject._id = _id
        };

        if (title) {
            queryObject.title = { $regex: title, $options: "i" }
        };

        if (category) {
            queryObject.category = { $regex: category, $options: "i" }
        };

        if (feature) {
            queryObject.feature = feature
        };

        // Full Sorting Functionality
        let ApiData = ProductModel.find(queryObject);

        if (sort) {
            let sortFix = sort.replace(",", " ")
            ApiData = ApiData.sort(sortFix)
        };

        // Select which Document Fields to Include or Exclude
        if (select) {
            let selectFix = select.split(",").join(" ");
            ApiData = ApiData.select(selectFix)
        };

        const products = await ApiData;
        res.status(200).json({ products });
    } catch (error) {
        res.status(400).json({ msg: "Get All Products Error In Controller" })
    }
};

// *------------------------------
// *Get Allproduct Individual Data
// *------------------------------
const getAllproductIndividual = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ProductModel.findOne({ _id: id });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json({ message: "Product Individual Error", error });
    }
};

module.exports = { getAllproduct, getAllproductIndividual }