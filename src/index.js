import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Chart } from 'regraph';

const FamilyTree = () => (
  <Chart items={{
    luke: {label: {text: 'Luke Skywalker'}},
    leia: {label: {text: 'Princess Leia'}},
    link: {
      id1: 'luke',
      id2: 'leia',
      label: {text: 'Siblings'},
    }
  }}/>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
