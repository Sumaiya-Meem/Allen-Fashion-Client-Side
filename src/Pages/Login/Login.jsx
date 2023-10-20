import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import {FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2'
const Login = () => {
  const [loginError, setLoginError] = useState('');
  const location =useLocation();
  const navigate = useNavigate();

  const { userLogin,googleSignIn} = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    setLoginError('');

    userLogin(email, password)
      .then(res => {
        console.log(res.user)
        Swal.fire(
        'Successfully Login',
        'success'
      )
       navigate(location?.state ? location.state:'/');
      
      })
      .catch(error => {
        setLoginError(error.message);
      }
      );
      

  }
  const handleGoogle =()=>{
    googleSignIn()
    .then(res=>{
      res.user
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
 

  return (
    <div>
      <div className="hero  bg-[#19c7c7]">
        <div className="hero-content flex-col bg-[#00000033]">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-50">
            <form className="card-body" onSubmit={handleLogIn}>

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
                <div>
                  {
                    loginError && <p className="text-red-300">{loginError}</p>
                  }
                </div>
              </div>
              <p>Create an account
                <span className="text-blue-500 ml-3"><Link to='/register'>Register</Link></span>

              </p>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-[#8d318a] to-[#19c7c7] text-white">Login</button>
              </div>
              <div>
               <p className="text-center"> Or Sign Up Using </p>
               <div className="flex items-center justify-center mt-3">
               <span className="text-2xl mr-3"><FcGoogle></FcGoogle></span>
               <span className="text-center text-blue-500 text-lg underline cursor-pointer" onClick={handleGoogle}> Google</span>
               </div>
              

              </div>
            </form>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;