import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "components/manga/Header";

function DefaultLayout(props) {
  return (
    <div>
      <Header
        search={props.search}
        handleChangeSearch={props.handleChangeSearch}
      />
      <Container>
        <Row>
          <Col xs={12} md={9}>
            {props.children}
          </Col>
          <Col xs={12} md={3}>
            Side back
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DefaultLayout;
