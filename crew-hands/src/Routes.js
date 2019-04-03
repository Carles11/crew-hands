import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import SupplierProfile from "./views/users/suppliers/SupplierProfile";
import JobList from "./components/JobList";
import InviteHands from "./views/users/suppliers/InviteHands";
import Payments from "./views/users/suppliers/Payments";
import Account from "./views/users/suppliers/Account";
import HandProfile from "./views/users/hands/HandProfile";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/supplier-profile" component={SupplierProfile} />
      <Route path="/job-list" component={JobList} />
      <Route path="/invite-hands" component={InviteHands} />
      <Route path="/payments" component={Payments} />
      <Route path="/account" component={Account} />
      <Route path="/hand-profile" component={HandProfile} />
    </Switch>
  );
};

export default Routes;
