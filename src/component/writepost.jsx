import React, { Component } from 'react';
import axios from 'axios';

export default class Writepost extends Component {
    state = {
        title: '',
        body: ''
    }
    formSubmit = (e) => {
        e.preventDefault();
        axios.post('/user', {  // where this url will be redirected
            title: this.state.title,  // all that value which it takes
            body: this.state.body
        })
            .then(function (response) { // use for success
                console.log(response);
            })
            .catch(function (error) {  // use for error
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div class="container-fluid bg-light p-5 col-lg-4">
                    <form onSubmit={this.formSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Title </label>
                            <input type="text" class="form-control" id="title" name="title"
                                onChange={event => { this.setState({ title: event.target.value }) }} />
                              
                          </div>
                                                    <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Details </label>
                            <textarea class="form-control" name="body" onChange={event => { this.setState({ body: event.target.value }) }}> Write Here </textarea>
                          </div>
                                                        
                                                            <button type="submit" class="btn btn-primary">Published</button>
                        </form>

                </div>

             

            </div>
        );
    }
}