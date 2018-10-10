import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store'

document.addEventListener("DOMContentLoaded", () =>{
  // const store = configureStore();
  const root = document.getElementById("root");

  ReactDOM.render(
    <h1>Instagram Clone!</h1>,
    root
  );
});
 
