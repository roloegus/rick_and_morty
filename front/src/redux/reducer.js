import { ADD_FAVORITE, REMOVE_FAVORITE, CLEAN_DETAIL, GET_CHARACTER_DETAIL } from "./actions";

const initialState = {
    myFavorites: [],
    characterDetail: {},
};
// siempre recibe dos cosas el reducer
// payload es una propiedad de la action
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            };
          
            case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload),
            };

            case GET_CHARACTER_DETAIL:
                return {
                    ...state,
                    characterDetail: action.payload,
                }
            
            case CLEAN_DETAIL:
                return {
                    ...state,
                    characterDetail: {},
                }    
        default:
            return {...state};
    }
};

export default rootReducer;