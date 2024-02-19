import { ActionTypes } from "../contants/action-types";

export const setProducts = (products) =>{ //arrow fun
    return { //the Action is always return object which has key and payload 
        type: ActionTypes.SET_PRODUCTS, 
        payload: products,
    };
};

export const selectedProduct = (product) =>{ //arrow fun
    return { //the Action is always return object which has key and payload 
        type: ActionTypes.SELECTED_PRODUCT, 
        payload: product,
    };
};