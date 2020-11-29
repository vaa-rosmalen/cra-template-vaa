import React, { Suspense } from 'react';
import './styles.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from 'pages';
import { Layout, ConfigProvider } from 'antd';
import { ErrorBoundary } from 'components';
import { SWRConfig } from 'swr';
import { SWR_CONFIG } from 'configs/swr-config';
import nlNL from 'antd/es/locale/nl_NL';

const { Content } = Layout;

export const App = () => {
  return (
    <Router>
      <div>
        <ConfigProvider locale={nlNL}>
          <ErrorBoundary>
            <SWRConfig value={SWR_CONFIG}>
              <Layout style={{ height: '100%' }}>
                <Content>
                  <Suspense fallback={<p>loading</p>}>
                    {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                    <Switch>
                      <Route exact path="/">
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
