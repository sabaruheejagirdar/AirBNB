import {Link, Navigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginPage(){
    const [ email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    function handleLoginSubmit(ev){
        ev.preventDefault();
        try{
            axios.post('/login', { email, password});
            alert("Login Successful. Now you can log-in")
            setRedirect(true);
        } catch(e){
            alert("Login Failed!!!")
        }
    }

    if (redirect){
        return <Navigate to={'/'} />
    }

    return(
        <div className="mt-4 mb-0 ml-auto mr-auto w-60 text-center items-center justify-around grow flex " >
            <div className="-mb-80">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-m mx-auto" onSubmit = {handleLoginSubmit}>
                    <input type="email" value={email} placeholder="your@email.com"
                    onChange={ev => setEmail(ev.target.value)} />
                    <input type="password" placeholder="password" value={password}
                    onChange={ev=> setPassword(ev.target.value)}
                    />
                    <button className="primary">Login</button>
                    <div className="text-center font-small text-gray-500" style={{ fontSize: 13 }}>
                        Don't have an account yet? &nbsp;
                        <Link className="underline text-black" to={'/register'}>Register now</Link>
                    </div>
            </form>
            </div>
            
        </div>
    );
}