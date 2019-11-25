import {API} from "./DAL";

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_TO_BASKET = 'SET_TO_BASKET';


const initialState = {
    storeData: [],
    selectedProducts: [],
};

export let store = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                storeData:  action.products
            };
        case SET_TO_BASKET:
            return {
                ...state,
                selectedProducts:  [ ...state.selectedProducts, action.selected ]
            };
        default: return state;
    }
};

const setProducts = products => ({ type: SET_PRODUCTS, products });
export const setToBasket = selected => ({ type: SET_TO_BASKET, selected });

export const getProducts = () => dispatch => {
    API.getStoreData().then(response => {
        dispatch(setProducts(response.data));
    })
};





















