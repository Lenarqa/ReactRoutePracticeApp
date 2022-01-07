import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";

import AllQoutes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQoutes";
import NotFound from "./pages/NotFound";
import QuotesDetail from "./pages/QuotesDetail";

function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQoutes />
          </Route>
          <Route path="/quotes/:quotesId">
            <QuotesDetail />
          </Route>
          <Route path="/new-quotes">
            <NewQuotes />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
