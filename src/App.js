import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { basename } from 'config'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Main from 'pages/main/Main.jsx';
import Projects from 'pages/projects/Projects';
import Skills from 'pages/skills/Skills.jsx';
import Education from 'pages/education/Education';
import Experience from 'pages/experience/Experience';
import { publicPaths } from 'routes/paths';
import PagesWrapper from 'components/pages-wrapper/pages-wrapper';
import ErrorPage from 'pages/error-page/ErrorPage'
import CvPdf from 'pages/cv-pdf/cv-pdf.entry'
import Test from 'pages/test/test';

// const queryString = require('query-string');

const App = () => {
    return (
        <BrowserRouter basename={basename}>
            <PagesWrapper>
                <AppWithTransition />
            </PagesWrapper>
        </BrowserRouter>
    )
}

class TransitionWrapper extends React.Component {
    render() {
        return (
            <TransitionGroup>
                <CSSTransition
                    key={this.props.history.location.pathname}
                    classNames="page"
                    timeout={200}
                    unmountOnExit
                >
                    <Switch location={this.props.history.location}>
                        <Route exact path={publicPaths.main} component={Main} />
                        <Route path={publicPaths.projects} component={Projects} />
                        <Route path={publicPaths.skills} component={Skills} />
                        <Route path={publicPaths.education} component={Education} />
                        <Route path={publicPaths.experience} component={Experience} />
                        <Route path={publicPaths.cvPdf} component={CvPdf} />
                        <Route path="/test" component={Test} />
                        <Route component={ErrorPage} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )
    }
}

const AppWithTransition = withRouter(TransitionWrapper)

// const params = queryString.parse(document.location.search);
// const redirect = params.redirect; // this would be "abcdefg" if the query was "?redirect=abcdefg"
// if (document.location.pathname === '/' && redirect) {
//   document.location.assign(`${document.location.origin}/${redirect}`);
// }

export default App;
