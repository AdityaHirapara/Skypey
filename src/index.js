import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";

const render = () => {
  fancyLog();
  return ReactDOM.render(<App />, document.getElementById("root"));
};

render();
store.subscribe(render);
registerServiceWorker();

function fancyLog() {
  console.log("%c Rendered with 👉 👉 👇 ", "background: #555;color: #fff");
  console.log(store.getState());
}