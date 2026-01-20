import React from 'react'

const AdminReducer = (state, action) => {
    switch (action.type) {

        // *-----------------
        // *Get All User Data
        // *-----------------
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "SET_USER_DATA":
            return {
                ...state,
                isLoading: false,
                getAlluser: action.payload,
            };

        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        // *------------------------
        // *Get All ContactForm Data
        // *------------------------
        case "SET_CONTACT_LOADING":
            return {
                ...state,
                isContactLoading: true,
            };

        case "SET_CONTACTFORM_DATA":
            return {
                ...state,
                isContactLoading: false,
                getAllcontactForm: action.payload,
            };

        case "SET_CONTACT_ERROR":
            return {
                ...state,
                isContactLoading: false,
                isContactError: true
            };

        // *--------------------
        // *Get All Product Data
        // *--------------------
        case "SET_GETALLPRODTUCD_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };

        case "SET_GETALLPRODTUCD_DATA": {
            const featureProduct = action.payload.filter((curElem) => {
                return curElem.feature !== false;
            });
            // console.log('featureProducts', featureProduct)

            return {
                ...state,
                isSingleLoading: false,
                AllProducts: action.payload,
                FeatureAllroducts: featureProduct
            };
        }

        case "SET_GETALLPRODTUCD_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isSingleError: true
            };


        default:
            return {
                state,
            };
    }
}

export default AdminReducer