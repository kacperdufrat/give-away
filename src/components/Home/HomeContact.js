import React, {useState} from "react";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import "../../scss/HomeContact.scss";

const HomeContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    return (
        <section className="contact">
            <div className="contact-form">
                <h2>Skontaktuj się z nami</h2>
                <Decoration />
                <form>
                    <div className="inputs">
                        <div className="input">
                            <label for="name">Wpisz swoje imię</label>
                            <input placeholder="Krzysztof" type="text" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className="input">
                            <label for="email">Wpisz swój email</label>
                            <input placeholder="abc@xyz.pl" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="textarea">
                        <label for="text">Wpisz swoją wiadomość</label>
                        <textarea value={text} placeholder="Lorem ipsum" onChange={e => setText(e.target.value)}/>
                    </div>
                    <button>Wyślij</button>
                </form>
            </div>
            <footer>
                <span>Copyright by CodersLab</span>
                <div className="icons-container">
                    <FaFacebookSquare />
                    <FaInstagram />
                </div>
            </footer>
        </section>
    )
}

export default HomeContact;