import React, { useRef }  from 'react';
import HeaderTwo from '../../header/HeaderTwo';
import Home from './Home';
import Section2Area from './Section2Area';
import Section3Area from './Section3Area';
import LpOverview from './LpOverview';
import MeetTheTeam from './MeetTheTeam';
import LoopWe from './LoopWe';
import Benefits from './Benefits';
import ContactUs from './ContactUs';
import Hiring from './Hiring';
import Footer from '../../footer/Footer';



function IndexTwo(){

    const aboutRef = useRef(null); //represents about section
    const initiativesRef = useRef(null); //represents initiatives
    const benefitsRef = useRef(null); //represents benefits
    const contactRef = useRef(null); //represents contact

	return(  
    
        <>
        {/* header-area */}

        <HeaderTwo aboutRef={aboutRef} initiativesRef={initiativesRef} benefitsRef={benefitsRef} contactRef={contactRef}/>

        <main>

            <div className='spaceBG'>

                {/* Homepage */}
                <Home/>

                {/* Worldwide Loopers */}
                <Section2Area aboutRef={aboutRef} initiativesRef={initiativesRef} benefitsRef={benefitsRef} contactRef={contactRef}/>

            </div>

            {/* Our Values */}
                <Section3Area/>
            
            <div className='main_bg_1'>

                {/* LoopMe Overview */}
                <LpOverview/> 
            </div>

            <div className='main_bg_2'>
                {/* Meet The Team */} 
                <MeetTheTeam/>
            </div>

            <div className='main_bg_3'>
                {/* Loop WE - INITIATIVES */}
                <LoopWe aboutRef={aboutRef} initiativesRef={initiativesRef} benefitsRef={benefitsRef} contactRef={contactRef}/>
            </div>

            <div className='main_bg_4'>
                {/* Benefits */}
                <Benefits aboutRef={aboutRef} initiativesRef={initiativesRef} benefitsRef={benefitsRef} contactRef={contactRef}/>
            </div>

            <div className='main_bg_5'>
                {/* We're Hiring */}
                <Hiring aboutRef={aboutRef} initiativesRef={initiativesRef} benefitsRef={benefitsRef} contactRef={contactRef}/>
            </div>

            <div className='main_bg_6'>
                {/* Contact Us */}
                <ContactUs aboutRef={aboutRef} initiativesRef={initiativesRef} benefitsRef={benefitsRef} contactRef={contactRef}/>
            </div>

        </main>

        {/* Footer */}
        <Footer/>

        </>
	
	)
}
	
export default IndexTwo