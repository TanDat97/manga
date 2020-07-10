import React from "react";

function HeaderSearch(props) {

  function submitSearch (e) {
    e.preventDefault();
  }

  return (
    <div className="header-search">
      <form
        name="tsearch"
        className="form"
        onSubmit={submitSearch}
      >
        <div className="input-group input-group-sm">
          <span className="input-group-btn">
            <select name="sfl" className="btn btn-sm">
              <option value="0">Tiêu đề</option>
              <option value="5">Tác giả</option>
            </select>
          </span>
          <input
            type="text"
            name="stx"
            className="form-control input-sm"
            onChange={props.handleChangeSearch}
            value={props.search}
          />
          <span className="input-group-btn">
            <div className="btn btn-sm">
              <ion-icon name="search-outline"></ion-icon>
            </div>
          </span>
        </div>
      </form>
    </div>
  );
}

export default HeaderSearch;
