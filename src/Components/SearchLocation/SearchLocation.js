import React from 'react';
import PropTypes from 'prop-types';
import './SearchLocation.css';
import { capitalize } from '../../util/helpers';

class SearchLocation extends React.Component {
  state = {
    term: ''
  }

  static propTypes = {
    onSearch: PropTypes.func
  }

  handleTermChange = (eventTerm) => {
    this.setState({term: eventTerm.target.value});
  }

  handleSearch = (event) => {
    this.props.onSearch(this.state.term);

    window.history.replaceState({}, `${this.state.term}`, `/${this.state.term}`);
    window.document.title = `${capitalize(this.state.term)} / Weather Forecast`;
    event.preventDefault();
  }

  render() {
    return (
      <section className="search">
          <div className="search-bar">
            <form onSubmit={this.handleSearch}>
            <input onChange={this.handleTermChange} type="text" placeholder="Search location..." className="search-input"></input>
            <input type="submit" value="Search" className="search-button"></input>
            </form>
          </div>
      </section>
    )
  }

}
export default SearchLocation;
