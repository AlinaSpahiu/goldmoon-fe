import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FaQuestionCircle} from "react-icons/fa"
import "./styles/Footer.css"


const Footer = () => {
    return (
       
        <footer>
            <div className="footer">
      
                <Row className="justify-content-center">
                    <Col className="col1">
                    <h3> Contact Us</h3>
                    <p><span>Email:</span> goldenmoon@gmail.com</p>
                    <p><span>Tel:</span> +01 123 456</p>
                    </Col>

                    <Col className="col2">
                    <h3 className='h3p'> Follow Us</h3>
                    <p className='h3p'> Social Media Channels</p>
                    <ul>
                        
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                        <li><i className="fab fa-youtube"></i></li>
                        <li><i className="fab fa-facebook-f"></i></li>
                    </ul>
                    </Col>
                    
                    <Col className="col3">
                     <h3><FaQuestionCircle /> FAQ:</h3> 
                     <p> Ask us for everything you are interested for:</p>
                    </Col>
                </Row>

               
            </div>
            <Row className='justify-content-center rr'><p> Copyright ©  Alina Spahiu; 2020</p></Row>
        </footer>
       
    )
}

export default Footer
