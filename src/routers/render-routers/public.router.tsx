import React from 'react';
import { Switch, Route } from 'react-router-dom';

interface RouterProps {
  path: string;
  component: any;
}

const PublicRoute: React.FC<RouterProps> = ({ path, component }) => (
  <Switch>
    <Route path={path} exact>
      {component}
    </Route>
  </Switch>
);

export { PublicRoute };
