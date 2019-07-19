import React from 'react';
import ReactDOM from 'react-dom';

import "./css/bootstrap.min.css";
import "./css/custom.css";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from ".";
import ImageUpload from "./upload";

class Result extends React.Component {
    render() {
        return (
            <div>
                {/* Template by Quackit.com */}
                {/* Images by various sources under the Creative Commons CC0 license and/or the Creative Commons Zero license. 
                Although you can use them, for a more unique website, replace these images with your own. */}
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
                <title>DLTS Style Transfer</title>

                {/* Custom Fonts from Google */}
                <link
                    href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
                    rel="stylesheet"
                    type="text/css"
                />

                {/* Navigation */}
                <nav
                    id="siteNav"
                    className="navbar navbar-default navbar-fixed-top"
                    role="navigation"
                >
                    <div className="container">
                        {/* Logo and responsive toggle */}
                        <div className="navbar-header">
                            <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#navbar"
                            >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" > <Link to="/">
                                <span className="glyphicon glyphicon-fire" />
                                DLTS
                            </Link>
                            </a>
                        </div>

                        {/* Navbar links */}
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="nav navbar-nav navbar-right">
                            <li className="active">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="active">
                                <Link to="/upload">Generate</Link>
                            </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                        </div>
                        {/* /.container */}
                </nav>
                
                {/* Header */}
                <header>
                    <div className="content">
                        <div className="header-content-inner">
                        <br /> <br />
                            <h2> Image generated! </h2>
                        </div>
                        <br /> <br /> <br /> <br />

                        <img src={this.props.result_url} alt="result_url" mode="fit"/>

                        <br /> <br /> <br /> <br />
                        <button className="btn btn-primary btn-lg" onClick={this.props.reset}>Create another image</button>
                        <br /> <br /> <br /> <br />
                    </div>
                </header>
            </div>          
        );
    }
}

ReactDOM.render(
    <Router>
        <div>
          <Route exact path="/upload" component={ImageUpload} />
          <Route exact path="/" component={Home} />
        </div>
    </Router>,
    document.getElementById('root')
);

export default Result;
