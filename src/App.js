import './App.css';
import React from 'react'
//import Chart from './Atom/Chart/Chart'
//import Navbar from './Atom/Navbar'
import Register from './Atom/Modal/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbar'

export default class App extends React.Component{

    render(){
      return (
        <>
        <Navbars />
        {/* <Navbar /> */}
        <Register />
        </>
      );
    }
} 
  

