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
      ],
    };
  }

  render() {
    const { navLink } = this.state;
    const { loggedIn } = this.props;
    const links = navLink.map((item) => {
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
