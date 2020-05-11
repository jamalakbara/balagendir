import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      navLink: [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "about",
        },
        {
          id: 3,
          link: "contact",
        },
        {
          id: 4,
          link: "login",
        },
      ],
    };
  }

  render() {
    const { navLink } = this.state;
    const { loggedIn } = this.props;
    const links = navLink.map((item) => {
      if (item.link === "login") {
        if (!loggedIn) {
          return (
            <Link key={item.id} to="/login" className="btn btn-hover">
              {item.link}
            </Link>
          );
        } else {
          return (
            <div className="user btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 65.564 77.706"
              >
                <path
                  id="user"
                  d="M7.5,196.943H58.064a7.5,7.5,0,0,0,7.5-7.5v-3.156a32.761,32.761,0,0,0-13.952-26.811,24.534,24.534,0,1,0-37.659,0A32.758,32.758,0,0,0,0,186.287v3.156A7.5,7.5,0,0,0,7.5,196.943Zm25.282-62.706a9.534,9.534,0,1,1-9.533,9.533A9.544,9.544,0,0,1,32.782,134.237Zm0,34.267a17.815,17.815,0,0,1,17.246,13.439H15.536A17.815,17.815,0,0,1,32.782,168.5Z"
                  transform="translate(0 -119.237)"
                />
              </svg>
            </div>
          );
        }
      } else {
        return (
          <NavLink
            exact
            activeClassName="nav--active"
            className=""
            to={item.link !== "home" ? item.link : "/"}
            key={item.id}
          >
            {item.link}
          </NavLink>
        );
      }
    });
    return (
      <nav className="nav container">
        <div className="nav__logo">
          <Link to="/">balagendir</Link>
        </div>
        <div className="nav__link">{links}</div>
      </nav>
    );
  }
}

export default Navbar;
