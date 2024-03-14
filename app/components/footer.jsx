'use client'


function Footer(){

    function getYear() {
       const year = new Date().getFullYear();
        return year ;
    }
    
    return (
        <p className='center py-5 footer'>Copyright  ©  {getYear()} Pacea Lumii</p>
        );
}

export default Footer