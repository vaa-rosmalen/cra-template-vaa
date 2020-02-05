import React, { Suspense } from "react";
import "./styles.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Users } from "pages";
import { Layout } from "antd";
import { Header } from "components";

const { Content } = Layout;
library.add(far);

export const App = () => {
  return (
    <Router>
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Header />
          <Content style={{ paddingTop: 80 }}>
            <Suspense fallback={<p>loading</p>}>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Suspense>
          </Content>
        </Layout>
      </div>
    </Router>
  );
};
