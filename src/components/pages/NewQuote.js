import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
    const addQuoteHandler = quoteData => {
        console.log(quoteData);
    };

    return (
        <QuoteForm onAddQuite={addQuoteHandler} />
    );
};

export default NewQuote;