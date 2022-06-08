import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
};

const QuoteList = (props) => {
    const history = useHistory();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search); // loaction.search = '/quotes?sort=' + ' '
    const isSortingAscending = queryParams.get('sort') === 'asc';
    const sortedQuotes = sortQuotes(props.quotes, isSortingAscending); // pass (quotes,  a Boolean value of isSortingAscending) to sortQuotes fn which is located outside of QuoteList, and store the result in soltedQuotes constance

    const changeSortingHandler = () => {
        history.push({
            pathname: location.pathname,
            search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`
        }); // send push using as an obj is more readable then blow

        // history.push(`${location.pathname}?sort=${isSortingAscending ? 'desc' : 'asc'}`);   // re-evaluated when press the sorting button because React-router changes history, and re-load the page we're currently on 
    };

    return (
        <Fragment>
            <div className={classes.sorting}>
                <button onClick={changeSortingHandler}>Sorting {isSortingAscending ? 'Descending' : 'Ascending'}</button>
            </div>
            <ul className={classes.list}>
                {sortedQuotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default QuoteList;
