import {Link} from "react-router-dom"

export default function LoginPage(){
    return(
        <div className="mt-4 mb-0 ml-auto mr-auto w-60 text-center items-center justify-around grow flex " >
            <div className="-mb-80">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-m mx-auto">
                    <input type="email" placeholder="your@email.com" />
                    <input type="password" placeholder="password" />
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