import React from "react";
import { Link } from "react-router-dom";

//core components
import HeaderSearch from "components/manga/HeaderSearch";
import MenuPC from "components/manga/MenuPC";

import "assets/scss/components/header.scss";
import logo from "assets/img/logo.png";

function Header(props) {
  return (
    <div className="header">
      <header className="m-header">
        <div className="at-container">
          <div className="header-wrap">
            <div className="mobile-header">
              <div>
                <Link to="/">
                  <img src={logo} alt="Logo mobile" />
                </Link>
              </div>
              <HeaderSearch
                search={props.search}
                handleChangeSearch={props.handleChangeSearch}
              />
            </div>
          </div>
        </div>
      </header>
      <nav className="at-menu">
        <MenuPC />
      </nav>
    </div>
  );
}

export default Header;
