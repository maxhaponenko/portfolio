import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class PagesWrapper extends Component {
    
    render() {

        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/registration">Registration</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <button
                                    className="btn btn-outline-success my-2 my-sm-0"
                                    type="warning"
                                    onClick={() => this.props.history.push("/registration")}>Registration</button>
                                <button
                                    className="btn btn-outline-success my-2 my-sm-0 ml-3"
                                    type="submit"
                                    onClick={() => this.props.history.push("/login")}>Login</button>
                            </form>
                        </div>
                    </nav>
                </header>

                {this.props.children}

                <footer>

                </footer>
            </div>
        )
    } 
}

export default withRouter(PagesWrapper)