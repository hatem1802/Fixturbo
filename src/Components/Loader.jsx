import React, { useEffect } from 'react'

const Loader = () => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.loaderPage').classList.add('hidden')
        }, 1500);
    }, []);

    return (
        <>
            <div className='loaderPage' style={{width:'100%', height:'100vh', background:'black', position:'fixed', top:'0', zIndex:'100', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <span className="loader"></span>
            </div>
        </>
    )
}

export default Loader
