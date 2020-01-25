import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Experience from './pages/Experience';
import { publicPaths } from './routes/paths';
import PagesWrapper from './components/pages-wrapper';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PagesWrapper>
                        <Route exact path={publicPaths.main} component={Main} />
                        <Route path={publicPaths.projects} component={Projects} />
                        <Route path={publicPaths.skills} component={Skills} />
                        <Route path={publicPaths.education} component={Education} />
                        <Route path={publicPaths.experience} component={Experience} />
                    </PagesWrapper>
                    
                </Switch>
            </BrowserRouter>
        )
    }
}
          
export default App;
