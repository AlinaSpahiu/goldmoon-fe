import React, {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button, Row, Col, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listRooms, deleteRoom, createRoom} from '../actions/roomActions'
import {ROOM_CREATE_RESET} from '../constants/roomConstants'

const RoomListPage = ({history, match}) => {

    const dispatch = useDispatch()

    const roomList = useSelector(state => state.roomList)
    const{loading, error, rooms} = roomList

    const roomDelete = useSelector(state => state.roomDelete)
    const { loading: loadingDelete, error: errorDelete, success:successDelete, } = roomDelete

    const roomCreate = useSelector(state => state.roomCreate)
    const { loading: loadingCreate, error: errorCreate, success:successCreate, room: createdRoom} = roomCreate

    const userLogin = useSelector(state => state.userLogin)
    const{userInfo} = userLogin

    useEffect(()=>{
        dispatch({type: ROOM_CREATE_RESET})
        if(!userInfo || !userInfo.isAdmin){
            history.push('/login')
          if(successCreate){
              history.push(`/admin/room/${createdRoom._id}/edit`)
          }
        } else{
            dispatch(listRooms())
        }
        dispatch(listRooms())
    }, [dispatch, history, userInfo, successDelete, successCreate, createdRoom])

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure?!')){
           dispatch(deleteRoom(id))
        }
        
    }

    const createRoomHandler = () => {
        dispatch(createRoom())
    }
    return (
        <>
        <Container>
            <Row className='align-items-center'>
                <Col>
                  <h1> Rooms </h1>
                </Col>
                <Col className='text-right'>
                    <Button className="my-3" onClick={createRoomHandler}>
                        <i className="fas fa-plus"></i> Create Room
                    </Button>
                </Col>

            </Row>
            {loadingDelete && <Loader />}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

            {loadingCreate && <Loader />}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
             : (
                 <Table striped bordered hover responsive variant="" className='table-sm'>
                     <thead>
                         <tr>
                             <th> ID </th>
                             <th> NAME </th>
                             <th> PRICE </th>
                             <th> Includes </th>
                             <th> Image </th>
                             <th> TOOLS </th>
                         </tr>
                     </thead>
                     <tbody>
                         {rooms.map(room =>(
                             <tr key={room._id}> 
                                 <td> {room._id}</td>
                                 <td> {room.name}</td>
                                 <td> {room.price}</td>
                                 <td> {room.includes}</td>
                                 <td> </td>
                                 <td>
                                     <LinkContainer to={`/admin/room/${room._id}/edit`}>
                                        <Button variant='light' className='btn-sm'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                     </LinkContainer>
                                     <Button variant='danger' className='btn-sm' onClick={()=>
                                     deleteHandler(room._id)}>
                                         <i className='fas fa-trash'></i>
                                     </Button>
                                 </td>
                             </tr>
                         ))}
                     </tbody>
                 </Table>
             )    
        }</Container>
        </>
    )
}

export default RoomListPage
