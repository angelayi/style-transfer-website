import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

import "./css/bootstrap.min.css";
import "./css/custom.css";

import content_ex from "./images/content_ex.jpg";
import style_ex from "./images/style_ex.jpg";
import result_ex from "./images/result_ex.jpg";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loading from "./loading";
import Result from "./result";
import Home from ".";

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content_img_url: "",
            style_img_url: "",
            result_url: "",

            load_state: false,
            result_state: false
        };

        this.postImages = this.postImages.bind(this);
        this.getContentImage = this.getContentImage.bind(this);
        this.getStyleImage = this.getStyleImage.bind(this);
        this.toggleLoading = this.toggleLoading.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.setState({
            load_state: false,
            result_state: false
        });
    }

    toggleLoading() {
        this.setState({
            load_state: true,
        });
        this.postImages();
    }

    postImages() {
        axios.post('/style-transfer', {content_img: this.state.content_img_url, style_img: this.state.style_img_url})
        .then(res => {
            var res_img = 'data:image/png;base64,' + res.data;
            this.setState({
                result_url: res_img,
                load_state: false,
                result_state: true
            });
        })
        .catch(function (error) {
            console.log("Please upload two images");
        });
    }

    getContentImage(event) {
        var input = event.target; 
        var reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload = () => this.setState({content_img_url: reader.result});    
    }

    getStyleImage(event) {
        var input = event.target;
        var reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onloadend = () => this.setState({style_img_url: reader.result});
    }

    componentDidMount() {
        this.postImages();
    }
  
    render() {
        if (this.state.load_state) {
            return <Loading />;
        }

        if (this.state.result_state) {
            return <Result result_url={this.state.result_url} reset={this.reset} />;
        }

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
                            <h1>Generate images</h1>
                        
                            <br /> <br />
                            <br /> <br />
                            <img src={content_ex} alt="content_ex"/>
                            <span
                                className="glyphicon glyphicon-plus"
                                style={{ fontSize: 30 }}
                            />
                            <img src={style_ex} alt="style_ex"/>
                            <span
                                className="glyphicon glyphicon-arrow-right"
                                style={{ fontSize: 30 }}
                            />
                            <img src={result_ex} alt="result_ex"/>
                        </div>

                        <br /> <br />
                        <div align="center">
                            <h2> 1. Upload Content Image </h2>
                            <input type="file" onChange={this.getContentImage} />
                            
                            <br /> <br />
                            <h2> 2. Upload Style Image </h2>
                            <input type="file" onChange={this.getStyleImage} />
                            
                            <br /> <br />
                            <br /> <br />
                            
                            <button className="btn btn-primary btn-lg" onClick={this.toggleLoading}>SUBMIT</button>
                        </div>
                    </div>
                </header>
            </div>          
        );
    }

}

ReactDOM.render(
    <Router>
        <div>
          <Route exact path ="/upload" component={ImageUpload} />
          <Route exact path ="/" component={Home} />
        </div>
    </Router>,
    document.getElementById('root')
);
  
export default ImageUpload;