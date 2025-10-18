import React, { useState } from 'react'
import "../Css/LogIn.css"
import { useNavigate } from "react-router-dom";   // for sucess


const Login = () => {
    const navigate = useNavigate();    // for sucess

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
    })

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    };

    const validate = () => {
        let tempError = {};

        if (!data.name.trim()) {
            tempError.name = "Name is required !!";
        }

        if (!data.email) {
            tempError.email = "Email is required !!";
        }

        if (!data.phone) {
            tempError.phone = "Phone is required !!";
        }

        if (!data.country) {
            tempError.country = "Select country !!";
        }

        return tempError;
    }



    function handelSubmit(event) {
        event.preventDefault();   //like stop Reload, disappears React state
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log(data);
            navigate("/success", { state: { userData: data } }); // ✅ redirect with data // for sucess
        }
    }

    console.log(errors);






    return (
        <>
            <section className="login-page">
              <div className="form-container">
                <h2>LogIn Form</h2>
                <form onSubmit={handelSubmit} className='login-form'>

                    <label >Name:</label>
                    <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} value={data.name}></input>
                    <p className='form-error'>{errors.name}</p>

                    <label >Email:</label>
                    <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} value={data.email}></input>
                    <p className='form-error'>{errors.email}</p>

                    <label >Phone:</label>
                    <input type="text" name="phone" placeholder="Enter your phone" onChange={handleChange} value={data.phone}></input>
                    <p className='form-error'>{errors.phone}</p>

                    <label>Country:</label>
                    <select className='select-country' name="country" onChange={handleChange} value={data.country}>
                        <option value="">Select</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="other">Other</option>
                    </select>
                    <p className='form-error'>{errors.country}</p>

                    <button className='login-btn'>Create Account</button>


                </form>

            </div>

            </section>
            
        </>
    )
}

export default Login