import React, { Component } from "react";
import logo from "../images/earl-bar-logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <div className="nav-logo-container">
                <img src={logo} alt="Earlbar" className="nav-logo" />
              </div>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li onClick={this.state.isOpen ? this.handleToggle : null}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={this.state.isOpen ? this.handleToggle : null}>
              <Link to="/the-earl/">The Earl Cocktail Bar</Link>
            </li>
            <li onClick={this.state.isOpen ? this.handleToggle : null}>
              <Link to="/the-terrace/">The Terrace Shisha Bar</Link>
            </li>
            <li onClick={this.state.isOpen ? this.handleToggle : null}>
              <Link to="/gallery/">Gallery</Link>
            </li>
            <li onClick={this.state.isOpen ? this.handleToggle : null}>
              <Link to="/contact-us/">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
