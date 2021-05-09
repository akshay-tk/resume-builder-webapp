import React from 'react' 
import './App.css';
import {BrowserRouter,Route , Switch} from 'react-router-dom'
import Home from './Home/home'      
import BuilderForm from './Builder/BuilderForm/builderForm'
import ViewPdf from './View-Pdf/view-pdf'
import { Provider } from "react-redux";
import allReducers from '../src/Redux/store';
import {createStore} from "redux";
const store =createStore(allReducers)


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
     <Switch>
       <Route path="/" component={Home} exact/>
       <Route path="/resume-builder" component={BuilderForm}/>
       <Route path="/view-pdf" component={ViewPdf}/>
     </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
