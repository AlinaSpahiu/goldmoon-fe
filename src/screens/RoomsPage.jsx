import React, {useState, useEffect} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'
import "./styles/RoomsPage.css"
import RoomsPageOnlyRooms from "../components/RoomsPageOnlyRooms"



const RoomsPage = () => {

  
    return (
        <>
        <Hero hero="roomsHero">
          <Banner title="our rooms" >
            <Link to="/" className="btn-primary1">
                return home
            </Link>
          </Banner>
        </Hero>

                <Container>
                  <RoomsPageOnlyRooms />
                </Container>
        </>
    )
}

export default RoomsPage
