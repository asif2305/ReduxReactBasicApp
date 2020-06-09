import React from 'react';
import './App.css';
import Posts from './compoents/Posts'
import Postform from './compoents/Postform';
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
          <div className="App">
            <Postform/>
            <Posts/>

          </div>
    </Provider>
  );
}

export default App;
