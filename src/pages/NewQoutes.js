import React, { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
// import classes from './NewQuotes.module.css';

const NewQuotes = (props) => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);
  const addNewQouteHandler = (qouteData) => {
    sendRequest(qouteData);
  };

  return <QuoteForm isLoading={status === "pending"} onAddQuote={addNewQouteHandler} />;
};

export default NewQuotes;
