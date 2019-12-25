import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Home from './pages/Home';
import { publicPaths } from './routes/paths';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={publicPaths.home} component={Home} />
                    <Route path={publicPaths.loginPage} component={LoginPage} />
                    <Route path={publicPaths.registrationPage} component={RegistrationPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}
          
export default App;
