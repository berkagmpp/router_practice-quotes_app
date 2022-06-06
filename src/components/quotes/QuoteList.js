import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
    const history = useHistory();
    const location = useLocation();
    
    const queryParams = new URLSearchParams(location.search); // loaction.search = '/quotes?sort=' + ' '
    const isSortingAscending = queryParams.get('sort') === 'asc';

    const changeSortingHandler = () => {
        history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));   // re-evaluated when press the sorting button because React-router changes history, and re-load the page we're currently on 
    };

    return (
        <Fragment>
            <div className={classes.sorting}>
                <button onClick={changeSortingHandler}>Sorting {isSortingAscending ? 'Descending' : 'Ascending'}</button>
            </div>
            <ul className={classes.list}>
                {props.quotes.map((quote) => (
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
