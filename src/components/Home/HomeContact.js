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

    
    return (
        <section className="contact">
            <div className="contact-form">
                <h2>Skontaktuj się z nami</h2>
                <Decoration className="contact-decoration"/>
                <form>
                    <div className="inputs">
                        <div className="input">
                            <label htmlFor="name">Wpisz swoje imię</label>
                            <input placeholder="Krzysztof" type="text" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className="input">
                            <label htmlFor="email">Wpisz swój email</label>
                            <input placeholder="abc@xyz.pl" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="textarea">
                        <label htmlFor="text">Wpisz swoją wiadomość</label>
                        <textarea value={text} 
                        placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. Aenean massa. 
                        Cum sociis natoque penatibus et magnis dis parturient montes" 
                        onChange={e => setText(e.target.value)}/>
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