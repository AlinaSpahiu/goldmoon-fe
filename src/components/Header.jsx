import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavDropdown, } from 'react-bootstrap'
import {logout} from '../actions/userActions'
import "./styles/Header.css"


const Header = () => {
    
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    const logoutHandler = () => {
        dispatch(logout())
    }

    
    return (<>
        <header>
           <Navbar bg="#fa4355"  expand="lg" collapseOnSelect>
               <Container fluid> 
                  <LinkContainer to="/">
                     <Navbar.Brand> GoldMoon </Navbar.Brand>
                  </LinkContainer>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <LinkContainer to="/">
                          <Nav.Link>Home</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/rooms">
                          <Nav.Link>Rooms</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/spa">
                          <Nav.Link>Spa</Nav.Link>
                      </LinkContainer>
                    
                      {userInfo ? (
                          <>
                            <LinkContainer title={userInfo.name} id='username'  to='/profile'>
                                <Nav.Link>
                                    Profile
                                </Nav.Link>
                            </LinkContainer>

                             <LinkContainer to="/rooms" onClick={logoutHandler}>
                                <Nav.Link>Logout</Nav.Link>
                             </LinkContainer>

                            </>
                                
                          
                    
                      )
                      : <LinkContainer to="/login">
                           <Nav.Link href="/login">Login<i className="fas fa-user ml-1"></i></Nav.Link>
                        </LinkContainer>  }

                        {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/roomlist'>
                    <NavDropdown.Item>Rooms</NavDropdown.Item>
                  </LinkContainer>
                 
                </NavDropdown>
              )}
                   
                         
                    </Nav>
                  </Navbar.Collapse>
               </Container>
           </Navbar>
        </header>
        </>
    )
}
export default Header
