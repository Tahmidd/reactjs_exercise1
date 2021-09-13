import React, { Component } from 'react';
//const axios = require('axios');
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class blog extends Component {

    state = {
        posts: [],
    }
    componentDidMount() {
       
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=> {
                this.setState({ posts: response.data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {
    
            const posts = this.state.posts;
            const allposts = posts.map((post, idx) => {
                return (
                    <div>
                        <a href="" key={idx}>{post.title} </a><br></br>
                        <p> {post.body}</p>
                    </div>
                )
            });
        return(
            <div>
                <h1> This is blog Component </h1>
                <Link to="/writepost" style={{ textDecoration: 'none' }}> Add New </Link>
                                <div class="media">
                                        <div class="media-body text-center">
                                        {allposts}
                                                  </div>
                </div>
            </div>
        );
    }
}