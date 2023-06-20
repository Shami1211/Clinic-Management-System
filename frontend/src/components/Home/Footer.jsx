import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className='ft'>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
       <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4><b>Discover</b></h4>
  	 			<ul>
                    <li><a href='/'>Home</a></li>
  	 				<li><a href='/'>Cetagory</a></li>
  	 				<li><a href='/'>About Us</a></li>
  	 				<li><a href='/'>Contact Us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4><b>About</b></h4>
  	 			<ul>
  	 				<li><a href='/'>Clients</a></li>
  	 				<li><a href='/'>Team</a></li>
  	 				<li><a href='/'>Career</a></li>
  	 				<li><a href='/'>Journal</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4><b>Help</b></h4>
  	 			<ul>
                    <li><a href='/'>Privacy Policy</a></li>
  	 				<li><a href='/'>Terms & Condition</a></li>
  	 				<li><a href='/'>Partners</a></li>
  	 				<li><a href='/'>Legalty</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4><b>follow us</b></h4>
  	 			<div class="social-links">
  	 				<a href='/'><i class="fab fa-facebook-f"></i></a>
  	 				<a href='/'><i class="fab fa-twitter"></i></a>
  	 				<a href='/'><i class="fab fa-instagram"></i></a>
  	 				<a href='/'><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
			<br></br><br></br>
			   <p className='f'>Copyright © 2022 - Department of Hospital, Sri Lanka. All Rights Reserved</p>
  	 	</div>
  	 </div>
  </footer>
    </div>
  )
}
