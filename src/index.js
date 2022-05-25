import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import AddBox from './AddBox';
import CheckBox from './CheckBox';

ReactDOM.render(
  <>
    <Header/>
    <AddBox/>
    <CheckBox/>
    <Footer/>
  </>
  ,
  document.getElementById('root')
);
