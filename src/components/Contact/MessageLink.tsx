import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const MessageLink = () => {
  return (
    <>
      <p className="font-semibold text-start mt-6 md:mt-8 max-w-sm">
        Want to send an anonymous message?
        <Link href="/message" className="flex text-blue w-fit relative">
          Send here!
          <span className="inline-block absolute left-full top-0 -translate-y-1">
            <ArrowUpRight className="size-4" />
          </span>
        </Link>
      </p>
    </>
  );
};

export default MessageLink;
