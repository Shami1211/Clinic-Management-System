import React,{useState} from 'react';
import './DoctorLogin.css';
import Photos from './Photos/docLogin.png';
import Swal from 'sweetalert2';

//doctor login form
export default function DoctorLogin() {



    const [username, setUsername] = useState("");

     const handleSubmit = async (e) => {
       e.preventDefault();
  
       console.log(username);
       const response = await fetch('http://localhost:5000/doclogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
  
      const data = await response.json();

       // If login is successful, set redirect To Profile
       if (response.ok) {
        Swal.fire({
            icon: 'success',
            title: 'Login Successful',
          }).then(() => {
            window.location.href = 'http://localhost:3000/doctorsViewProfile';
          });
       } else {
        Swal.fire({
            icon: 'error',
            title: 'Login Unsuccessful',
            text: 'Invalid Email. Try Again !',
          });
         // Handle login error
         console.log(data.error);
       }
     };

return (

    <div>
        <h1 className='phar-h1-log'>Doctor Management System</h1>
    <div className='login-Main'>

        <br></br> <br></br>

        <div class="login-row">

            <div class="login-column1r">
            <img src={Photos} className="doc-login-signin" alt="signin logo"  width={"700%"}/> 
            </div>


            <div class="login-column2r">
                <div className='login-fullbox'>
                <br></br><br></br>

                <h2 className='login-h2r'>Login</h2>

                    <form className='login-from' onSubmit={handleSubmit}>
                    
                    <div className='login-f'>
                        
                        <br></br>

                        <h3 className='login-h3'>Email:</h3>

                        <div className='login-in'>
                            <input className="Input-logr" onChange={(e)=>setUsername(e.target.value)}  required="true"  placeholder="Enter Your User Name" type={'email'} name="email" ></input>
                        </div>

                            <br></br>

                        <div className='login-br'>
                            <button className='login-button-24' >Login</button>
                        </div>

                    </div>

                                <br></br>
                        
                    
  

   
                    
                    </form>


                </div>

            </div>

        </div>

    </div>
    </div>
  )
}
