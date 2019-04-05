import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import SupplierProfile from "./views/users/suppliers/SupplierProfile";
import InviteHands from "./views/users/suppliers/InviteHands";
import Payments from "./views/users/suppliers/Payments";
import Account from "./views/users/suppliers/Account";
import HandProfile from "./views/users/hands/HandProfile";
import JobList from "./views/users/hands/JobList";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/supplier-profile" component={SupplierProfile} />
      <Route path="/invite-hands" component={InviteHands} />
      <Route path="/payments" component={Payments} />
      <Route path="/account" component={Account} />
      <Route path="/hand-profile" component={HandProfile} />
      <Route path="/hand-job-liste" component={JobList} />
    </Switch>
  );
};

export default Routes;
