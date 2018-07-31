import React, {Component} from 'react';

import Input from '../objects/input';

class SearchContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    setTextOnInput = (event) => {
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <header className="search-container">
                <Input placeholder="Filtre aqui" value={this.state.term} callbackSetTextOnInput={this.setTextOnInput} />
            </header>
        )
    }
}

export default SearchContainer;