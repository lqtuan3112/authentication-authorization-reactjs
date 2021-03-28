import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { BrowserRouter, HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import PageLogin from './screens/PageLogin';
import PageAdmin from './screens/PageAdmin';
import PageUser from './screens/PageUser';

function App() {
    /**
     * Cấu hình authenticate cho router
     * @param {*} param0
     * @author LQTUAN (26/02/2021)
     */
    const AuthenticatedRoute = ({ component: Component, ...rest }) => {
        let accesstoken = '123';
        let isExpired = false;
        return (
            <Route
                {...rest}
                render={(props) =>
                    accesstoken && !isExpired ? <Component {...props} /> : <Redirect to="/401" />
                }
            />
        );
    };

    return (
        <BrowserRouter>
            <React.Suspense fallback={''}>
                <Switch>
                    <AuthenticatedRoute
                        exact
                        path="/admin"
                        name="Admin page"
                        component={(props) => <PageAdmin />}
                    />
                    <AuthenticatedRoute
                        exact
                        path="/user"
                        name="User page"
                        component={(props) => <PageUser />}
                    />
                    <Route
                        exact
                        path="/401"
                        name="Unauthorize"
                        render={(props) => (
                            <div>You do not have permission to access this website</div>
                        )}
                    />
                    <Route exact path="/login" name="Login" render={(props) => <PageLogin />} />
                    TheLayout
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default App;
