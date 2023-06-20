//import React from "react";
import React, {  useState } from 'react';

//import { Box } from "@mui/system";
// import Redirect  from "react-router-dom";
import mm from './MemberMainH1/Photos/mm.png'
import '../Member/MemberLogin/MemberLogin.css'



export default function MemberLogin() {

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

       // If login is successful, set redirect To Profile
       if (response.ok) {
         alert('Login Successful !');
         window.location.href='http://localhost:3000/memberhome';
       } else {

        alert("Invalid Email or Password. Try Again !")
         // Handle login error
         console.log(data.error);
       }
     };
   
    //  // Redirect to the user profile page if redirectToProfile is true
    //  if (redirectToProfile) {
    //    return <Redirect to="/userprofile" />;
    //  }
  return (

    <div>
        <h1 className='phar-h1-log'>Staff Management System</h1>
    <div className='login-Main'>

        <br></br> <br></br>

        <div class="login-row">

            <div class="login-column1">
            <img src={mm} className="login-signin" alt="signin logo"  width={"700%"}/> 
            </div>


            <div class="login-column2r">
                <div className='login-fullboxr'>
                <br></br><br></br>

                <h2 className='login-h2r'>Login</h2>

                    <form className='login-from' onSubmit={handleSubmit}>
                    
                    <div className='login-fr'>
                        
                        <br></br>

                        <h3 className='login-h3'>Email:</h3>

                        <div className='login-in'>
                            <input className="Input-log" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Your User Name" type={'email'} name="email" ></input>
                        </div>

                            <br></br>

                        <h3 className='login-h3'>Password:</h3>

                        <div className='login-in'>
                            <input className="Input-log"  onChange={(e)=>setPassword(e.target.value)}   placeholder="Enter Your Password" type={'password'} name="password" ></input>
                        </div>
                                <br></br>



                        <div className='login-b'>
                            <button type='submit' className='login-button-24lr'>Login</button>
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


//EmailAddress,
//Password,













/*const MemberLogin = () =>{
    return (
        <from>
            <Box
            display= "block"
           flexDirection="colom" 
             //justifyContent={"center"} 
             //maxWidth={2000}
            //alignContent={"center"}
            //alignSelf="center"
            //marginLeft={"auto"}
            //marginRight="auto"
            marginTop={8}        >

            <div className="login-form">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit" className="btn"><Link to={'/memberhome'}>Login</Link></button>
                
            </form>
        </div>


            </Box>
        </from>
    );
};

export default MemberLogin;*/
