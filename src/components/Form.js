import React, { Component } from 'react';

const defaultState = {
    name: '',
    nameError: '',
}
export default class Form extends Component {

    UserData;

    constructor() {
        super();
        this.state = defaultState;
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }

    validate() {
        let nameError = "";

        if (!this.state.name) {
            nameError = "Name field is required";
        }
        else if (this.state.name.length > 20 || this.state.name.length < 3) {
            nameError = "Error ";

        }

        if (nameError) {
            this.setState({ nameError });
            return false;
        }
        return true;
    }
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                nameError: this.state.nameError,

            })
        } else {
            this.setState({
                name: '',
                nameError: '',

            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }
    submit(e) {
        e.preventDefault()
        if (this.validate()) {
            this.props.onSubmit([this.state]);
            this.state.setState(defaultState);
        }
    }

    render() {
        return (

            <form className="form" onSubmit={(e) => this.submit(e)}>
                <label>Name</label>
                <input type="text" className="input" name="name" value={this.state.name} onChange={this.handleInputChange} />
                <span className="text-danger">{this.state.nameError}</span>
                <button type="submit" className="form-button" disabled={this.state.nameError}>Submit
                </button>
            </form>


        );
    }

}

