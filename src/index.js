import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import List from "./App";
import Form from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
    {/*<App />*/}
  </React.StrictMode>
);

