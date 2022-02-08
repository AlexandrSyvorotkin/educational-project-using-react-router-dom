import {Redirect, Route, Switch} from "react-router-dom";
import NewQoute from "./components/pages/NewQoute";
import AllQuotes from "./components/pages/AllQuotes";
import QouteDetail from "./components/pages/QouteDetail";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/quotes'/>
                </Route>
                <Route path='/quotes' exact>
                    <AllQuotes/>
                </Route>
                <Route path='/quotes/:quoteId'>
                    <QouteDetail/>
                </Route>
                <Route path='/new-qoute'>
                    <NewQoute/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
