export const getQuote = () => {
    return (dispatch) => {
      dispatch({ type: "GET_QUOTE_REQUEST" });
      fetch("https://api.taylor.rest/")
        .then((response) => response.json())
        .then((data) => dispatch({ type: "GET_QUOTE_SUCCESS", payload: data }))
        .catch((error) => dispatch({ type: "GET_QUOTE_ERROR", payload: error }));
    };
  };
  