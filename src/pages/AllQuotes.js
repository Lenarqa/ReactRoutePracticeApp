import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const AllQoutes = (props) => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(()=>{
    sendRequest();
  }, [sendRequest]);

  if(status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  }


  if(error) {
    return <p className="centered focus">{error}</p>
  }

  if(status === "completed" && (!loadedQuote || loadedQuote.length === 0)) {
    return <NoQuotesFound />
  }

  return (
    <div>
      <h2>All Qoutes</h2>
      <QuoteList quotes={loadedQuote} />
    </div>
  );
};

export default AllQoutes;

const DUMMY_QOUTES = [
  {
    id: "p1",
    author: "Lenar",
    text: "Hello world!",
  },
  {
    id: "p2",
    author: "Lenar 2",
    text: "Hello world 2!",
  },
  {
    id: "p3",
    author: "Lenar 3",
    text: "Hello world 3!",
  },
  {
    id: "p4",
    author: "Lenar 4",
    text: "Hello world 4!",
  },
];
