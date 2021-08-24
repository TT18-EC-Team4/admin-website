/*
Copyright 2019 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.import React from "react";
*/
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import { Route, Switch } from "react-router-dom";
import AdminProductDetail from "../AdminProductDetail";
import AdminProducts from "../AdminProducts";
import HeaderAminPage from "../HeaderAdminPage";
import AdminCategories from "../AdminCategories";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    paddingTop: "80px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "20px",
  },
}));

export default function AdminPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeaderAminPage />
      <div className={classes.content}>
        <Switch>
          <Route exact path="/products" component={AdminProducts} />
          <Route path="/products/:id" component={AdminProductDetail} />
          <Route exact path="/categories" component={AdminCategories} />
        </Switch>
      </div>
    </div>
  );
}
