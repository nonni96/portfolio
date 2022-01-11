import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Jobs from './Jobs';
import Header from './Header';
import Projects from './Projects';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Jobs />
    <Projects />
  </React.StrictMode>,
  document.getElementById('root')
);

