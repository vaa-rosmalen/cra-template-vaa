import React, { Suspense } from "react";
import "./styles.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Users } from "pages";
import { Layout, ConfigProvider } from "antd";
import { Header, ErrorBoundary } from "components";
import { SWRConfig } from "swr";
import { SWR_CONFIG } from "configs/swr-config";
import nlNL from "antd/es/locale/nl_NL";
import moment from "moment";
import momentLocalization from "moment/locale/nl";

moment.locale("nl", momentLocalization);

const { Content } = Layout;
library.add(far);

export const App = () => {
  return (
    <Router>
      <div>
        <ConfigProvider locale={nlNL}>
          <ErrorBoundary>
            <SWRConfig value={SWR_CONFIG}>
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
            </SWRConfig>
          </ErrorBoundary>
        </ConfigProvider>
      </div>
    </Router>
  );
};
