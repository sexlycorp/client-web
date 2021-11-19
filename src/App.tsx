import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './config/routes';
// styles
import './App.css';
// screens
import LoginPage from './pages/auth/Login';
import SignupPage from './pages/auth/Signup';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.home} component={LoginPage} />
                <Route exact path={routes.login} component={LoginPage} />
                <Route exact path={routes.signup} component={SignupPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
