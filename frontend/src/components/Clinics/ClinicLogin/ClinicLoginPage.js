import React,{useState} from 'react';
import plog from '../img/plog.png';


export default function AdminLogin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   //  const history = useNavigate();
 
   // const [redirectToProfile, setRedirectToProfile] = useState(false);

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

      // If login is successful, set redirectToProfile to true
      if (response.ok) {
       alert('Login Successful !');
        window.location.href='http://localhost:3000/clinicHome';
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
        <h1 className='phar-h1-log'>Clinic Management System</h1>
            <div className='login-Main'>

            <br></br> <br></br>

            <div class="login-row">
                <div class="login-column1r">
                    <img src={plog} className="login-signinr" alt="signin logo"  width={"700%"}/> 
                </div>


            <div class="login-column2r">
                <div className='login-fullboxr'>
                <br></br><br></br>

                <h2 className='login-h2r'>Login</h2>

                    <form className='login-fromr' onSubmit={handleSubmit}>
                    
                    <div className='login-fr'>
                        
                        <br></br>

                       <h3 className='login-h3'>Email:</h3>

                        <div className='login-in'>
                            <input className="Input-logr" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Your User Name" type={'email'} name="email" ></input>
                        </div>

                           <br></br>

                       <h3 className='login-h3'>Password:</h3>

                        <div className='login-in'>
                            <input className="Input-logr"  onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password" type={'password'} name="password" ></input>
                        </div>
                        <br></br>


                       <div className='login-b'>
                           <button type='submit' className='login-button-24lr'>Login</button>
                       </div>

                                <br></br>
                       </div>                   
                   </form>
               </div>

            </div>

            </div>

        </div>
    </div>
 )
}