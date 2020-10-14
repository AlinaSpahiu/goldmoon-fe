import React from 'react'
import Crsl from "../components/Crsl"
import Services from "../components/Services";
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import Aboutus from '../components/Aboutus';
import RoomsPageOnlyRooms from "../components/RoomsPageOnlyRooms"
import {Container} from 'react-bootstrap'
import SpaBanner from "../components/SpaBanner"
import Map from '../components/Map'
import "../components/styles/Aboutus.css"

const HomePage = () => {
    return (<>
        <div className="crsl">
            <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at €110">
                <Link to="/rooms" className="btn-primary1">
                    Our rooms
                </Link>
            </Banner>
          </Hero>   
        </div>

        <div className="">
          <Aboutus />
        </div>

     <div className="abtus-bck" >
        <div className="our-rooms mb-5"><p> Our Rooms...</p></div>
         <div className="mt-5"> <RoomsPageOnlyRooms /> </div> 
     </div>
      
      <div>
          <div> <div className="mb-5"><p className="our-spa"> Our Spa...</p></div> </div> 
          <div> <SpaBanner /> </div>
      </div>
     
<div className="abtus-bck py-4" > <Services /></div>



</>
    )
}

export default HomePage
