import { contacts } from "@/constants";

const Socials = () => {
  return (
    <>
      <p className="font-medium text-2xl md:text-3xl xl:text-4xl">Socials</p>
      <div className="flex gap-2 text-4xl items-center text-secondary">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.link}
            target="_blank"
            className="group relative"
          >
            <div className="hover:blur-sm">
              <span className="sr-only">{contact.name}</span>
              <contact.icon focusable={false} aria-hidden />
            </div>
            <span className="tooltip group-hover:inline-block group-hover:absolute -translate-x-1/2 left-1/2 mt-2">
              {contact.name}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Socials;
