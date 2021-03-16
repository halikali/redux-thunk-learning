import { useEffect } from "react";
import { connect } from "react-redux";
import { getQuote } from "./store/actions/index";
import "./styles.css";

const App = ({ getQuoteToThisPage, quotes, author }) => {
  useEffect(() => {
    getQuoteToThisPage();
  }, []);
  return (
    <div className="App">
      <h1>{quotes}</h1>
      <h2>{author}</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  quotes: state.quoteReducer.data.quote || "",
  author: state.quoteReducer.data.author || ""
});

const mapDispatchToProps = (dispatch) => ({
  getQuoteToThisPage: () => dispatch(getQuote())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
