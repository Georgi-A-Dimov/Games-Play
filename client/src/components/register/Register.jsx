import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

import useForm from "../../hooks/useForm";


const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        confirmPassword: '',
    });

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" onChange={onChange} value={values.email}/>

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" onChange={onChange} value={values.password}/>

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" onChange={onChange} value={values.confirmPassword}/>

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    )
};

export default Register;