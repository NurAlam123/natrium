import GoBackButton from "../../components/shared/ui/GoBackButton/GoBackButton"
import CursorBlur from "../../components/shared/ui/CursorBlur/CursorBlur"

import './Contact.css'
import sendMessage from "../../utils/discord-webhook"

const Contact = () => {
    return (
        <main>
            <CursorBlur />
            <div className="back-btn-space">
                <GoBackButton />
            </div>
            <section className="contact-container">
                <div>
                    <div>
                        Discord
                    </div>
                    <div>
                        <p className="bold">Want to send anonymous message?</p>
                        <textarea className="note-area" placeholder="Write it down here..." />
                        <button className="btn btn-pill contact-btn-send" onClick={() => sendMessage()}>Send</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact