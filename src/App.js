import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HRhFfGcxHRCwZ4Mg9hgYneaFBzUG0Qg9OjM6Xat8c9mpKXJ9Ow2DlTMrXZJ7Fs3zfP2pyRk3N4P6qiIwMzwJykt00zFMpE6VA"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads....
    /* as soon as the app loads, we attach this listener and once we attach it. It will always listening. */
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is logged in: ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        /** Either user just logged in/ the was user logged in */
      } else {
        /** The user is logged out */
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    /** BEM [Block Element Modifier] - Convention */
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            {/** High order function: It wraps the payment element */}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
