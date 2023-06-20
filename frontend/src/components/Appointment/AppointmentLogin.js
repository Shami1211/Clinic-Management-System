import React from 'react'
import '../Phamacy/PLogin/PhamacyLogin.css';
import images from '../Phamacy/PLogin/Photos/logb.jpg';
import { Link } from 'react-router-dom';

const AppointmentLogin = () => {
  return (
    <div>
        <h1>Appointment Management System</h1>
    <div className='login-Main'>

        <br></br> <br></br>

        <div class="login-row">

            <div class="login-column1">
            <img src={images} className="login-signin" alt="signin logo"  width={"700%"}/> 
            </div>


            <div class="login-column2">
                <div className='login-fullbox'>
                <br></br><br></br>

                <h2 className='login-h2'>Login</h2>

                    <form className='login-from'>
                    
                    <div className='login-f'>
                        
                        <br></br>

                        <h3 className='login-h3'>User Name</h3>

                        <div className='login-in'>
                            <input className="Input-log" placeholder="Enter Your User Name" type={'email'} name="email" ></input>
                        </div>

                            <br></br>

                        <h3 className='login-h3'>Password</h3>

                        <div className='login-in'>
                            <input className="Input-log" placeholder="Enter Your Password" type={'password'} name="password" ></input>
                        </div>
                                <br></br>


                        <div className='login-b'>
                            <Link to={'/appointments'} className='login-button-24' >Login</Link>
                        </div>

                    </div>

                                <br></br>
                        
                    
                        <div className='login-but2'>
                        <button className='login-b2'>Forgotten password..?</button>
                        </div>

   
                    
                    </form>




                </div>

            </div>

        </div>

    </div>
    </div>
  )
}

export default AppointmentLogin