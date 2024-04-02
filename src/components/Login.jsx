// imports
import './Login.css'
import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';


function Login() {
    let [input, setInputs] = useState({});
    let [userDetails, setUserDetails] = useState({});
    
    const handleChange = (e) =>{
        return setInputs((item) => {
            return { ...item, [e.target.name]: e.target.value };
          });
        };


    function handleSubmit(e){
        e.preventDefault();
        setUserDetails((items) => {
            return{...items,...input};
        })
        setInputs({});
    }

    console.log(userDetails)
    
    return(
    <html>
    <div className = "grid-container">
    <div className='userPage' >
        <h1>Login</h1>   
        
        <form onSubmit={handleSubmit}>
         
        <div>
        <input 
            className = "dataField"
            id ="email" 
            name = "email" 
            type = "email" 
            placeholder = "properties@myemail.com" 
            required
            onChange = {handleChange}
            />
        </div>  

        <div>
        <input 
            className = "dataField"
            id ="password" 
            name = "password" 
            type = "password" 
            placeholder = "Password" 
            required
            onChange = {handleChange}/>
        </div>

        <div>

        {/*Used for when the user creates their account*/}
       {/* <select class = "dataField" id = "accountType" name = "accountType">
            <option value = "buyer">Buyer</option>
            <option value = "seller">Seller</option>
    </select>*/}
        </div>

        {/* <div id = "createAcc"><Link to = "/createaccount"  >Create Account</Link></div> */}
       
        <input className = "submitBtn" id= "loginButton" type = "submit" value = "Login"></input>
        
        </form>
    </div></div></html>)

}

export default Login