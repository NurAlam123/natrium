import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const MessageLink = () => {
  return (
    <>
      <p className="font-semibold text-start mt-6 max-w-xs">
        Want to send an anonymous message?
      </p>
      <Link href="/message" className="flex text-blue w-fit relative">
        Click here
        <span className="inline-block absolute left-full top-0 -translate-y-1">
          <ArrowUpRight className="size-4" />
        </span>
      </Link>
    </>
  );
};

export default MessageLink;
