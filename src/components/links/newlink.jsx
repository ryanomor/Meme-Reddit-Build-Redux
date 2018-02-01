import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';

class NewLink extends React.Component {
    constructor() {
        super();
        this.state = {
            memeName: "",
            memeURL: "",
            submitted: false,
        };
    }

    handleInput = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value,
            submitted: false,
        });
    };

    toggleSubmit = (event) => {
        event.preventDefault();
        const { submitted } = this.state;
        this.setState({submitted: !submitted});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { memeName, memeURL } = this.state;
        this.props.addLink({title: memeName, url: memeURL});
        this.setState({
            memeName: "",
            memeURL: "",
            submitted: true,
        });
    };

    render() {
        const { memeName, memeURL, submitted } = this.state;
        return(
            <div>
                <h2>Add a new Meme</h2>
                <form>
                    Name: {" "} <input disabled={submitted} type="text" id="memeName" value={memeName} onInput={this.handleInput} placeholder="enter meme name" />
                    <br />
                    URL: {" "} <input disabled={submitted} type="text" id="memeURL" value={memeURL} onInput={this.handleInput} placeholder="enter meme url" />
                    <br />
                    {submitted ? <button onClick={this.toggleSubmit}>Submit another</button> : <button type="submit" onClick={this.handleSubmit} disabled={!memeURL || !memeName}>Submit</button>}
                    {submitted ? <p style={{color: "green"}}>Successfully submitted</p> : submitted}
                </form>
            </div>
        );
    };
};

export default NewLink;