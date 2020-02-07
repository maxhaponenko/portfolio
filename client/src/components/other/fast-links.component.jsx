import React from 'react';
import { publicPaths } from '../../routes/paths'
import { withRouter } from 'react-router-dom';
import './fast-links.scss'


class FastLinksCompact extends React.Component {
    
    
    render() {
    
        const disabledStyles = {
            backgroundColor: '#3d3d3dcc',
            boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 0px 0px',
            pointerEvents: 'none',
        }

        const currentPathname = this.props.history.location.pathname;

        return (
            <div className="main__container">
                <div className="main__container-heading main__container-heading--blue-highlighted">More</div>
                <div className="fast-links--compact__row pt-2" >
                    <button className="btn fast-links--compact__button" onClick={() => {
                        this.props.history.push(publicPaths.main)
                    }}>Main</button>
                    <button style={(currentPathname === publicPaths.projects) ? disabledStyles : null} className="btn fast-links--compact__button" onClick={() => {
                        this.props.history.push(publicPaths.projects)
                    }}>Projects</button>
                    <button style={(currentPathname === publicPaths.skills) ? disabledStyles : null}  className="btn fast-links--compact__button" onClick={() => {
                        this.props.history.push(publicPaths.skills)
                    }}>Skills</button>
                    <button style={(currentPathname === publicPaths.experience) ? disabledStyles : null} className="btn fast-links--compact__button" onClick={() => {
                        this.props.history.push(publicPaths.experience)
                    }}>Experience</button>
                    <button style={(currentPathname === publicPaths.education) ? disabledStyles : null} className="btn fast-links--compact__button" onClick={() => {
                        this.props.history.push(publicPaths.education)
                    }}>Education</button>
                </div>
            </div>
        )
    }
}

export default withRouter(FastLinksCompact)