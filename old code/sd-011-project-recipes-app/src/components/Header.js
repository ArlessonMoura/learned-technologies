import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchIcon from '../images/searchIcon.svg';
import ProfileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      search: false,
    };
    this.centralHeader = this.centralHeader.bind(this);
    this.profileButton = this.profileButton.bind(this);
    this.searchButton = this.searchButton.bind(this);
    this.showSearch = this.showSearch.bind(this);
    this.verifyTitle = this.verifyTitle.bind(this);
  }

  componentDidMount() {
    this.verifyTitle();
  }

  profileButton() {
    return (
      <Link to="/perfil">
        <button
          type="button"
        >
          <img data-testid="profile-top-btn" src={ ProfileIcon } alt="profileIcon" />
        </button>
      </Link>
    );
  }

  searchButton() {
    return (
      <button
        type="button"
        onClick={ () => this.showSearch() }
      >
        <img src={ SearchIcon } data-testid="search-top-btn" alt="searchIcon" />
      </button>
    );
  }

  showSearch() {
    const { disabled } = this.state;
    if (disabled === true) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  centralHeader() {
    const { disabled } = this.state;
    return (
      !disabled ? (<SearchBar />) : null
    );
  }

  verifyTitle() {
    const { title } = this.props;
    if (title === 'Comidas' || title === 'Bebidas' || title === 'Explorar Origem') {
      this.setState({
        search: true,
      });
    }
  }

  render() {
    const { search } = this.state;
    const { title } = this.props;
    return (
      <header>
        { this.profileButton() }
        <h1 data-testid="page-title">{ title }</h1>
        { search && this.searchButton() }
        { this.centralHeader() }
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default Header;
