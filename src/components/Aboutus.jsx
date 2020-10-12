import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import "./styles/Aboutus.css"

const Aboutus = () => {
    return (
      <>
      <Row> <h4 className="about-us"> About Us..</h4></Row>
        <Container className='pb-5'>
          
            <Row className='row'>
                <Col md={6}>
                 <Carousel expand='lg'>
                     <Carousel.Item>
                      <img
                        className="d-block w-100 abtimg"
                        src="/images/pic-1.jpg"
                        alt='rooms'
                       />
                     </Carousel.Item>

                     <Carousel.Item>
                      <img
                        className="d-block w-100 abtimg"
                        src="/images/pic-2.jpg"
                        alt='rooms'
                       />
                     </Carousel.Item>

                     <Carousel.Item>
                      <img
                        className="d-block w-100 abtimg"
                        src="/images/pic-3.jpg"
                        alt='rooms'
                       />
                     </Carousel.Item>

                     <Carousel.Item>
                      <img
                        className="d-block w-100 abtimg"
                        src="/images/pic-4.jpg"
                        alt='rooms'
                       />
                     </Carousel.Item>

                     <Carousel.Item>
                      <img
                        className="d-block w-100 abtimg"
                        src="/images/pic-5.jpg"
                        alt='rooms'
                       />
                     </Carousel.Item>

                     <Carousel.Item>
                      <img
                        className="d-block w-100 abtimg"
                        src="/images/pic-6.jpg"
                        alt='rooms'
                       />
                     </Carousel.Item>

                     <Carousel.Item>
                      <img
                        className="d-block w-100 abtimg"
                        src="/images/pic-7.jpg"
                        alt='rooms'
                       />
                     </Carousel.Item>
                  </Carousel>  
               
                </Col>

                <Col className='abt-p'>
                <h1 className="h1ab h-animation"> Gold Moon Hotel, the brand new 5 star luxury resort</h1>
                <p className="p"> Premium Beach Hotel, the brand new 5 star luxury resort, in Albania is committed to offer inspiring travel experiences.</p>
                <p className="p"> Situated in the Golem beach area, on a front line with sea, it presents the finest class accommodation and hospitality in Albania. </p>
                <p className="p"> Located between two main Albanian cities at a short distance from Tirana International Airport, it is the right choice to accommodate all your travel needs. </p>
                <p className="p">Relax in the beach area, taste Mediterranean and traditional delicacies, explore nearby historical sites, benefit from business facilities, and its wide range of services for a more personalized guest experience while in business trip. </p>
                <p className="p">114 rooms and suites with more than 50% with panoramic sea view of Adriatic, with several bars and restaurants, swimming pools, conference rooms, spa and fitness area, operating 24h a day, and a highly experienced and enthusiastic staff are added measures of excellence for each moment of your stay in Premium Hotel. </p>
                <p className="p">For all those asking to organize corporate events, weddings, meetings and conferences, the standards of service, dining and facilities of this innovative resort that stand as a benchmark for all accommodation properties in Albanian beach area, are the guarantee for a significant life’s momen</p>

                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Aboutus
