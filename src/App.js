import React from 'react';
import Header from './components/Header';
import Footer from "./components/Footer"
import HomePage from "./screens/HomePage"
import RoomsPage from "./screens/RoomsPage"
import Products from "./screens/Products"
import Spa from "./screens/Spa"
import LoginPage from "./screens/LoginPage"
import RegisterPage from "./screens/RegisterPage"
import MyProfilePage from "./screens/MyProfilePage"
import {BrowserRouter as Router, Route} from "react-router-dom"



function App() {
  return (
    <Router>
      <Header />
    
       
         <main className="">
           <Route exact path="/" component={HomePage} />
           <Route path="/rooms" component={RoomsPage} exact />
           <Route path="/login" component={LoginPage} />
           <Route path="/register" component={RegisterPage} />
           <Route path="/profile" component={MyProfilePage} />
           <Route path="/rooms/:id" component={Products} />
           <Route path="/spa" component={Spa} exact/>
         </main>
       
      
      <Footer />
    </Router>
  );
}

export default App;
