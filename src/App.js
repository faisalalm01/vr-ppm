import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Panel from './pages/Panel';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/panel" exact component={Panel}/>
    </BrowserRouter>
  );
}

export default App;
