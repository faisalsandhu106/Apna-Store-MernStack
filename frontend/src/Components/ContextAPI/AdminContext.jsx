import { createContext, useContext, useReducer } from "react";
import axios from 'axios'
import React, { useEffect } from 'react'
import reducer from "../Reducer/AdminReducer"

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
    const api = 'http://localhost:3000'

    const initialState = {
        getAlluser: [],
        getAllcontactForm: [],
        AllProducts: [],
        FeatureAllroducts: [],
        isLoading: false,
        isError: false,
        isContactLoading: false,
        isContactError: false,
        isSingleLoading: false,
        isSingleError: false,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    // *---------------------------
    // *Get All User In admin Penal
    // *---------------------------
    const getAlluser = async (api) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(`${api}/admin/user`)
            const getAlluser = await res.data;
            // console.log('data', getAlluser)
            dispatch({ type: "SET_USER_DATA", payload: getAlluser })

        } catch (error) {
            dispatch({ type: "SET_ERROR" })
        }
    };


    // *----------------------------------
    // *Get All ContactForm In admin Penal
    // *----------------------------------

    const getContactForm = async () => {
        dispatch({ type: "SET_CONTACT_LOADING" })
        try {
            const res = await axios.get(`${api}/admin/contactform`)
            const getAllcontactForm = await res.data;
            // console.log('data', getAllcontactForm)
            dispatch({ type: "SET_CONTACTFORM_DATA", payload: getAllcontactForm })

        } catch (error) {
            dispatch({ type: "SET_CONTACT_ERROR" })
        }
    };

    // *-------------------------------
    // *Get All Products in Admin Penal
    // *-------------------------------
    const getAllproduct = async (api) => {
        dispatch({ type: "SET_GETALLPRODTUCD_LOADING" })
        try {
            const res = await axios.get(`${api}/admin/allproduct`)
            const AllProducts = await res.data;
            // console.log('All Product data', AllProducts)
            dispatch({ type: "SET_GETALLPRODTUCD_DATA", payload: AllProducts })

        } catch (error) {
            dispatch({ type: "SET_GETALLPRODTUCD_ERROR" })
        }
    };

    useEffect(() => {
        getAlluser(api);
        getContactForm(api);
        getAllproduct(api);
    }, [api])

    return (
        <AdminContext.Provider value={{ ...state }}>
            {children}
        </AdminContext.Provider>
    )
};

const UseAdminContext = () => {
    return useContext(AdminContext)
};

export { AdminContext, AdminProvider, UseAdminContext };