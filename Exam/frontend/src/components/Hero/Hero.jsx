import React from 'react'
import "./Hero.scss"

const Hero = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="hero-content container">
                    <div className="content col-lg-7">
                        <div className="content-title">
                            <h1>Shop With US</h1>
                        </div>
                        <div className="content-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                        </div>
                        <div className="content-buttons">
                            <button className='btn btn-dark btn-custom'>Shop Now</button>
                            <button className='btn btn-dark btn-custom'>Club Membership</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero