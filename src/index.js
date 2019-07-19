import React from 'react';
import ReactDOM from 'react-dom';

import "./css/bootstrap.css";
import "./css/bootstrap.min.css";
import "./css/custom.css";

import pyramid_overview from "./images/pyramid_overview.png";
import combo_3_pics from "./images/combo_3_pics.jpg";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loading from "./loading";
import Result from "./result";
import ImageUpload from "./upload";

class Home extends React.Component {
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
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <h1>DLTS Style Transfer</h1>

                            <br/><br/>
                            <p>Upload and Transform images.</p>

                            <br/><br/>
                            <Link to="/upload"><button className="btn btn-primary btn-lg">Begin</button></Link>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        </div>
                    </div>
                </header>

                {/* Content 1 */}
                <div className="container-fluid">
                    <div className="row promo">
                    <img
                            className="img-responsive center-block"
                            src={combo_3_pics}
                            alt="combo_3_pics"
                        />
                    </div>
                </div>
                {/* /.container-fluid */}

                {/* Content 3 */}
                <section className="content content-3">
                    <div className="container">
                    <h2 className="section-header">
                        <span className="glyphicon glyphicon-picture text-primary" />
                        <br /> Neural Style Transfer
                    </h2>
                    <p className="lead text-muted">
                        Neural Style Transfer uses a class of software algorithms to
                        manipulate digital images, or videos, to adopt the appearance
                        or visual style of another image. These algorithms use of deep
                        neural networks in order to perform the image transformation.
                        .
                    </p>
                    </div>
                </section>

                {/* Content 2 */}
                <section className="content content-2">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                        <h2 className="section-header">DLTS and DeepScale</h2>
                        <p className="lead text-light">
                            Deep Learning Training Service (DLTS) is a platform that
                            supports large scale distributed training jobs on GPU
                            across multiple machines. It leverages DLWorkspace for
                            platform resource management/scheduling and partners up
                            with DeepScale to improve distributed training
                            performance.
                        </p>
                        <a
                            href="https://dlts.azurewebsites.net/"
                            className="btn btn-default btn-lg"
                        >
                            DLTS Home
                        </a>{" "}
                        <br /> <br />
                        <a
                            href="https://dlts.azurewebsites.net/"
                            className="btn btn-default btn-lg"
                        >
                            DLTS Documentation
                        </a>{" "}
                        <br /> <br />
                        <a
                            href="https://deepscale.azurewebsites.net/index.html"
                            className="btn btn-default btn-lg"
                        >
                            DeepScale
                        </a>
                        </div>
                        <div className="col-sm-6">
                        <img
                            className="img-responsive center-block"
                            src={pyramid_overview}
                            alt="pyramid_overview"
                        />
                        </div>
                    </div>
                    </div>
                </section>
            </div>          
        );
    }
}

// ReactDOM.render(
//     <Home/>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <Router>
        <div>
          <Route exact path="/upload" component={ImageUpload} />
          <Route exact path="/" component={Home} />
          <Route path="/loading" component={Loading} />
          <Route path="/result" component={Result} />
        </div>
    </Router>,
    document.getElementById('root')
);

export default Home;