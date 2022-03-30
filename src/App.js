import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
// import ItemList from './components/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

export default function App() {
  return(
    <div>
    <Header />
    <Content /> 
    <Footer />
    {/* <ItemList/> */}
  </div>
  )
  
}
