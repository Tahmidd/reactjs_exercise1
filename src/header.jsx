import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route, Link, NavLink  } from "react-router-dom";
import About from './component/about';
import Blog from './component/blog';
import Contact from './component/contact';
import Profile from './component/profile';
import App from './App';
import Writepost from './component/writepost';



export default class header extends Component {
    render() {
        return (
            <Router>
            <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand ><NavLink to="/" exact activeStyle={{ color: 'orange' }} style={{ textDecoration: 'none' }}>Demo </NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                                <Nav.Link><NavLink to="/about" activeStyle={{ color: 'orange' }} style={{ textDecoration: 'none' }}>About Us</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/contact" activeStyle={{ color: 'orange' }} style={{ textDecoration: 'none' }}>Contact Us</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/blog" activeStyle={{ color: 'orange' }} style={{ textDecoration: 'none' }}>Blog</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/profile" activeStyle={{ color: 'orange' }} style={{ textDecoration: 'none' }}>Profile</NavLink></Nav.Link>


                        </Nav>


                    </Navbar.Collapse>
                </Navbar>
                </div>

                <Switch>
                    <Route path="/writepost">
                        <Writepost />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                   
                    <Route path="/">
                        <App />
                    </Route>
                </Switch>

                </Router>
        );
    }
}