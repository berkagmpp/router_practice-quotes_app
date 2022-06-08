import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from '../comments/Comments'

const QuoteDetail = () => {
    const params = useParams();
    const { quoteId } = params;     // getSingleQuote fn needs only quoteId, so choose quoteId only from params 

    const match = useRouteMatch();

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect(()=>{
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);     // quoteId which is destructed from params makes to useEffect re-run as precise as possible 
    
    if (status === "pending") {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <p className='centered focused'>{error}</p>
        );
    }

    if (!loadedQuote.text) {    //  becouse loadedQuote is always returned from getSingleQuote fn of api.js, '.text' is necessary
        return <p>No quote found!</p>;
    }

    return (
        <Fragment>
            <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
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