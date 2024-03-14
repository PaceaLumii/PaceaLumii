'use client'
import 'bootstrap/dist/css/bootstrap.css'
import Section1 from './sectiunea1'
import Section2 from './sectiunea2'
import Section3 from './sectiunea3'
import Section4 from './sectiunea4'



function Navbar(){
    return(
        <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">

            
            <Section1/>
            <Section2/>
            <Section4/>
            <Section3/>
        </div>

    )
}

export default Navbar