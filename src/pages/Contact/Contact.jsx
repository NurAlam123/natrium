import CursorBlur from '../../components/shared/CursorBlur/CursorBlur';
import GoBackButton from '../../components/shared/ui/GoBackButton/GoBackButton';
import LoadingSpinner from '../../components/shared/ui/LoadingSpinner/LoadingSpinner';
import './Contact.css'
import sendMessage from "../../utils/discord-webhook"
import { useState } from "react"

const Contact = () => {

    const [characters, setCharacters] = useState(0);
    const [overLimit, setOverLimit] = useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const [loading, setLoading] = useState(false)
    const charactersLimit = 3000;


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
        // if (send) {

        // }
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
                        Discord
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