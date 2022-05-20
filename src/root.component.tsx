import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeDashboard from "./dashboard/home.dashboard.component";
import { getBreadcrumbs } from "@openmrs/esm-framework";

interface RootProps {
  canSearch: boolean;
}

// getBreadcrumbs.

const Root: React.FC<RootProps> = ({ canSearch = true }) => (
  <BrowserRouter basename={window.spaBase}>
    <main className="omrs-main-content">
      <Route
        path="/home"
        exact
        component={(props) => (
          <HomeDashboard canSearch={canSearch} {...props} />
        )}
      />
    </main>
  </BrowserRouter>
);

export default Root;
