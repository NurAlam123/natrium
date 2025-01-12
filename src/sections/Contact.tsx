import { FadeInView } from "@/components/animation/layout";
import { MessageLink, Socials } from "@/components/Contact";

const Contact = () => {
  return (
    <section id="contact" className="flex justify-center relative mx-4 py-16">
      <FadeInView>
        <h2 className="mb-4">Contact</h2>
        <div className="space-y-4 mx-4">
          <div>
            <p className="text-lg font-semibold">Got an idea?</p>
            <p>
              <b className="text-daisy">OH GREAT!</b> Let&apos;s discuss about
              it.
            </p>
            <p>
              <strong>nuralam.rsc@gmail.com</strong>
            </p>
          </div>
          {/* Contact Links */}
          <div className="space-y-4">
            <Socials />
          </div>
          {/* Anonymous Message */}
          <div className="space-y-2 text-lg">
            <MessageLink />
          </div>
        </div>
      </FadeInView>
    </section>
  );
};

export default Contact;
