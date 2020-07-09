import React from "react";
import { Switch, Route } from "react-router-dom";

//core components
import Page404 from "views/manga/Page404";

import routes from "./routes";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "") {
        return (
          <Route
            exact
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Route exact path="/*" component={Page404} />
  </Switch>
);

function Manga(props, { ...rest }) {
  return switchRoutes;
}

export default Manga;
