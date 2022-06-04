import QuoteList from '../quotes/QuoteList';

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

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    );
};

export default AllQuotes;