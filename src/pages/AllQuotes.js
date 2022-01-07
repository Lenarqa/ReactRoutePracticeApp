import React from "react";
import QuoteList from "../components/quotes/QuoteList";
// import classes from './AllQoutes.module.css';

const AllQoutes = (props) => {
  return (
    <div>
      <h2>All Qoutes</h2>
      <QuoteList quotes={DUMMY_QOUTES} />
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
