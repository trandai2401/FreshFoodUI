import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { Fragment } from "react";

import DefaultLayout from "./layouts";
import history from "./history";

function App() {
  return (
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            const Page = route.component;
            return (
              <Route
                exact
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;
