import { useRef, useState, Fragment, useEffect } from "react";
import classes from "./QuoteForm.module.css";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [isFormInValid, setIsFormInValid] = useState(true);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  useEffect(() => {
    if (!isEntering) {
      setIsFormInValid(false);
    }
  }, []);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    if (enteredAuthor.length === 0 || enteredText.length === 0) {
      setIsFormInValid(true);
      return;
    }

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusHandler = () => {
    setIsEntering(true);
    setIsFormInValid(false);
  };

  const finishEnteringHandler = () => {
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    if (enteredAuthor.length !== 0 && enteredText.length !== 0) {
      setIsFormInValid(false);
      setIsEntering(false);
    } else {
      setIsFormInValid(true);
    }
  };

  return (
    <Fragment>
      {isFormInValid && <p className="centered">Form is not valid</p>}
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All your data will be lose!"
        }
      />
      <Card>
        <form
          onFocus={formFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
