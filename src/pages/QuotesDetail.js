import React, { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuotesDetail = (props) => {
  const params = useParams();
  const match = useRouteMatch();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  const { quotesId } = params;

  useEffect(() => {
    sendRequest(quotesId);
  }, [sendRequest, quotesId]);

  // const qoute = DUMMY_QOUTES.find((item) => item.id === params.quotesId);

  if(status === "pending") {
    return <div className="centered">
      <LoadingSpinner />
    </div>
  }

  if(error) {
    return <p className="centered">{error}</p>
  }


  if (!loadedQuote.text) {
    return <p>No qoute find!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetail;

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
