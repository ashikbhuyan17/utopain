import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import IMG from '../../images/IMG.png'
import './Registration.css'

const Registration = () => {
    const { register, formState: { errors }, handleSubmit, watch } = useForm({});
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = async (data, e) => {
        console.log(data);
        // alert(JSON.stringify(data));
        e.target.reset();
    };
    return (
        <div class="login-form-container">
            <div class="login-form">
                <div class="text-center">
                    <div>
                        <h2 class="welcome-header">
                            <span class="utho-pain">Uto</span><span class="pain">Pain</span>
                            <br />Welcome Back
                    </h2>
                    </div>
                    <div class="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="input-first-last-name">
                                <input class="input-field input-first-name"  {...register("first_name", { required: true })} type="text" name="first_name" id=""
                                    placeholder="First Name" required />
                                <input class="input-field" type="text"  {...register("last_name", { required: true })} name="last_name" id="" placeholder="Last Name" />
                            </div>
                            <input class="input-field" type="email" {...register("email", { required: true })} name="email" id="" placeholder="Email" />
                            <input class="input-field" type="text" {...register("username", { required: true })} name="username" id="" placeholder="Username" />
                            {/* <input class="input-field" type="password" name="" id="" placeholder="Password" /> */}


                            <input class="input-field input-first-name"
                                name="password"
                                type="password"
                                {...register("password", {
                                    required: true, minLength: {
                                        value: 8,
                                        message: "Password must have at least 8 characters"
                                    }
                                })}
                                placeholder="Password" />
                            {errors.password && <p>{errors.password.message}</p>}

                            <input class="input-field" type="text"
                                name="password_repeat"
                                type="password"
                                placeholder="confirm password"
                                {...register("password_repeat", {
                                    required: true, validate: value =>
                                        value === password.current || "The passwords do not match"
                                })} />
                            {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

                            <div class="checkbox-forget">
                                <div>
                                    <input type="checkbox" id="newUser" required />
                                    <label for="newUser" class="px-2">Accepts all terms and condition</label>
                                </div>
                                <div>
                                    <Link>Forget password</Link>
                                </div>
                            </div>
                            <button type="submit" class="button login">Login</button>
                        </form>
                        {/* <div class="">
                            <p class="social-media-caption">Or Log In With Social Media</p>
                            <button class="facebook-btn button">
                                <span class="px-2">
                                    <i class="fab fa-facebook-f"></i>
                                </span>
                            Login with Facebook
                            	</button>
                            <button class="google button">
                                <span class="px-2"><i class="fab fa-google"></i></span> Login
                                    with Google
                            </button>
                        </div> */}
                    </div>
                </div>
                <img src={IMG} class="bg" alt="description" />
            </div>

            <div class="register-container">
                <div class="caption">
                    <h3>Have an Account?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                    deserunt <br />temporibus magni
                </p>
                    <Link to="/login"><button>Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;