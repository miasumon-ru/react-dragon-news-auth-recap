import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Register = () => {
    const {createUser, logOut} = useContext(AuthContext)
    
   const navigate =  useNavigate()
    const handleRegister = (e) => {

        e.preventDefault()

        const form = new FormData(e.currentTarget)

        // get email , password, name and photo url
       
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const photoUrl = form.get('photo-url')

        console.log( name , photoUrl , email , password)

        // creating an user 

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            e.target.reset()

            // navigating to home after registration

            navigate('/')

            // logout immediately after registering
            logOut()
            .then(()=> {
                console.log('logout successfuly')
            })
            .catch(error => console.log(error))

        })
        .catch(error => console.log(error))

        
        
    }


    return (
        <div>
        <Navbar></Navbar>

        <div className="hero min-h-screen ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">

                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo-url" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
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

                        <p className="mt-5">Already have an account ?
                        <br /> Please  
                           <Link to={'/login'} >
                              <span className="font-bold text-blue-700"> Login </span>
                             </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Register;
