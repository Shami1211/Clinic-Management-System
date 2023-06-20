import React from 'react';
import './Styles/footer.css';

export default function PatientFooter() {
  return (
    <div className='footer-ft'>

        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
       		<footer class="footer-footer">
				<div class="footer-container">
					<div class="footer-row">
						<div class="footer-col">
							<h4 className='footer-h4'><b>Discover</b></h4>
							<ul className='footer-ul'>
								<li className='footer-li'><a className='footer-a' href='/'>Home</a></li>
								<li className='footer-li'><a className='footer-a' href='/'>Cetagory</a></li>
								<li className='footer-li'><a className='footer-a' href='/'>About Us</a></li>
								<li className='footer-li'><a className='footer-a' href='/'>Contact Us</a></li>
							</ul>
						</div>

						<div class="footer-col">
							<h4 className='footer-h4'><b>About</b></h4>
							<ul className='footer-ul'>
								<li className='footer-li'><a className='footer-a' href='/'>Clients</a></li>
								<li className='footer-li'><a className='footer-a' href='/'>Team</a></li>
								<li className='footer-li'><a className='footer-a' href='/'>Career</a></li>
								<li className='footer-li'><a className='footer-a' href='/'>Journal</a></li>
							</ul>
						</div>

						<div class="footer-col">
							<h4 className='footer-h4'><b>Help</b></h4>
							<ul className='footer-ul'>
								<li className='footer-li'><a className='footer-a' href='/'>Privacy Policy</a></li>
								<li className='footer-li'><a className='footer-a' href='/'>Terms & Condition</a></li>
								<li className='footer-li'><a className='footer-a' href='/'>Partners</a></li>
								<li className='footer-li'><a className='footer-a' href='/'>Legalty</a></li>
							</ul>
						</div>

						<div class="footer-col">
							<h4 className='footer-h4'><b>follow us</b></h4>
							<div class="social-links">
								<a className='footer-a' href='/'><i class="fab fa-facebook-f"></i></a>
								<a className='footer-a' href='/'><i class="fab fa-twitter"></i></a>
								<a className='footer-a' href='/'><i class="fab fa-instagram"></i></a>
								<a className='footer-a' href='/'><i class="fab fa-linkedin-in"></i></a>
							</div>
						</div>

						<br></br>

						<p className='footer-f'>Copyright © 2023 - District General Hospital, Gampaha, Sri Lanka. All Rights Reserved</p>

				</div>
			</div>
  		</footer>
    </div>
  )
}
