import { useEffect } from 'react';

import useHttp from '../../hooks/use-http';
import { getAllQuotes } from '../../lib/api';
import QuoteList from '../quotes/QuoteList';
import LoadingSpinner from '../UI/LoadingSpinner';
import NoQuotesFound from '../quotes/NoQuotesFound';

const AllQuotes = () => {
    const { sendRequest, status, data, error } = useHttp(getAllQuotes, true);    // destructuring data

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

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

    if (status === "completed" && (!data || data.length === 0)) {
        return <NoQuotesFound className='focused' />;
    }

    return (
        <QuoteList quotes={data} />
    );
};

export default AllQuotes;