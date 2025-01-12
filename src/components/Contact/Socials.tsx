import { contacts } from "@/constants";

const Socials = () => {
  return (
    <>
      <h3 className="font-semibold text-2xl">Socials</h3>
      <div className="flex gap-2 text-[2.3rem] items-center text-secondary">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.link}
            target="_blank"
            className="group relative"
          >
            <div className="hover:blur-sm">
              <contact.icon />
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
