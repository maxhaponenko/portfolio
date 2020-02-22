import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from 'pages/main/Main.jsx';
import Projects from 'pages/projects/Projects';
import Skills from 'pages/skills/Skills.jsx';
import Education from 'pages/education/Education';
import Experience from 'pages/experience/Experience';
import { publicPaths } from 'routes/paths';
import PagesWrapper from 'components/pages-wrapper/pages-wrapper';
import ErrorPage from 'pages/error-page/ErrorPage'


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <PagesWrapper>
                    <Switch>
                        <Route exact path={publicPaths.main} component={Main} />
                        <Route path={publicPaths.projects} component={Projects} />
                        <Route path={publicPaths.skills} component={Skills} />
                        <Route path={publicPaths.education} component={Education} />
                        <Route path={publicPaths.experience} component={Experience} />
                        <Route component={ErrorPage} />
                    </Switch>
                </PagesWrapper>
            </BrowserRouter>
        )
    }
}
          
export default App;
