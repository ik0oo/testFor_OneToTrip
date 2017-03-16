import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Layout from './components/layout-container';
import 'bootstrap/dist/css/bootstrap.css';

const render = () => {
  return ReactDOM.render(
    <Provider store={store}>
      <Layout />
    </Provider>,
    document.getElementById('root')
  )
};

render();
store.subscribe(render);

