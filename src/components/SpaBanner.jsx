import React,{Component}from 'react'
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import YouTube from 'react-youtube'


class SpaBanner extends Component {

    _onPlay(event){
        event.target.pauseVideo()
    }
 
    render(){
    const opts={
        height: '350',
        width: '100%',
        playerVars:{
            autoplay:1
        }
    }
    return (
        <Container >
            <Row className="my-5 ">
                <Col className='abt-p' md={6}>
                    <h1 h1 className="h1ab h-animation"> Feel the Spa..</h1>
               <p className="p"> The sybaritic Asphodel Spa is a hymn to nature, intriguing to the senses yet 
                   calming to the mind.</p>  
               <p className="p">The sound of falling water, the fine incense of ouzo and anise, the breeze in the
                   garden treatment rooms, the rich natural textures; these and a variety of 
                   treatments offering different experiences and Elemis products have been 
                   deployed in its design to awake all the senses and sooth the body and mind.</p> 
               <p className="p"> This is one of the best spas in the world, a space that can keep the visitor 
                   content day after day. </p>
               <p className="p"> The symbol of the hotel is the Asphodel, the immortal flower in the ancient 
                   Greek mythology.</p> 
                <p className="p">According to the ancient Greeks, it stands for the ultimate happiness 
                   of the soul and was the first sight a soul longed to see at the gates of p</p>
                </Col>

                <Col md={6}>
          <YouTube
          videoId='1uZhxHubFBw'
          opts={opts}
          onReady={this._onPlay}
          />
           </Col>
          </Row>
         

          
        </Container>
    )
}}

export default SpaBanner
