import React, { useRef } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import IMG from '../../images/IMG.png';
import './Register.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Registration = () => {
    const [notification, setNotification] = React.useState("")
    const [value, setValue] = React.useState()
    console.log(value);
    const history = useHistory()
    const { register, formState: { errors }, handleSubmit, watch } = useForm({});
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = async (data, e) => {
        console.log(data);
        const fullName = data.first_name + " " + data.last_name
        let phone = "";
        // console.log(phone.slice(1, Infinity));
        // console.log(data.phone[0] == "0");
        // if (data.phone[0] == "0") {
        //     phone = data.phone.slice(1, Infinity)
        //     console.log(phone);
        // } else {
        //     phone = data.phone
        //     console.log(phone);
        // }
        const userInfo = {
            name: fullName,
            email: data.email,
            username: data.username,
            referralId: parseInt(data.referralId),
            phoneNo: value,
            password: data.password
        }
        console.log(userInfo);

        // const url = `https://utopain-backend-test.herokuapp.com/register/`
        // fetch('https://utopain-backend-test.herokuapp.com/api/users/register', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(userInfo)
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         toast.success(`${data.massage}` + " successful !!", {
        //             position: "top-right",
        //             autoClose: 2000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //         });
        //         setNotification(data)
        //         // history.replace("/login");
        //     });

        // e.target.reset();
        // history.push('/registration')

    };
    // console.log(value);

    // if (notification.massage) {
    //     setTimeout(() => {
    //         history.push('/login');
    //     }, 1000);
    // }

    return (
        <div className="login-form-container">
            <div className="login-form">
                <div className="text-center">
                    <div>
                        <h2 className="welcome-header">
                            <span className="uto-pain">Uto</span><span className="pain">Pain</span>
                            <br />Create An Account
                    </h2>
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-first-last-name">
                                <input className="input-field input-first-name"  {...register("first_name", { required: true })} type="text" name="first_name" id=""
                                    placeholder="First Name" required />
                                <input className="input-field" type="text"  {...register("last_name", { required: true })} name="last_name" id="" placeholder="Last Name" />
                            </div>
                            <input className="input-field" type="email" {...register("email", { required: true })} name="email" id="" placeholder="Email" />
                            <input className="input-field" type="text" {...register("username", { required: true })} name="username" id="" placeholder="Username" />

                            <input className="input-field" type="text"  {...register("referralId", { required: true })} name="referralId" id="" placeholder="Referral Id" />
                            <div className="select-wrapper input-field">
                                <PhoneInput
                                    international
                                    defaultCountry="BD"
                                    value={value}
                                    onChange={setValue}
                                    name="phone"

                                />
                            </div>
                            
                        

                            <input className="input-field input-first-name"
                                name="password"
                                type="password"
                                {...register("password", {
                                    required: true, minLength: {
                                        value: 8,
                                        message: "Password must have at least 8 characters"
                                    }
                                })}
                                placeholder="Password" />
                            {errors.password && <p class="error-message">{errors.password.message}</p>}

                            <input className="input-field" type="text"
                                name="password_repeat"
                                type="password"
                                placeholder="confirm password"
                                {...register("password_repeat", {
                                    required: true, validate: value =>
                                        value === password.current || "The passwords do not match"
                                })} />
                            {errors.password_repeat && <p className="error-message">{errors.password_repeat.message}</p>}

                            <div className="checkbox-forget">
                                <div>
                                    <input type="checkbox" id="newUser" required />
                                    <label for="newUser" className="px-2">Accepts all terms and condition</label>
                                </div>
                            </div>
                            <button type="submit" className="button register">Register</button>
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
                <img src={IMG} className="bg" alt="description" />
            </div>

            <div className="register-container">
                <div className="caption">
                    <h3>Have an Account?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                    deserunt <br />temporibus magni
                </p>
                    <Link to="/login"><button>Login</button></Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Registration;