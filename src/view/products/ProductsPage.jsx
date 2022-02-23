import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DetailPage from "./DetailPage/DetailPage";
import ListPage from "./ListPage/ListPage";

export default function ProductsPage() {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact/>
        <Route path={`${match.path}/:id`} exact component={DetailPage} />
      </Switch>
    </div>
  );
}
