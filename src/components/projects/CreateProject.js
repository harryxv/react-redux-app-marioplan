import React, { Component } from 'react'

export class CreateProject extends Component {
    state = {
        title: "",
        content: ""
    }
    handleChange = (event) => {
        this.setState(
            { [event.target.id]: event.target.value }
        )
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <div className="input-field">
                        <label htmlFor="title" >Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content" >Content</label>
                        <textarea name="" id="content"  className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject
