import { combineReducers } from "redux";

const initialState = {
  data: {},
  isLoading: false
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUOTE_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "GET_QUOTE_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };

    case "GET_QUOTE_ERROR":
      return {
        ...state,
        error: "You got an error...",
        isLoading: false
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  quoteReducer
});

export default rootReducer;
