import React, {useState} from "react";
import "../../scss/Login.scss";
import {NavLink} from 'react-router-dom';
import Navigation from "../Home/HomeNavigation";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);


    const handleSubmit = e => {
        e.preventDefault();
    
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const tempErrors = [];
            
        if (!re.test(email)) {
            tempErrors.push("Podany email jest nieprawidłowy");
        } else {
            tempErrors.push("");
        }
        if (password.length < 6 ) {
            tempErrors.push("Podane hasło jest za krótkie!");
        } else {
            tempErrors.push("");
        }
        
        if (errors[0] === "" && errors[1] === ""){
            setEmail("");
            setPassword("");
        }

        setErrors(tempErrors);
    }

    return (
        <section className="login">
            <div className="menu">
                <div className="menu-log">
                    <NavLink to="/logowanie">Zaloguj</NavLink>
                    <NavLink to="/rejestracja">Załóż konto</NavLink>
                </div>
                <Navigation />
            </div>
            <div className="login-panel">
                <h2>Zaloguj się</h2>
                <Decoration className="login-decoration"/>
                <div className="login-form">
                    <form>
                            <label htmlFor="email">Email</label>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <span className="error">{errors[0]}</span>
                            <label htmlFor="password">Hasło</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                            <span className="error">{errors[1]}</span>
                    </form>
                </div>
                <div className="login-buttons">
                    <button><NavLink to="/rejestracja">Załóż konto</NavLink></button>
                    <button onClick={handleSubmit}>Zaloguj się</button>
                </div>
            </div>
        </section>
    )
}

export default Login;