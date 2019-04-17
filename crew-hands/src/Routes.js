import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import InviteHands from "./views/users/suppliers/InviteHands";
import SupplierProfile from "./views/users/suppliers/SupplierProfile";
import SuppliersContact from "./views/users/suppliers/SuppliersContact";
import SuppliersEinstellungen from "./views/users/suppliers/SuppliersEinstellungen";
import SuppliersJobList from "./views/users/suppliers/SuppliersJobList";

import HandProfile from "./views/users/hands/HandProfile";
import HandsContact from "./views/users/hands/HandsContact";
import HandsEinstellungen from "./views/users/hands/HandsEinstellungen";
import HandsJobList from "./views/users/hands/HandsJobList";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/suppliers-profile" component={SupplierProfile} />
      <Route path="/suppliers-kontakt" component={SuppliersContact} />

      <Route path="/invite-hands" component={InviteHands} />
      <Route path="/suppliers-job-list" component={SuppliersJobList} />
      <Route
        path="/suppliers-einstellungen"
        component={SuppliersEinstellungen}
      />

      <Route path="/hands-profile" component={HandProfile} />
      <Route path="/hands-job-list" component={HandsJobList} />
      <Route path="/hands-einstellungen" component={HandsEinstellungen} />
      <Route path="/hands-kontakt" component={HandsContact} />
    </Switch>
  );
};

export default Routes;
