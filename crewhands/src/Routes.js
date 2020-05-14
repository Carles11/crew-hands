import React from 'react'
import { Switch, Route } from 'react-router-dom'

import InviteHands from './views/users/suppliers/InviteHands'
import SupplierProfile from './views/users/suppliers/SupplierProfile'
import SupplierProfileForm from './components/suppliers/profile/SuppliersProfileForm'
import SuppliersContact from './views/users/suppliers/SuppliersContact'
import SuppliersEinstellungen from './views/users/suppliers/SuppliersEinstellungen'
import SuppliersJobList from './views/users/suppliers/SuppliersJobList'

import HandProfile from './views/users/hands/HandProfile'
import HandsContact from './views/users/hands/HandsContact'
import HandsEinstellungen from './views/users/hands/HandsEinstellungen'
import HandsJobList from './views/users/hands/HandsJobList'

import Home from './views/Home'
import PrivacyStatement from './views/PrivacyStatement'
import Imprint from './views/Imprint'
import Header from './components/Header'
import Footer from './components/Footer'

const Routes = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    exact
                    path="/datenschutzerklaerung"
                    component={PrivacyStatement}
                />
                <Route exact path="/impressum" component={Imprint} />

                <Route path="/suppliers-profile" component={SupplierProfile} />
                <Route
                    path="/suppliers-profile-form"
                    component={SupplierProfileForm}
                />
                <Route path="/suppliers-kontakt" component={SuppliersContact} />
                <Route path="/suppliers-invite-hands" component={InviteHands} />
                <Route
                    path="/suppliers-job-list"
                    component={SuppliersJobList}
                />
                <Route
                    path="/suppliers-einstellungen"
                    component={SuppliersEinstellungen}
                />

                <Route path="/hands-profile" component={HandProfile} />
                <Route path="/hands-kontakt" component={HandsContact} />
                <Route path="/hands-job-list" component={HandsJobList} />
                <Route
                    path="/hands-einstellungen"
                    component={HandsEinstellungen}
                />
                <Footer />
            </Switch>
        </>
    )
}

export default Routes
