import React from 'react';
import './CSS/footer.css';

export default function LaboratoryFooter() {
  return (
    <div className='lab-ft'>

        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
       
	   <footer class="lab-footer">
  	 <div class="lab-container">
  	 	<div class="lab-row">
  	 		<div class="lab-footer-col">
  	 			<h4 className='lab-h4'><b>Discover</b></h4>
  	 			<ul className='lab-ul'>
                    <li className='lab-li'><a className='lab-a'  href='/'>Home</a></li>
  	 				<li className='lab-li'><a className='lab-a' href='/'>Cetagory</a></li>
  	 				<li className='lab-li'><a className='lab-a' href='/'>About Us</a></li>
  	 				<li className='lab-li'><a className='lab-a' href='/'>Contact Us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="lab-footer-col">
  	 			<h4 className='lab-h4'><b>About</b></h4>
  	 			<ul className='lab-ul'>
  	 				<li className='lab-li'><a className='lab-a' href='/'>Clients</a></li>
  	 				<li className='lab-li'><a className='lab-a' href='/'>Team</a></li>
  	 				<li className='lab-li'><a className='lab-a' href='/'>Career</a></li>
  	 				<li className='lab-li'><a className='lab-a' href='/'>Journal</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="lab-footer-col">
  	 			<h4 className='lab-h4'><b>Help</b></h4>
  	 			<ul className='lab-ul'>
                    <li className='lab-li'><a className='lab-a' href='/'>Privacy Policy</a></li>
  	 				<li className='lab-li'><a className='lab-a' href='/'>Terms & Condition</a></li>
  	 				<li className='lab-li'><a className='lab-a' href='/'>Partners</a></li>
  	 				<li className='lab-li'><a className='lab-a' href='/'>Legalty</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="lab-footer-col">
  	 			<h4 className='lab-h4'><b>follow us</b></h4>
  	 			<div class="lab-social-links">
  	 				<a className='lab-a' href='/'><i class="fab fa-facebook-f"></i></a>
  	 				<a className='lab-a' href='/'><i class="fab fa-twitter"></i></a>
  	 				<a className='lab-a' href='/'><i class="fab fa-instagram"></i></a>
  	 				<a className='lab-a' href='/'><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
			<br/><br></br>
			   <p className='lab-f'>Copyright © 2022 - Department of Hospital, Sri Lanka. All Rights Reserved</p>
  	 	</div>
  	 </div>
  </footer>
    </div>
  )
}
