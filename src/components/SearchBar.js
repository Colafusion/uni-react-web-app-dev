import React, {Component} from "react";

class SearchBar extends Component {
    //based on code snippets in https://reactjs.org/docs/thinking-in-react.html
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }


    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
            </form>
        );
    }
}

export default SearchBar;