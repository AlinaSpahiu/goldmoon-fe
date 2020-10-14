import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listRoomsDetails, updateRoom} from '../actions/roomActions'
import { ROOM_UPDATE_RESET } from '../constants/roomConstants'

const RoomEditPage
 = ({ match, history }) => {
  const roomId = match.params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [includes, setIncludes] = useState('')

  const dispatch = useDispatch()

  const roomDetails = useSelector((state) => state.roomDetails)
  const { loading, error, room } = roomDetails

  const roomUpdate = useSelector((state) => state.roomUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate} = roomUpdate


  useEffect(() => {
      if (successUpdate){
        dispatch({type: ROOM_UPDATE_RESET})
          history.push('/admin/roomlist')
      }else {
      if (!room.name || room._id !== roomId) {
        dispatch(listRoomsDetails(roomId))
      } else {
        setName(room.name)
        setPrice(room.price)
        setImage(room.image)
        setIncludes(room.includes)
      }
      }
  }, [dispatch, history, roomId, room, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateRoom({
      _id:roomId, name, price, image, includes
    }))
  }

  return (
    <>
      <Link to='/admin/roomlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Room</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price Address</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='includes'>
              <Form.Label>Includes</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter includes'
                value={includes}
                onChange={(e) => setIncludes(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default RoomEditPage
