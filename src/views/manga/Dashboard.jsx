import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import DefaultLayout from "layouts/manga/DefaultLayout";

function Dashboard(props, { ...rest }) {
  const [search, setSearch] = React.useState("");
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <DefaultLayout search={search} handleChangeSearch={handleChangeSearch}>
      Dashboard
    </DefaultLayout>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Dashboard);
