import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import MainNavigation from "./components/layout/MainNavigation";
import LoadingSpinner from "./components/UI/LoadingSpinner";

// import AllQoutes from "./pages/AllQuotes";
// import NotFound from "./pages/NotFound";
// import NewQuotes from "./pages/NewQoutes";
// import QuotesDetail from "./pages/QuotesDetail";

const NewQuotes = React.lazy(() => import("./pages/NewQoutes"));
const QuotesDetail = React.lazy(() => import("./pages/QuotesDetail"));
const AllQoutes = React.lazy(() => import("./pages/AllQuotes"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
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
      </Suspense>
    </Layout>
  );
}

export default App;
