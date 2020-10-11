import React from 'react'
import Banner from "../components/Banner"
import {Container, Row, Col} from "react-bootstrap"



export default function Spa() {
    return (
        <>
         <div className="spa-banner">
            <Banner title="spa & wellnes" > </Banner>
          </div>

          {/* ----------------- */}

            {/* Section One */}
            <Container>
                <Row className="m-5"> 
                    <Col md={7}>
                        <img src="/images/spa/spa-1.jpg" className="d-block w-100 abtimg" />
                    </Col>

                    <Col>
                    <div className="content abt-p">
                  <h3> Spa & Wellnes</h3>
                  <p> Spa & Wellness at Premium Beach offers a unique feel. A stress -free oasis for rest and relaxation that invites you to step into the world where time honoured traditions and spa rituals bring you an authentic experience of total well being. </p>
                  <br />
                  <p> Inspired by the fusion of international spa concepts, Premium Spa & Wellness offers a wide range of exotic, holistic healing treatments and modern therapies where east meets west. The intention is geared towards maintaining and regaining emotional, physical, mental and spiritual balance.</p>
              </div>
                    </Col>
                </Row>

            {/* Section two */}
                <Row className="m-5"> 
                    

                    <Col>
                    <div className="content abt-p">
                    <h3> Explore...</h3>
                    <p> Take the time to explore our SPA.</p>
                    <p>Our treatments, programs and packages are carefully selected for your health and well being. Indulge in a PREMIUM experience for your PRIME senses.</p>
                    <p>You deserve it!</p>
              </div>
                    </Col>
                    <Col md={7}>
                        <img src="/images/spa/spa-2.jpeg" className="d-block w-100 abtimg"/>
                    </Col>
                </Row>

                <Row className="m-5"> 
                    <Col md={7}>
                        <img src="/images/spa/spa-3.jpeg" className="d-block w-100 abtimg"/>
                    </Col>

                    <Col>
                    <div className="content abt-p">
                  <h3> Skincare</h3>
                  <p> Spa & Wellness at Premium Beach offers a unique feel. A stress -free oasis for rest and relaxation that invites you to step into the world where time honoured traditions and spa rituals bring you an authentic experience of total well being. </p>
                  <br />
                  <p> Inspired by the fusion of international spa concepts, Premium Spa & Wellness offers a wide range of exotic, holistic healing treatments and modern therapies where east meets west. The intention is geared towards maintaining and regaining emotional, physical, mental and spiritual balance.</p>
              </div>
                    </Col>
                </Row>

                <Row className="m-5"> 
                   

                    <Col>
                    <div className="content abt-p">
                  <h3> Selected Products</h3>
                    <p> Take the time to explore our SPA.</p>
                    <p>Our treatments, programs and packages are carefully selected for your health and well being. Indulge in a PREMIUM experience for your PRIME senses.</p>
                    <p>You deserve it!</p>
              </div>
                    </Col>
                    <Col md={7}>
                        <img src="/images/spa/spa-4.jpg" className="d-block w-100 abtimg"/>
                    </Col>
                </Row>
            </Container>
           
        
        </>
    )
}
