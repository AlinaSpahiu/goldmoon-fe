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
import UserListPage from "./screens/UserListPage"
import UserEditPage from "./screens/UserEditPage"
import RoomListPage from "./screens/RoomListPage"
import RoomEditPage from "./screens/RoomEditPage"




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
           <Route path='/admin/userlist' component={UserListPage} />
           <Route path='/admin/user/:id/edit' component={UserEditPage} />
           <Route path='/admin/roomlist' component={RoomListPage} />
           <Route path='/admin/room/:id/edit' component={RoomEditPage} />
           <Route path="/spa" component={Spa} exact/>
         </main>
       
      
      <Footer />
    </Router>
  );
}

export default App;
