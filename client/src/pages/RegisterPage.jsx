import {Link} from "react-router-dom"

export default function RegisterPage(){
    return(
        <div className="mt-4 mb-0 ml-auto mr-auto w-60 text-center items-center justify-around grow flex " >
            <div className="-mb-80">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-m mx-auto">
                    <input type="text" placeholder="John Doe"/>
                    <input type="email" placeholder="your@email.com" />
                    <input type="password" placeholder="password" />
                    <button className="primary">Login</button>
                    <div className="text-center font-small text-gray-500" style={{ fontSize: 13 }}>
                        Already a member? &nbsp;
                        <Link className="underline text-black" to={'/login'}>Login</Link>
                    </div>
            </form>
            </div>
            
        </div>
    );
}