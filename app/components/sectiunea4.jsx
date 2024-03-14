'use client'
import Image from 'next/image';

import image1 from '../../public/images/drumManastire.jpeg';
import image2 from '../../public/images/cimitirul.jpeg';
import image3 from '../../public/images/mormant.jpeg';
import image4 from '../../public/images/biserica.jpeg';
import image5 from '../../public/images/imprejurimi.jpeg';
import image6 from '../../public/images/imprejurimi2.jpeg';


function Section4(){
    return(
       <div id='section4'>
            <div className="container center py-5">
            <h1>Galerie Foto</h1>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <Image 
                                src={image1} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                            <div className="card-body">
                                <h5 className="card-title">DRUMUL SPRE MĂNĂSTIRE</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <Image 
                                src={image2} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                            <div className="card-body">
                                <h5 className="card-title">CIMITIRUL SFINȚILOR DIN MĂNĂSTIREA BUCIUM</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <Image 
                                src={image3} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                            <div className="card-body">
                                <h5 className="card-title">MORMÂNTUL LUI MOȘ ILIE BURLA </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <Image 
                                src={image4} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                            <div className="card-body">
                                <h5 className="card-title">BISERICA</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <Image 
                                src={image5} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                            <div className="card-body">
                                <h5 className="card-title">ÎMPREJURIMI</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card h-100">
                            <Image 
                                src={image6} 
                                alt=''
                                sizes="100vw"
                                    // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: 'auto',}}
                                blurDataURL="data:..." 
                                placeholder="blur" 
                                />
                            <div className="card-body">
                                <h5 className="card-title">ÎMPREJURIMI</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <hr></hr>
       </div>
    )
}

export default Section4