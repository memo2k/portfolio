import React, { useRef } from 'react';
import "./footer.scss";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tccldcb', 'template_wkmfo22', form.current, 'Tf_taS-SPX-Y4yESa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }
    return (
        <footer name='contact' className="footer">
            <div className="shell">
                <div className="footer__inner">
                    <div className="footer__form">
                        <form className="form" onSubmit={sendEmail} ref={form}>
                            <div className="form__subheading">
                                <h2>Send me a message!</h2>
                            </div>

                            <div className="form__heading">
                                <h1>Feel free to contact me by submitting the form below</h1>
                            </div>

                            <div className="form__body">
                                <div className="form__row">
                                    <div className="form__field">
                                        <input name="user_name" type="text" placeholder='Name' id="name" required />
                                    </div>

                                    <div className="form__field">
                                        <input name="user_email" type="email" placeholder='Email' id='email' required />
                                    </div>
                                </div>

                                <div className="form__row">
                                    <div className="form__field">
                                        <textarea name="message" id="" cols="100" rows="10" placeholder='Enter your message' required ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="form__actions">
                                <button className="btn btn--transparent">Send</button>
                            </div>
                        </form>
                    </div>

                    <div className="footer__nav">
                        <div className="footer__copyright">
                            <p>&copy; Mehmed dev 2023</p>
                        </div>

                        <div className="footer__socials">
                            <nav>
                                <ul>
                                    <Link to="https://github.com/memo2k" target='_blank'><i class="fa-brands fa-github fa-xl"></i></Link>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer