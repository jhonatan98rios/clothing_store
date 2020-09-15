import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Shared/Navbar';
import Routes from './routes'
import './styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

