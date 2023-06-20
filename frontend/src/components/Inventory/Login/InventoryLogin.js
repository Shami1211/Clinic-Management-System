import React, {useState} from 'react';
import './InventoryLogin.css';
import inlog from './Photos/inlog.jpg';
import Swal from 'sweetalert2';

export default function InventoryLogin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
 
      console.log(username,password);
      const response = await fetch('http://localhost:5000/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ username, password }),
     });
 
     const data = await response.json();

     if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
      }).then(() => {
        window.location.href = 'http://localhost:3000/InventoryMainHome';
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Unsuccessful',
        text: 'Invalid email or password. Try Again!',
      });
      // Handle login error
      console.log(data.error);
    }
    };

 return (

   <div>
       <h1 className='phar-h1-log'>Inventory Management System</h1>
   <div className='login-Main'>

       <br></br> <br></br>

       <div class="login-row">
           <div class="login-column1">
           <img src={inlog} className="login-signin" alt="signin logo"  width={"700%"}/> 
           </div>


           <div class="login-column2">
               <div className='login-fullbox'>
               <br></br><br></br>

               <h2 className='login-h2'>Sign in</h2>

                   <form className='login-from' onSubmit={handleSubmit}>
                   
                   <div className='login-fr'>
                       
                       <br></br>

                       <h3 className='login-h3'>Email</h3>

                       <div className='login-in'>
                           <input className="Input-log" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter your username" type={'email'} name="email" ></input>
                       </div>

                       <br></br>

                       <h3 className='login-h3'>Password</h3>

                       <div className='login-in'>
                           <input className="Input-log"  onChange={(e)=>setPassword(e.target.value)}   placeholder="Enter your password" type={'password'} name="password" ></input>
                       </div>
                               <br></br>



                       <div className='login-br'>
                           <button type='submit' className='login-button-24'>Login</button>
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