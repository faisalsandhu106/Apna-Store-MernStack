import { toast, Zoom } from 'react-toastify';

export const hendleSuccess = (msg) => {
    toast.success(msg, {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        pauseOnFocusLoss: true,
        draggable: true,
        progress: undefined,
        // transition: Zoom
    })
};

export const hendleError = (msg) => {
    toast.error(msg, {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        pauseOnFocusLoss: true,
        draggable: true,
        progress: undefined,
        // transition: Zoom
    })
};  