import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Homepage from "./components/Home";
import Booking from "./components/Booking";
import Spot from "./components/Spot";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/bookings">
            <Booking />
          </Route>
          <Route path="/bookings/:bookingId">
            <Spot />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
