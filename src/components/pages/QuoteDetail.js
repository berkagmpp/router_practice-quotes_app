import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

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
    const match = useRouteMatch();

    const quote = DUMMY_QUOTES.find(
        (quote) => quote.id === params.quoteId
    );

    if (!quote) {
        return <p>No quote found!</p>;
    }

    return (
        <Fragment>
            <HighlightedQuote author={quote.author} text={quote.text} />
            <Route path={match.path} exact> 
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>  
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;