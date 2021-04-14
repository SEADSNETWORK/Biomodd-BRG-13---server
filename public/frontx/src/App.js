import React, {useEffect} from 'react';
import Theme, {OverviewPage} from './theme'
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import Store from "./Store";
import { createBrowserHistory } from 'history';
import { useSelector, useDispatch } from "react-redux";
import { ACTIONS as DATA_ACTIONS } from "./reducers/DataReducer"
import sanityclient from './client';

// import Connectors from './components/connectors';
import Logo from './assets/logo.svg'

import './assets/fonts/'
import BuilderTheme from './services/Buildertheme'
import Home from './components/Home'

const DataHelper = () => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data.client && dispatch){
      const cli = sanityclient(dispatch);
      dispatch({ type: DATA_ACTIONS.SET_CLIENT, client: cli});
    } 

    if (!data.theme && dispatch ){
      const builder = new BuilderTheme();
      dispatch({type: DATA_ACTIONS.SET_THEME, theme: new BuilderTheme()})
      // dispatch({type: DATA_ACTIONS.SET_THEMES, themes: [new BuilderTheme()]})
    }

  })
  return (
    null
  )
}


const App =()=>{
  const history = createBrowserHistory()
  const theme = new BuilderTheme();

  return (
    <Provider store={Store}>
    <DataHelper />
      <Router history={history}>
        <span>
          <div style={{padding: "10px"}}>
        <img src={Logo} style={{float: "left", width: "100px"}}/>
        
          <theme.Title style={{color: "white", fontSize: "4em"}}>
              &nbsp;BIOMODD [BRG<sup>13</sup>]
          </theme.Title>
        
        </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exacact path="/overview" component={OverviewPage} />
              <Route component={Home}/>
            </Switch>
        </span>
      </Router>
  </Provider>
  );
}

export default App;
