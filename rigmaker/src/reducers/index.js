import { ADD_ARTICLE, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, SORT_PRODUCTS, SORT_PRODUCTS_PENDING, SEARCH_PRODUCTS, SEARCH_PRODUCTS_PENDING, ADD_PROCESSOR, ADD_PROCESSOR_PENDING, LOGIN_PENDING, LOGIN_SUCCESSFUL, LOGIN_UNSUCCESSFUL } from "../constants/action-types";

const initialState = {
  articles: [],
  pending: false,
  products: [],
  error: null,
  orig_products: [],
  components: {},
  user: {},
  login_success: false
};

function checkMatch(word) {
  console.log(word);
  //return obj.Name.startsWith(word);
}

export function rootReducer(state = initialState, action) {
    console.log(action.type)
    switch(action.type) {
        case LOGIN_PENDING:
            return {
                ...state,
                pending: true
            }
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                pending: false,
                user: action.payload.data,
                login_success: true
            }
        case LOGIN_UNSUCCESSFUL:
            return {
                ...state,
                pending: false,
                login_success: false
            }
        case FETCH_PRODUCTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.products,
                orig_products: action.products
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case SORT_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case SORT_PRODUCTS:
            console.log(action.sort)
            var prods = null;
            switch(action.sort){
                case "name":
                    prods = state.products.sort(function(a,b){
                        if(action.val=="asc")
                        {
                            if(a.Name < b.Name) { return -1; }
                            if(a.Name > b.Name) { return 1; }
                            return 0;
                        }
                        else
                        {
                            if(a.Name > b.Name) { return -1; }
                            if(a.Name < b.Name) { return 1; }
                            return 0;
                        }
                    });
                case "cpu":
                    prods = state.products.sort(function(a,b){
                        if(action.val=="asc")
                        {
                            return a.Cores = b.Cores
                        }
                        else
                        {
                            return b.Cores = a.Cores
                        }
                    });
                case "speed":
                    prods = state.products.sort(function(a,b){
                        if(action.val=="asc")
                        {
                            return a.Speed - b.Speed
                        }
                        else
                        {
                            return b.Speed - a.Speed
                        }
                    });
                case "power":
                    prods = state.products.sort(function(a,b){
                        if(action.val=="asc")
                        {
                            return a.Power - b.Power
                        }
                        else
                        {
                            return b.Power - a.Power
                        }
                    });
                case "price":
                    prods = state.products.sort(function(a,b){
                        if(action.val=="asc")
                        {
                            return a.Price - b.Price
                        }
                        else
                        {
                            return b.Price - a.Price
                        }
                    });
            }
            console.log(prods);
            return {
                ...state,
                pending: false,
                products: prods
            }
        case SEARCH_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case SEARCH_PRODUCTS:
            prods = []
            const lowercasedFilter = action.payload.toLowerCase();
            console.log(lowercasedFilter)
            state.orig_products.forEach(function(person){
                if(person.Name.toLowerCase().indexOf(lowercasedFilter)!=-1)
                prods.push(person);
            });
            return {
                ...state,
                pending: false,
                products: prods
            }
        case ADD_PROCESSOR_PENDING:
            return {
                ...state,
                pending: true
            }
        case ADD_PROCESSOR:
            console.log("Called t");
            if(state.components == undefined)
            {
                state.components = {}
            }
            var add = true;
            if(state.components["processor"] != undefined && state.components["processor"] == action.payload)
            {
                add = false;
            }
            var comp = Object.assign({}, state.components);
            console.log(state.components)
            if(add == true){
                comp.processor = action.payload
            }
            else{
                comp.processor = {}
            }
           return {
                ...state,
                pending: false,
                components: comp
            }
    }
    return state;
}

export default rootReducer;
export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;
export const getComponents = state => state.components;
export const getLoginSucess = state => state.login_success;