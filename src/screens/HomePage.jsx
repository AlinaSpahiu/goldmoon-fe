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

const HomePage = () => {
    return (<>
        <div className="crsl">
            <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                <Link to="/rooms" className="btn-primary">
                    Our rooms
                </Link>
            </Banner>
          </Hero>   
        </div>

        <div className="">
          <Aboutus />
        </div>

<div className="abtus-bck py-4" >
<RoomsPageOnlyRooms />
</div>

<SpaBanner />
<div className="abtus-bck py-4" > <Services /></div>

</>
    )
}

export default HomePage
