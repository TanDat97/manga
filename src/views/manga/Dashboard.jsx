import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import DefaultLayout from "layouts/manga/DefaultLayout";

function Dashboard(props, { ...rest }) {
  console.log(props);
  return <DefaultLayout>Dashboard</DefaultLayout>;
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Dashboard);
