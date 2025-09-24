import React from 'react'

export default function Footer2() {
  return (
    <footer className="footer style-1">
      <div className="tf-container ">
        <div className="footer-body">
          <div className="footer-infor justify-content-between">
            <div className="item">
              <span className="d-block text_color-1 text-title mb_8">Phone Number:</span>
              <h4 className="text_white">+1 (813) 786-4201</h4>
            </div>
            <div className="item">
              <span className="d-block text_color-1 text-title mb_8">Our Address:</span>
              <p className="text_white h4">400 N Tampa St floor 15, Tampa, FL 33602</p>
            </div>
            <div className="item">
              <span className="d-block text_color-1 text-title mb_8">Email Address:</span>
              <a href="mailto:info@ramonaariasrealtor.com" className="link text_white text-body-3">info@ramonaariasrealtor.com</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex align-items-center justify-content-between">
          <p className="text_muted-color">
            ©2025 <a href="#" className="text_white hover-underline-link">Ramona Arias Realtor.</a>
            All Rights Reserved. 
            <span className="text_primary-color">Developed by <a href="https://fascinantedigital.com/" target="_blank" className="text_primary-color hover-underline-link">Fascinante Digital</a></span>
          </p>
          <ul className="social d-flex gap_24">
            <li><a href="#" className="icon-FacebookLogo"></a></li>
            <li><a href="#" className="icon-XLogo"></a></li>
            <li><a href="#" className="icon-TiktokLogo"></a></li>
            <li><a href="#" className="icon-InstagramLogo"></a></li>
            <li><a href="#" className="icon-YoutubeLogo"></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
