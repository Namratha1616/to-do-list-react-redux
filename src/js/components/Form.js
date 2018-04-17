import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

const mapDispatchtoProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

class ConnectedForm extends Component {
    constructor(){
        super();
        this.state = {
            title : ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({title,id});
        this.setState({title:""});
    }

    render(){
        const { title } = this.state.title;
        return(
            <form onSubmit={this.handleSubmit} className="form-group">
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} onChange={this.handleChange} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-success btn-lg">SAVE</button>
            </form>
        );
    }
}

const Form = connect(null,mapDispatchtoProps)(ConnectedForm);

export default Form;

