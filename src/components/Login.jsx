// imports
import './Login.css'
import React, {useRef, useState, useEffect, useContext} from 'react';
import AuthContext from '../context/AuthProvider';
import axios from '../api/testAPI';

import {  fetchAdmin} from "../api/testAPI";

import {Link} from 'react-router-dom';

const LOGIN_URL = '/auth';


function Login() {
    const {setAuth} = useContext(AuthContext)
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[errMsg, setErrMsg] = useState('');
    const[success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('')
    },[email,password])

    const handleSubmit = async (e) =>{
        e.preventDefault();
       
        try{
            const response = await axios.get(LOGIN_URL)
            const obj = response.data[0];
            console.log(response)
            if (email == obj.email && password == obj.password){
                const accessToken = response?.data.accessToken;
                const roles = response?.data?.roles;

                setAuth({email, password, roles, accessToken});
                setEmail('')
                setPassword('')
                setSuccess(true);}}

            
        catch(err){
            if(!err?.response){
                setErrMsg('No server response')
            }
            else if(err.response?.status === 400){
                setErrMsg('Missing email or Password')
            }
            else if(err.response?.status ===401){
                setErrMsg('Unauthorized')
            }
            else{
                setErrMsg('Login Failed')
            }
            // errRef.current.focus();
        }
        
    }




    // let [input, setInputs] = useState({});
    // let [userDetails, setUserDetails] = useState({});
    
    // const handleChange = (e) =>{
    //     return setInputs((item) => {
    //         return { ...item, [e.target.name]: e.target.value };
    //       });
    //     };


    // function handleSubmit(e){
    //     e.preventDefault();
    //     setUserDetails((items) => {
    //         return{...items,...input};
    //     })
    //     setInputs({});
    // }

    // console.log(userDetails)
    
    return(
        <> 
        {success ? (
        <section>
            <h1>You are logged in</h1>
        </section>):(
    <section>
    <div className = "grid-container">
    <div className='userPage' >
        <h1>Sign In</h1>   
        
        <form onSubmit={handleSubmit}>
            
                <label htmlFor="email">Email:</label>
                <input 
                    className = "dataField"
                    id ="email" 
                    ref = {userRef}
                    type = "email" 
                    placeholder = "properties@myemail.com" 
                    required
                    onChange = {(e) =>setEmail(e.target.value)}
                    value = {email}
                    autoComplete="off"
                    />
            
                <label htmlFor="password">Password:</label>
                <input 
                    className = "dataField"
                    id ="password" 
                    type = "password" 
                    placeholder = "Password" 
                    required
                    onChange = {(e) =>setPassword(e.target.value)}
                    value = {password}
                    />
            

        <button className = "submitBtn" id= "loginButton" >Login</button>
        
        </form>
        </div>
        </div>
    </section>)}</>)

}

export default Login