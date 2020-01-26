import React, { Component, Fragment } from 'react';

export default class Main extends Component {
    

    render() {
        return (
            <Fragment>
                <div id="mainSection">
                    <div className="wrapper">
                        <div className="row m-0">
                            <div className="col-6 main__container">
                                <div className="main__container-heading">Summary</div> 
                                <div className="main__container-contentBlock"></div>
                            </div>
                            <div className="col-6 main__container">
                                <div className="main__container-heading">More</div> 
                                <div className="main__container-contentBlock"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}