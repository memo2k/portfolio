import React from 'react';
import "./footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer name='contact' className="footer">
        <div className="shell">
            <div className="footer__inner">
                <div className="footer__form">
                    <div className="form">
                        <div className="form__subheading">
                            <h2>Send me a message!</h2>
                        </div>

                        <div className="form__heading">
                            <h1>Feel free to contact me by submitting the form below</h1>
                        </div>

                        <div className="form__body">
                            <div className="form__row">
                                <div className="form__field">
                                    <input type="text" placeholder='Name' id="name" />
                                </div>

                                <div className="form__field">
                                    <input type="email" placeholder='Email' id='email' />
                                </div>
                            </div>

                            <div className="form__row">
                                <div className="form__field">
                                    <textarea name="" id="" cols="100" rows="10" placeholder='Enter your message'></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="form__actions">
                            <Link className="btn btn--red">Send</Link>
                        </div>
                    </div>
                </div>

                <div className="footer__nav">
                    <div className="footer__copyright">
                        <p>&copy; Mehmed dev 2023</p>
                    </div>

                    <div className="footer__socials">
                        <nav>
                            <ul>
                                <Link to="/"><i class="fa-brands fa-github fa-xl"></i></Link>
                                <Link to="/"><i class="fa-brands fa-linkedin fa-xl"></i></Link>
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