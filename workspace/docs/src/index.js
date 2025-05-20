import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore as createStore} from "redux";
import {devToolsEnhancer} from "@redux-devtools/extension";
import {Provider} from "react-redux";
import count from "./docs/modules/count";
import {BrowserRouter, RouterProvider} from "react-router-dom";
import {RouteProvider} from "./docs/context/RouteContext";

const store = createStore(count , devToolsEnhancer())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <RouteProvider>
        <App />
      </RouteProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
