import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Main from './pages/Main';
import { publicPaths } from './routes/paths';
import PagesWrapper from './components/pages-wrapper';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PagesWrapper>
                        <Route exact path={publicPaths.home} component={Main} />
                        <Route path={publicPaths.loginPage} component={LoginPage} />
                        <Route path={publicPaths.registrationPage} component={RegistrationPage} />
                    </PagesWrapper>
                    
                </Switch>
            </BrowserRouter>
        )
    }
}
          
export default App;
