import React, {useEffect} from 'react';
import Theme, {OverviewPage} from './theme'
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import Store from "./Store";
import { createBrowserHistory } from 'history';
import { useSelector, useDispatch } from "react-redux";
import { ACTIONS as DATA_ACTIONS } from "./reducers/DataReducer"
import sanityclient from './client';
import Connectors from './components/connectors'

import './assets/fonts/'

class BuilderTheme extends Theme {
  constructor(){
    super()
    this.font = "OfficeCodePro"
    this.sizes.normal = "1.3em"
  }

  get defaultFont(){
    return `${super.defaultFont}font-weight: 400;`
  }

  get Title(){
    return this.styled(super.Title)` font-weight: bold;`
  }
}

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

const Home = ()=>{
  const theme = new BuilderTheme();

  return <theme.Container>
    <br/><br/>
    <theme.Wrapped>
    <theme.Text>
      Een schone toevalligheid
    </theme.Text>
  </theme.Wrapped>
  </theme.Container>
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
        <img src="https://www.luca-arts.be/themes/custom/epsenkaas_theme/logo.svg" style={{float: "left"}}/>
        <div style={{fontSize: "200%"}}>
          <theme.Text>
              &nbsp;Reservator
          </theme.Text>
        </div>
        </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exacact path="/overview" component={OverviewPage} />
              <Route exacact path="/connectors" component={Connectors} />
              <Route component={Home}/>
            </Switch>
        </span>
      </Router>
  </Provider>
  );
}

// function App() {
//   let theme = new BuilderTheme();
//   return (
//     <div style={{fontWeight: "lighter"}}>
//       hello
//       <div style={{fontFamily: "Bluu Next"}}>
//           Studio Subtiv
//       </div>
//       <theme.Wrapped>
//         <theme.Text>
//           hello
//         </theme.Text>
//         <theme.Title>
//           hello
//         </theme.Title>
//       </theme.Wrapped>
//     </div>
//   );
// }

export default App;
