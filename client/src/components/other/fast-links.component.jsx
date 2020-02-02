import React from 'react';
import { publicPaths } from '../../routes/paths'
import { withRouter } from 'react-router-dom';
import './fast-links.scss'


class FastLinksCompact extends React.Component {
    render() {
        return (
            <div className="main__container">
                <div className="main__container-heading main__container-heading--blue-highlighted">More</div>
                <div className="fast-links--compact__row pt-2" >
                    <button className="btn fast-links--compact__button" onClick={() => {
                        this.props.history.push(publicPaths.projects)
                    }}>Projects</button>
                    <button className="btn fast-links--compact__button" onClick={() => {
                        this.props.history.push(publicPaths.education)
                    }}>Education</button>
                    <button className="btn fast-links--compact__button" onClick={() => {
                        this.props.history.push(publicPaths.skills)
                    }}>Skills</button>
                    <button className="btn fast-links--compact__button" onClick={() => {
                        this.props.history.push(publicPaths.experience)
                    }}>Experience</button>
                </div>
            </div>
        )
    }
}

export default withRouter(FastLinksCompact)