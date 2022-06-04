import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import AllQuotes from "./components/pages/AllQuotes";
import QuoteDetail from "./components/pages/QuoteDetail";
import NewQuote from "./components/pages/NewQuote";

function App() {
    return (
        <Fragment>
            <MainNavigation />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/quotes" />
                </Route>
                <Route path="/quotes" exact>
                    <AllQuotes />
                </Route>
                <Route path="/quotes/:quoteId">
                    <QuoteDetail />
                </Route>
                <Route path="/new-quote">
                    <NewQuote />
                </Route>
            </Switch>
        </Fragment>
    );
}

export default App;
