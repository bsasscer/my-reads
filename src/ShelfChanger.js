import React, { Component } from 'react'

class ShelfChanger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'none'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.handleSubmit();

    }

    handleSubmit(event) {
        alert('This book status is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        console.log(this.state)
        return (
            <div className="book-shelf-changer">
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default ShelfChanger
