import React, {Component} from 'react';

export default class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);

    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group position">
                <input
                    placeholder="Get a five day forecast of a city"
                    className="form-control width_search"
                    value = {this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn ">
                    <button type="submit" className="btn btn-success"> Search </button></span>
            </form>
        );
    }

    onInputChange(event) {
        // console.log((event.target.value));
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
    }
}