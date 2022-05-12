import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeDashboard from "./dashboard/home.dashboard.component";

interface RootProps {
  canSearch: boolean;
}

const Root: React.FC<RootProps> = ({canSearch = true}) => (
  <BrowserRouter basename={window.spaBase}>
    <main>
      <Route path="/home" exact component={(props) => <HomeDashboard canSearch={canSearch} {...props} />}/>
    </main>
  </BrowserRouter>
);

export default Root;
