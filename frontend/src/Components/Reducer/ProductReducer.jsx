import React from 'react'

const ProductReducer = (state, action) => {
    switch (action.type) {

        // Get Method API Data---------------------------------------------------
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "SET_PRODUCT_DATA": {
            const featureProducts = action.payload.filter((curElem) => {
                return curElem.feature !== false;
            });
            // console.log('featureProducts', featureProducts)

            return {
                ...state,
                isLoading: false,
                Allproducts: action.payload,
                featureProducts: featureProducts,
            };
        }

        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        // Get SingleProduct From API---------------------------------------------------
        case "SET_SINGLEPRODUCT_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };

        case "SET_SINGLEPRODUCT_DATA":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
            };

        case "SINGLEPRODUCT_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                singleProducError: true
            };

        default:
            return {
                state,
            };
    };
};

export default ProductReducer