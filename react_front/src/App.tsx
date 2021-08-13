import React, { useEffect } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps
} from 'react-router-dom'
import logging from './config/logging';
import routes from './config/routes';

function App() {
  useEffect(() => {
    logging.info('Loading app.tsx')
  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component 
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            )
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
