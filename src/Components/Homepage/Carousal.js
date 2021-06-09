import React from 'react'
import image from './1.png';
import './Carousal.css'

const Carousal = () => {
    return (
        <div className="App_Main_Section">
            <div className="Heading__section">
                <h1>Where good ideas find you.</h1>
                <p>
                    Read and share new perspectives on just about any topic. Everyone's welcome <a href="#">Learn more</a>
                </p>
                <button onClick={()=>window.location.href='/signup'}>Get Started</button>
            </div>
            <div className="image__section">
                <img
                src={image}
                alt="medium" 
                />
            </div>
        </div>
    )
}

export default Carousal;
