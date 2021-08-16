import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Quote from "./pages/quote";
import Payee from "./pages/payee";
import Final from "./pages/final";
import Sld from "./pages/sld";
import Home from "./pages/home";

import SetInfo from "./components/sld/setInfo";
import GetInfo from "./components/sld/getInfo";

import SetQuoteRouter from "./components/quote/setQuoteRouter";
import GetQuoteRouter from "./components/quote/getQuote";
import DeleteQuote from "./components/quote/deleteRouter";

import ConfirmationFrom from "./components/payee/confirmationFrom";
import ConfirmationTo from "./components/payee/confirmationTo";

import SetFinal from "./components/final/setFinal";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sld" exact component={Sld} />
          <Route path="/quote" exact component={Quote} />
          <Route path="/payee" exact component={Payee} />
          <Route path="/final" exact component={Final} />
          <Route path="/sld/set" component={SetInfo} />
          <Route path="/sld/get" component={GetInfo} />
          <Route path="/quote/set" component={SetQuoteRouter} />
          <Route path="/quote/get" component={GetQuoteRouter} />
          <Route path="/quote/del" component={DeleteQuote} />
          <Route path="/payee/from" component={ConfirmationFrom} />
          <Route path="/payee/to" component={ConfirmationTo} />
          <Route path="/final/set" component={SetFinal} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
