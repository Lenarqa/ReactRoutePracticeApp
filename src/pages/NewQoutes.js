import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory }  from "react-router-dom"
// import classes from './NewQuotes.module.css';

const NewQuotes = (props) => {
    const history = useHistory();
    const addNewQouteHandler = (qouteData) => {
        console.log("addNewQouteHandler");
        console.log(qouteData);
        
        history.push("/quotes");
    }
    
    return (
        <div>
            <h2>New Qoutes</h2>
            <QuoteForm onAddQuote={addNewQouteHandler}/>
        </div>
    );
};

export default NewQuotes;