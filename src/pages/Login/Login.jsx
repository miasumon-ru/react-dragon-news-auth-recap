import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";



const Login = () => {

    const {signIn} = useContext(AuthContext)

   
    const handleLogin = (e) => {

        e.preventDefault()

        const form = new FormData(e.currentTarget)

        // get email and password
       
        const email = form.get('email')
        const password = form.get('password')

        console.log(email , password)

        // signIn

        signIn(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })

  
        
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">

                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <p className="mt-5">Do not have an account ?
                            <br /> Please  
                               <Link to={'/register'} >
                                  <span className="font-bold underline ml-2 text-blue-700">   Register </span>
                                 </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;