import React from 'react'
import "./Trusted.scss"

const Trusted = () => {
    return (
        <div>
            <div className="trusted-section">
                <div className="trusted-content container">
                    <div className="content-image col-lg-9">
                        <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp" alt="" />
                        <div className="image-position col-lg-6">
                            <div className="position-title">
                                <h2>Trusted Merchant</h2>
                            </div>
                            <div className="position-year">
                                <p>FOR 50 YEARS</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-description col-lg-2">
                        <div className="content-header"><p>MERCHANT COMPANY</p></div>
                        <div className="content-title"><h2>About Us</h2></div>
                        <div className="content-text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!


                        </p></div>
                        <button className='btn btn-dark'>Learn More</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trusted