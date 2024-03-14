'use client'
import { GiHamburgerMenu } from "react-icons/gi";
function Section1(){
    return(
        <div id="section1">
                <div className="bg-image">
                    <div>
                        <nav className="navbar navbar-expand-sm">
                            <ul className="navbar-nav mx-auto">
                                <li className='pading'>
                                    <a href="#section2" className="center">Despre Mănăstire</a>
                                </li>
                                <li className='pading'>
                                    <a href="#section4" className="center">Galerie Foto</a>
                                </li>
                                <li className='pading'>
                                    <a href="#section3" className="center">Locație și date de contact</a>
                                </li>
                                
                            </ul>
                        </nav>
                        <h1 className="center heading">PACEA LUMII</h1>

                    </div>
                    <div>
                        <div className="dropdown py-3 px-3">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <GiHamburgerMenu />         
                            </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#section2">Despre Mănăstire</a></li>
                                    <li><a className="dropdown-item" href="#section4">Foto</a></li>
                                    <li><a className="dropdown-item" href="#section3">Locație și date de contact</a></li>
                                </ul>
                        </div>
                        
                        

                    </div>
                </div>
            <hr className="firsthr"></hr>
        </div>
        
    )
}

export default Section1