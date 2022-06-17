import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import './index.css'

ReactDOM.render(
  <>
    <Header/>
    <TodoList/>
    <Footer/>
  </>
  ,
  document.getElementById('root')
);
