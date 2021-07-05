import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ComponentDebts from '../components/Debts/Debts';
import ComponentDebtForm from '../components/Form/Form';

export default function Root() {
    return(
        <Router>
            <Switch>
                <Route path="/" component={ComponentDebts} exact></Route>
                <Route path="/create" component={ComponentDebtForm}></Route>
                <Route path="/edit/:id" component={ComponentDebtForm}></Route>
            </Switch>
        </Router>
    );
}
