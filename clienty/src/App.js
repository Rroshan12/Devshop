import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './Pages/Admin';



function App() {
   return (
      <BrowserRouter>
 

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
  
    </BrowserRouter>

   );
}

export default App;
