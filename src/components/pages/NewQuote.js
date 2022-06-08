import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../quotes/QuoteForm";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";

const NewQuote = () => {
    const { sendRequest, status } = useHttp(addQuote);  // destructuring data
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history]);  // actually, history is not changed

    const addQuoteHandler = quoteData => {
        // console.log(quoteData);
        sendRequest(quoteData);
    };

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} /> // sending 'pending' status if status is 'isLoading' to QuoteForm
    );
};

export default NewQuote;