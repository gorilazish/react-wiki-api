import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: props.value,
    }
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} placeholder="Type tag..." value={this.state.input} />
        <Link to={{ pathname: '/search', query: { titles: this.state.input }}} ><button>Search</button></Link>
      </div>
    );
  }

}
;

SearchBar.propTypes = {
  value: PropTypes.string,
};

SearchBar.defaultProps = {};

export default SearchBar;