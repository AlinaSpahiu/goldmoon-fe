import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Container, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails } from '../actions/userActions'
import "./styles/LoginPage.css"

const MyProfilePage = ({location, history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
  
    const dispatch = useDispatch()
  
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    useEffect(() => {
      if (!userInfo) {
        history.push('/login')
      } else{
          if(!user.name){
              dispatch(getUserDetails('profile'))
          } else{
              setName(user.name)
              setEmail(user.email)
          }
      }
    }, [dispatch, history, userInfo, user])
  
    const submitHandler = (e) => {
      e.preventDefault()
      if(password !==confirmPassword){
          setMessage('Passwords do not match')
      } else {
         //
      }
      
    }
  
    return (
      <Container className="container-w">
      <Row className='body div-container'>
        <Col md={5}>
           <Card className="card ml-5" >
             <Card.Img src="/images/alina.jpg" roundedCircle  />
           </Card>
        </Col>
       
          <Col md={7}> 
          <div className="container-p">
          <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}  className="w-50">
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='confirmpassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
        </div>
          </Col>
        
         
        
      </Row>
      </Container>
    )
  }


export default MyProfilePage
