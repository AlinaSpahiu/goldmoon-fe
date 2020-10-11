import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Image, ListGroup, Card, Button, Container, Form} from 'react-bootstrap';
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {listRoomsDetails} from '../actions/roomActions'
import Loader from "../components/Loader"
import Message from "../components/Message"


const Products = ({history, match}) => {
   const [reservation, setReservation] = useState(0)

   const dispatch = useDispatch()

   const roomDetails = useSelector(state =>state.roomDetails)
   const { loading, error, room} = roomDetails

    useEffect(() => {
        dispatch( listRoomsDetails(match.params.id))
        
      }, [dispatch, match])

    const makeReservationHandler = () => {
        history.push(`/cart/${match.params.id}?reservation=${reservation}`)
    }
    return (
        
        <>
         <Hero hero="roomsHero">
          <Banner title="our rooms" >
            <Link to="/" className="btn-primary">
                return home
            </Link>
          </Banner>
        </Hero>

        { 
               loading ? <Loader /> 
               : error ? <Message variant='danger'> {error} </Message>
               : ( 
        <Container className="mt-5">
            
                   
            <Row className="mb-5">
            {/* Pictures Col */}
            <Col md={6}>
              <Image src={room.image} alt={room.name} fluid  /> 
            </Col>
            
            {/* Descriptions Col */}
            <Col md={6}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                       <h3 className="m-0">{room.name}</h3>
                       </ListGroup.Item>
                       <ListGroup.Item>

                       <p className="desc">Description:<span className="s-desc">{room.description}</span></p>
                       </ListGroup.Item>
                    
                    <ListGroup.Item>
                       <h6>Price: {room.price}$</h6>
                    </ListGroup.Item>
                   
                </ListGroup>
            </Col>
        </Row> 
   <hr></hr>

        {/* Make Reservation */}
            <Row md={12} className=" mt-5 justify-content-center mb-5 mt-5">
                <Card style={{width:'80%'}}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                 <strong>${room.price}</strong>
                                 </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>

                    {
                        <ListGroup.Item className='m-1'>
                            <Row>
                                <Col>
                                Rooms
                                </Col>
                                <Col>
                                 <Form.Control as='select' value={reservation} onChange={(e) => setReservation(e.target.value)}>

                                     {[...Array(room.roomOnStock).keys()].map((x) => (
                                         <option key={x+1} value={x+1}> {x+1} </option>
                                     ))}

                                 </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    }

                    <ListGroup variant='flush'>
                       

                        <ListGroup.Item>
                            <Button 
                            onClick={makeReservationHandler}
                            className='btn-block' 
                            type='button' size='lg' 
                            disabled={room.roomOnStock === 0}>
                                Make Reservation
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Row>
        </Container>
        )
} 

        </>
    )
}

export default Products
