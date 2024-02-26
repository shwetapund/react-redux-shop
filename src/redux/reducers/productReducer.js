import {ActionTypes} from "./../contants/action-types";

const initialState = { //object 
    products:[
        {
            id:1,
            title:"Shweta",
            category:"programmer",
        },
    ], //the products will be an empty array
}; //ye intialstate hein product ki

export const productReducer = (state, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        dafault: 
            return state;
    }
};