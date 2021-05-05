import React from 'react';
import './Login.css'
import IMG1 from '../../images/IMG.png'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="login-form-container">
            <div className="login-form">
                <div className="text-center">
                    <div>
                        <h2 className="welcome-header">
                            <span className="utho-pain">Uto</span><span className="pain">Pain</span>
                            <br />Welcome Back
                        </h2>
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="input-field" {...register("email", { required: true })} name="email" placeholder="Email/Username" required />

                            <input className="input-field" type="password" {...register("password", { required: true })} name="password" id="" placeholder="Password" required />
                            <div className="checkbox-forget">
                                <div>
                                    <input type="checkbox" id="newUser" />
                                    <label className="px-2" for="newUser">Keep Me Login</label>
                                </div>
                                <div>
                                    <Link>Forget password</Link>
                                </div>
                            </div>
                            <button type="submit" name="submit" className="button login">Login</button>
                        </form>
                        <div className="">
                            <p className="social-media-caption">Or Log In With Social Media</p>
                            <button className="facebook-btn button">
                                <span className="px-2">
                                    <i className="fab fa-facebook-f"></i>
                                </span>
                                Login with Facebook
                            </button>
                            <button className="google button">
                                <span className="px-2"><i className="fab fa-google"></i></span> Login
                                with Google
                            </button>
                        </div>
                    </div>
                </div>
                <img src={IMG1} className="bg" alt="description" />
            </div>

            <div className="register-container">
                <div className="caption">
                    <h3>New Here?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          deserunt <br />temporibus magni
        </p>
                    <Link to="/registration"><button>Register</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;