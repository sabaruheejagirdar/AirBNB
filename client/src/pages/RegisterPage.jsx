import {Link} from "react-router-dom";
import { useState } from 'react';
import axios from "axios";

export default function RegisterPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function registerUser(ev){
        ev.preventDefault();
        try{
            await axios.post('/register', {
                name,
                email,
                password
            });
            alert("Registration Successful. Now you can log-in")
        } catch(e){
            alert("Registration failed. Please try again later!!!")
        }
    }
    return(
        <div className="mt-4 mb-0 ml-auto mr-auto w-60 text-center items-center justify-around grow flex " >
            <div className="-mb-80">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-m mx-auto" onSubmit = {registerUser}>
                    <input type="text" placeholder="John Doe"
                        value = {name}
                        onChange={ev => setName(ev.target.value)}
                        />
                    <input type="email" placeholder="your@email.com" 
                        value={email}
                        onChange = {ev => setEmail(ev.target.value)}
                    />
                    <input type="password" placeholder="password" 
                        value={password}
                        onChange = {ev => setPassword(ev.target.value)}
                    />
                    <button className="primary">Register</button>
                    <div className="text-center font-small text-gray-500" style={{ fontSize: 13 }}>
                        Already a member? &nbsp;
                        <Link className="underline text-black" to={'/login'}>Login</Link>
                    </div>
            </form>
            </div>
            
        </div>
    );
}