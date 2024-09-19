import CursorBlur from '../../components/shared/CursorBlur/CursorBlur';
import GoBackButton from '../../components/shared/ui/GoBackButton/GoBackButton';
import LoadingSpinner from '../../components/shared/ui/LoadingSpinner/LoadingSpinner';
import sendMessage from '../../utils/discord-webhook';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaDiscord, FaEnvelope, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [characters, setCharacters] = useState(0);
  const [overLimit, setOverLimit] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const charactersLimit = 999;

  const countCharacters = (event) => {
    const textLength = event.target.value.length;
    textLength > 0 ? setDisableButton(false) : setDisableButton(true);
    if (textLength >= charactersLimit - 20) setOverLimit(true);
    else setOverLimit(false);
    setCharacters(textLength);
  };

  const sendBtn = async () => {
    const message_area = document.querySelector('#message');
    const message = message_area.value;
    setLoading(true);
    setDisableButton(true);
    const send = await sendMessage(message);
    if (send) {
      toast('Your message successfully delivered. 😃');
    } else {
      toast.error("Oops... Couldn't deliver your message. Sorry! Try again 😞");
    }
    setLoading(false);
    setDisableButton(false);
  };
  return (
    <>
      <CursorBlur />
      <section className="mx-4 my-2">
        <GoBackButton />
        <div className="flex justify-center items-center mt-2">
          <div>
            {/* Contact Links */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Contact</h2>
              <div className="flex gap-2 text-[2.5rem] items-center text-secondary">
                <a
                  href="mailto:nuralam.rsc@gmail.com"
                  target="_blank"
                  className="group"
                >
                  <div className="hover:blur-sm">
                    <FaEnvelope />
                  </div>
                  <span className="tooltip group-hover:inline-block group-hover:absolute">
                    Email
                  </span>
                </a>
                <a
                  className="group"
                  href="https://www.linkedin.com/in/nur-alam404"
                  target="_blank"
                >
                  <div className="hover:blur-sm">
                    <FaLinkedin />
                  </div>
                  <span className="tooltip group-hover:inline-block group-hover:absolute">
                    LinkedIn
                  </span>
                </a>
                <a
                  className="group"
                  href="https://www.facebook.com/nur.0.alam"
                  target="_blank"
                >
                  <div className="hover:blur-sm">
                    <FaFacebook />
                  </div>
                  <span className="tooltip group-hover:inline-block group-hover:absolute">
                    Facebook
                  </span>
                </a>
                <a
                  className="group cursor-pointer"
                  onClick={() => {
                    window.navigator.clipboard.writeText('Nur Alam#9289');
                    toast('Discord username copied.');
                  }}
                >
                  <div className="hover:blur-sm">
                    <FaDiscord />
                  </div>
                  <span className="tooltip group-hover:inline-block group-hover:absolute">
                    Discord
                  </span>
                </a>
              </div>
            </div>

            {/* Anonymous message */}
            <div>
              <p className="font-light mb-2">Want to send anonymous message?</p>
              <div className="relative">
                <textarea
                  id="message"
                  className="outline-none p-5 rounded-lg border-2 border-dark-3 bg-dark-1 text-gray h-[300px] resize-none focus:border-blue transition-colors duration-300"
                  placeholder="Write it down here..."
                  maxLength={charactersLimit}
                  onChange={(event) => countCharacters(event)}
                ></textarea>
                <p
                  className={`absolute bottom-[13px] right-[8px] text-[0.86rem] font-light ${
                    overLimit ? 'text-[#d90423]' : 'text-gray opacity-[0.2]'
                  }`}
                >
                  {characters}/{charactersLimit}
                </p>
              </div>
              <button
                className="button rounded-full w-full"
                onClick={sendBtn}
                disabled={disableButton}
              >
                {loading ? <LoadingSpinner size={25} /> : 'Send'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
