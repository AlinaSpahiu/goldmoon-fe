import React from 'react'
import {Carousel, Container} from "react-bootstrap"

const Crsl = () => {
    return (
       
            <Carousel expand='lg'>
               <Carousel.Item>
                  <img
                     className="d-block w-100 crslimg"
                     src="/images/bckgr.jpg"
                     alt="First slide"
                 />
               <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
             </Carousel.Caption>
              </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 crslimg"
      src="/images/bckgr3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 crslimg"
      src="/images/bckgr2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

 
</Carousel>
            
     
    )
}

export default Crsl
