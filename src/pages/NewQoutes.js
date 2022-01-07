import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
// import classes from './NewQuotes.module.css';

const NewQuotes = (props) => {
    const addNewQouteHandler = () => {
        console.log("addNewQouteHandler");
    }
    
    return (
        <div>
            <h2>New Qoutes</h2>
            <QuoteForm onAddQuote={addNewQouteHandler}/>
        </div>
    );
};

export default NewQuotes;