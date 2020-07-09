import React from "react";
import "assets/scss/components/page404.scss";

function Page404(props) {

  const gotoDashboard = () => {
    props.history.push('/')
  }

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Page can't be found</h2>
        </div>
        <button onClick={gotoDashboard}>Go To Homepage</button>
      </div>
    </div>
  );
}

export default Page404;
