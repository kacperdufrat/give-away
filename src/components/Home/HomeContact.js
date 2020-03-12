import React, {useState} from "react";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import "../../scss/HomeContact.scss";

const HomeContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
    
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const tempErrors = [];
            if ((name.includes(" ") || name.length < 1 )) {
            tempErrors.push("Podane imię jest nieprawidłowe");
            } else {
            tempErrors.push("");
            }
            if (!re.test(email)) {
            tempErrors.push("Podany email jest nieprawidłowy");
            } else {
            tempErrors.push("");
            }
            if (text.length < 120) {
            tempErrors.push("Wiadomość musi mieć co najmniej 120 znaków");
            } else {
            tempErrors.push("");
            }

        setErrors(tempErrors);

        if (tempErrors.length > 0) {
            setErrors(tempErrors);
            return false;
        }

        const message = {
            name,
            email,
            text,
            errors: errors
        };

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify(message),
            headers: {
                "Content-Type": "application/json"
            }
        }).then (response => {
                if (response.ok) {
                    console.log("Succes!");
                    return response.json();
                } else {
                    throw new Error("Błąd sieci!");
                }
            })
            .then(data => {
                if (data.status === "success") {
                    setSuccess(true);
                    setName("");
                    setEmail("");
                    setText("");
                }
            })
            .catch(err => {
                console.log(err);
            });
        }
        

    return (
        <section className="contact">
            <div className="contact-form">
                <h2>Skontaktuj się z nami</h2>
                <Decoration className="contact-decoration"/>
                <span>{success}</span>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <div className="input">
                            <label htmlFor="name">Wpisz swoje imię</label>
                            <input placeholder="Krzysztof" type="text" value={name} onChange={e => setName(e.target.value)}/>
                            <span className="error">{errors[0]}</span>
                        </div>
                        <div className="input">
                            <label htmlFor="email">Wpisz swój email</label>
                            <input placeholder="abc@xyz.pl" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <span className="error">{errors[1]}</span>
                        </div>
                    </div>
                    <div className="textarea">
                        <label htmlFor="text">Wpisz swoją wiadomość</label>
                        <textarea value={text} 
                        placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. Aenean massa. 
                        Cum sociis natoque penatibus et magnis dis parturient montes" 
                        onChange={e => setText(e.target.value)}/>
                        <span className="error">{errors[2]}</span>
                    </div>
                    <button>Wyślij</button>
                </form>
            </div>
            <footer>
                <span>Copyright by CodersLab</span>
                <div className="icons">
                    <img src={Facebook} alt="facebook-icon"/>
                    <img src={Instagram} alt="instagram-icon"/>
                </div>
            </footer>
        </section>
    )
}

export default HomeContact;