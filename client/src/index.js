import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './redux/store'

const AppWrapper = ({ children }) => {
  

  return (<Provider store={store}>{children}</Provider>);
}


ReactDOM.render(
  <AppWrapper> <App /> </AppWrapper>,
  document.getElementById('root')
);

reportWebVitals();
