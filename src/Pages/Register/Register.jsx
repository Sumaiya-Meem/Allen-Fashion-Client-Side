import { useContext, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";
const Register = () => {

    const { createNewUser,userLogOut } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const image = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name,image,email,password)
        setRegisterError('');


        if (!/^(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}$/.test(password)) {
            setRegisterError('Password should be at least six characters, one uppercase letter and one special character');
            return;
        }
        

        createNewUser(email, password)
            .then(res => {
                console.log(res.user)
                const user={email}
                    updateProfile(res.user, {
                    displayName: name,
                    photoURL: image, 
                   })
                   fetch('http://localhost:5000/user', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(user),
                    }).then(res=>res.json())
                    .then(data=>{
                        console.log(data)
                    })

                .then(() => {
                    Swal.fire(
                        'Successfully Register',
                        'success'
                    );
                    
                    userLogOut()
                        .then(() => {
                            navigate('/login');
                        })
                        .catch(error => {
                            console.log(error.message);
                        });
                })
                .catch(error => {
                    console.log(error.message);
                });
            })
            
            
    }
    
    
    return (
        <div>
            <div className="hero  bg-[#19c7c7]">
                <div className="hero-content flex-col bg-[#00000033]">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-white">Register</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-50">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo" className="input input-bordered" required />
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
                                <div>
                                    {
                                        registerError && <p className="text-red-300">{registerError}</p>
                                    }
                                </div>
                            </div>
                            <p>Already have an Account?
                                <span className="text-blue-500 ml-3"><Link to='/login'>Login</Link></span>

                            </p>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-[#8d318a] to-[#19c7c7] text-white">Register</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
    
        </div>
    );
};

export default Register;