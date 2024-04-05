import CursorBlur from '../../components/shared/CursorBlur/CursorBlur';
import GoBackButton from '../../components/shared/ui/GoBackButton/GoBackButton';
import LoadingSpinner from '../../components/shared/ui/LoadingSpinner/LoadingSpinner';
import './Contact.css';
import sendMessage from "../../utils/discord-webhook";
import { useState } from "react";
import { toast } from 'react-toastify';
import { FaDiscord, FaEnvelope, FaFacebook, FaLinkedin } from 'react-icons/fa';


const Contact = () => {

    const [characters, setCharacters] = useState(0);
    const [overLimit, setOverLimit] = useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const [loading, setLoading] = useState(false)
    const charactersLimit = 999;


    const countCharacters = (event) => {
        const textLength = event.target.value.length;
        textLength > 0 ? setDisableButton(false) : setDisableButton(true);
        if (textLength >= charactersLimit - 20) setOverLimit(true);
        else setOverLimit(false);
        setCharacters(textLength);
    }

    const sendBtn = async () => {
        const message_area = document.querySelector('.note-area');
        const message = message_area.value;
        setLoading(true)
        setDisableButton(true)
        const send = await sendMessage(message);
        if (send) {
            toast("Your message successfully delivered. 😃")
        } else {
            toast.error("Oops... Couldn't deliver your message. Sorry! 😞",)
        }
        setLoading(false)
        setDisableButton(false)
    }
    return (
        <main className='contact-main-container'>
            <CursorBlur />
            <div className="back-btn-space">
                <GoBackButton />
            </div>
            <section className="contact-container">
                <div>
                    <div>
                        <h2>Contact</h2>
                        <div className='contact-links'>
                            <a className='contact-link tooltip-parent' href='mailto:nuralam.rsc@gmail.com' target='_blank'>
                                <div><FaEnvelope /></div>
                                <span className='tooltip'>Email</span>
                            </a>
                            <a className='contact-link tooltip-parent' href='https://www.linkedin.com/in/nur-alam404' target='_blank'>
                                <div><FaLinkedin /></div>
                                <span className='tooltip'>LinkedIn</span>
                            </a>
                            <a className='contact-link tooltip-parent' href='https://www.facebook.com/nur.0.alam' target='_blank'>
                                <div><FaFacebook /></div>
                                <span className='tooltip'>Facebook</span>
                            </a>
                            <a className='contact-link tooltip-parent'
                                onClick={
                                    () => {
                                        window.navigator.clipboard.writeText('Nur Alam#9289');
                                        toast("Discord username copied.")
                                    }
                                }
                            >
                                <div><FaDiscord /></div>
                                <span className='tooltip'>Discord</span>
                            </a>
                        </div>
                    </div>
                    <div className='note-main-container'>
                        <p className="bold">Want to send anonymous message?</p>
                        <div className="note-container">
                            <textarea
                                className='note-area'
                                placeholder="Write it down here..."
                                maxLength={charactersLimit}
                                onChange={event => countCharacters(event)}
                            >
                            </textarea>
                            <p className={`character-counter ${overLimit && 'warning'}`}>{characters}/{charactersLimit}</p>
                        </div>
                        <button className="btn btn-pill contact-btn-send" onClick={sendBtn} disabled={disableButton}>
                            {loading ?
                                <LoadingSpinner size={25} /> :
                                "Send"
                            }
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact