//Import Pages
import NotFound from "../../pages/NotFound";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import AdminPage from "../../pages/AdminPage";
import AdminProductDetail from "../../pages/AdminProductDetail";
import AdminProducts from "../../pages/AdminProducts";
import AdminCategories from "../../pages/AdminCategories";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function ClippedDrawer() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={AdminPage} />
          <Route exact path="/products" component={AdminProducts} />
          <Route path="/products/:id" component={AdminProductDetail} />
          <Route exact path="/categories" component={AdminCategories} />
          <Route component={NotFound} />
        </Switch>
        {/* </main> */}
      </Router>
    </div>
  );
}
