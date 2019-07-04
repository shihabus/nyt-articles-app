import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {initStore} from './store';
import {Router} from './config/routes';

const store = initStore()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
