import React, {useEffect} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Room from "../components/Room"
import "../screens/styles/RoomsPage.css"
import {listRooms} from '../actions/roomActions'
import {useDispatch, useSelector} from 'react-redux'
import Message from "../components/Message"
import Loader from "../components/Loader"

const RoomsPage = () => {
  const dispatch = useDispatch()

  const roomList = useSelector( (state) => state.roomList)
  const {loading, error, rooms} = roomList

  useEffect(() =>{
    dispatch(listRooms())
  }, [dispatch])
    return (
        <>
        <Container>
        <h1 className="hh1"> More than 56 room avaliable...</h1>
          { loading? <Loader /> : error ? <Message variant='danger'> {error} </Message> : 
           <Row>
               {rooms.map( room =>(
                <Col key={room._id} sm={12} md={4} lg={3}>
                   <Room room={room}/>
                </Col>
               )
                )}
           </Row>   
           }
           </Container>         
        </>
    )
}

export default RoomsPage
