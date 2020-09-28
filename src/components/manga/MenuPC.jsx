import React from "react";
import { Link } from "react-router-dom";

import HeaderSearch from "components/manga/HeaderSearch";

import logo from "assets/img/logo.png";

function MenuPC(props) {
  return (
    <div className="pc-menu">
      <div className="at-container">
        <div className="at-container">
          <div className="nav-right nav-rw nav-height">
            <ul>
              <li className="">
                <Link to="/" data-original-title="<nobr>최근 본 만화</nobr>">
                  <ion-icon name="receipt"></ion-icon>
                </Link>
              </li>
              <li className="">
                <Link to="/" data-original-title="<nobr>북마크</nobr>">
                  <ion-icon name="bookmark"></ion-icon>
                </Link>
              </li>
              <li className="">
                <Link to="/" data-original-title="<nobr>랜덤</nobr>">
                  <ion-icon name="shuffle"></ion-icon>
                </Link>
              </li>
              <li className="" onClick={() => props.handleChangeShowBox(true)}>
                <Link to="/" data-original-title="<nobr>알림</nobr>">
                  <ion-icon name="notifications"></ion-icon>
                </Link>
              </li>
            </ul>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="nav-visible">
          <div className="at-container">
            <div className="nav-top nav-float nav-slide">
              <ul className="menu-ul">
                <li className="menu-li" style={{ padding: 5 + "px" }}>
                  <Link to="/">
                    <img
                      src={logo}
                      style={{ height: 30 + "px" }}
                      title=""
                      alt="Logo pc"
                    />
                  </Link>
                </li>
                <li className="menu-li">
                  <Link to="/" className="menu-a nav-height">
                    Cập nhật
                  </Link>
                </li>
                <li className="menu-li">
                  <Link to="/" className="menu-a nav-height">
                    Truyện
                  </Link>
                </li>
                <li className="menu-li">
                  <Link to="/" className="menu-a nav-height">
                    Ghi chú
                  </Link>
                </li>
                <li className="menu-li">
                  <Link to="/" className="menu-a nav-height">
                    Giấy phép
                  </Link>
                </li>
                <li className="menu-li" style={{ padding: 3 + "px" }}>
                  <HeaderSearch />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPC;
