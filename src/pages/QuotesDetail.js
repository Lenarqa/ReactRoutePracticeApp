import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
// import classes from './QuotesDetail.module.css';

const QuotesDetail = (props) => {
  const params = useParams();

  const qoute = DUMMY_QOUTES.find((item) => item.id === params.quotesId);

  if(!qoute) {
      return <p>No qoute find!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={qoute.text} author={qoute.author} />
      <Route path={`/quotes/${params.quotesId}/comments`}>
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
