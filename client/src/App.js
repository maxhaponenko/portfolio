import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './pages/main/Main.jsx';
import Projects from './pages/Projects';
import Skills from './pages/skills/Skills.jsx';
import Education from './pages/education/Education';
import Experience from './pages/experience/Experience';
import { publicPaths } from './routes/paths';
import PagesWrapper from './components/pages-wrapper/pages-wrapper';


class App extends React.Component {
    render() {
        return (
            // <Provider store={{}}>
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
            // </Provider>
            
        )
    }
}
          
export default App;
