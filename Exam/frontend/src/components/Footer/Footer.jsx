import React from "react";
import "./Footer.scss"

const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <div className="footer-content container">
          <div className="content">
            <div className="content-sec">
              <div className="sec-title-group-first col-lg-6">
                <div className="sec-title col-lg-6">
                  <h5>ABOUT US</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                    facere laudantium magnam voluptatum autem. Amet aliquid
                    nesciunt veritatis aliquam.
                  </p>
                </div>
                <div className="sec-title col-lg-6">
                  <h5>QUICK LINKS</h5>
                  <div className="links">
                    <a href="">About Us</a>
                    <a href="">Services</a>
                    <a href="">Testominals</a>
                    <a href="">Contact US</a>
                  </div>

                </div>
              </div>
              <div className="sec-title-group-second col-lg-6 ">
                <div className="sec-title col-lg-6 ">
                  <h5>Follow Us</h5>
                  <div className="media-links">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-linkedin"></i>
                  </div>

                </div>
                <div className="sec-title col-lg-6">
                  <h5>FEATURED PRODUCT</h5>
                  <div className="title-image">
                    <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" alt="" />
                  </div>
                  <div className="title-header">
                    <h5>Leather Brown Shoe</h5>
                    <h6>$60.00</h6>
                  </div>
                  <button>ADD TO CART</button>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
