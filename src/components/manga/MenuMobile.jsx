import React from "react";
import { Link } from "react-router-dom";

function MenuMobile(props) {
  return (
    <div className="m-menu">
      <div className="m-wrap">
        <div className="at-container">
          <div className="m-table en">
            <div className="m-icon">
              <div className="m-icon-detail primary">
                <ion-icon name="menu-outline" className="large-size"></ion-icon>
              </div>
            </div>
            <div className="m-list">
              <div className="m-nav">
                <ul className="m-menu-ul">
                  <li className="m-menu-li">
                    <Link to="/" className="m-menu-a">
                      Cập nhật
                    </Link>
                  </li>
                  <li className="m-menu-li">
                    <Link to="/" className="m-menu-a">
                      Truyện
                    </Link>
                  </li>
                  <li className="m-menu-li">
                    <Link to="/" className="m-menu-a">
                      Ghi chú
                    </Link>
                  </li>
                  <li className="m-menu-li">
                    <Link to="/" className="m-menu-a">
                      Giấy phép
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="m-icon">
              <Link
                to="/"
                className="m-icon-detail"
                data-original-title="<nobr>최근 본 만화</nobr>"
              >
                <ion-icon name="receipt"></ion-icon>
              </Link>
            </div>
            <div className="m-icon">
              <Link
                to="/"
                className="m-icon-detail"
                data-original-title="<nobr>북마크</nobr>"
              >
                <ion-icon name="bookmark"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;
