import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";

import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from '../comments/Comments'

const DUMMY_QUOTES = [
    { 
        id: 'q1',
        author: 'Claire',
        text: 'React-router practice'
    },
    { 
        id: 'q2',
        author: 'Derek',
        text: 'React practice'
    },
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(
        (quote) => quote.id === params.quoteId
    );

    if (!quote) {
        return <p>No quote found!</p>;
    }

    return (
        <Fragment>
            <HighlightedQuote author={quote.author} text={quote.text} />
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;