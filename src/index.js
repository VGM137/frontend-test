import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App.js';


const initialState = {
  apiActiveBtn: {
    js: true,
    css: false,
    security: false,
  },
  pricingActiveBtn: {
    monthly: true,
    yearly: false,
  },
  amountCustomizer: 10000,
  rateCustomizer: 8.9,
  monthTerm: {
    first: true,
    second: false,
    third: false,
    term: 12,
  },
  quoterValues: {
    monthCharge: '0',
    commission: '0',
    deposit: '0',
    total: '0',
    cat: '0'    
  },
  bubbles:{
    amountBubble: 0,
    rangeBubble: 0,
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, initialState, composeEnhancers)
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("app"))
