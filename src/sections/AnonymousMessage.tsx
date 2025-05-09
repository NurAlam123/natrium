"use client";

import { LoadingSpinner } from "@/components/ui";
import sendMessage from "@/lib/discord-webhook";
import clsx from "clsx";
import { useActionState, useState } from "react";
import toast from "react-hot-toast";

const AnonymousMessage = () => {
  const [characters, setCharacters] = useState(0);
  const [overLimit, setOverLimit] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [userMessage, setUserMessage] = useState("");
  const charactersLimit = 999;

  const countCharacters = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textLength = event.target.value.length;
    if (textLength > 0) setDisableButton(false);
    else setDisableButton(true);

    if (textLength >= charactersLimit - 20) setOverLimit(true);
    else setOverLimit(false);

    setCharacters(textLength);
  };

  const handleSendBtn = async (_: object, formData: FormData) => {
    setDisableButton(true);
    const message = formData.get("message") as string;
    setUserMessage(message);

    const send = await sendMessage(message);
    if (send) {
      toast.success("Your message successfully delivered. 😃");
      setUserMessage("");
      setCharacters(0);
    } else {
      toast.error("Oops... Couldn't deliver your message. Sorry! Try again 😞");
      setDisableButton(false);
    }
  };

  const [, formAction, isPending] = useActionState(handleSendBtn, false);

  return (
    <>
      {/* Anonymous message */}
      <div className="flex justify-center items-center h-dvh">
        <div className="space-y-4">
          <p className="font-normal text-daisy">
            Want to send anonymous message?{" "}
          </p>
          <form action={formAction}>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                className="w-full max-w-xs outline-none p-5 rounded-lg border-2 border-dark-3 bg-dark-1 text-daisy h-[300px] resize-none focus:border-blue transition-colors duration-300"
                placeholder="Write it down here..."
                defaultValue={userMessage}
                maxLength={charactersLimit}
                onChange={(event) => countCharacters(event)}
              ></textarea>

              <p
                className={clsx(
                  "absolute bottom-[13px] right-[8px] text-[0.86rem] opacity-60",
                  overLimit && "text-[#d90423]",
                )}
              >
                {characters}/{charactersLimit}
              </p>
            </div>
            <button
              className={clsx(
                "button rounded-full w-full mt-2 transition duration-700",
                isPending
                  ? "disabled:cursor-progress"
                  : "disabled:cursor-not-allowed",
              )}
              type="submit"
              disabled={disableButton || (isPending && true)}
            >
              {isPending ? <LoadingSpinner size={25} /> : "Send"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AnonymousMessage;
