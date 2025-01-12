import { Sodium } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <div className="opacity-25">
        <Sodium className="scale-[4] !fixed" />
      </div>
      <section className="h-screen flex flex-col items-center justify-center relative">
        <div className="relative">
          <div className="text-center flex flex-col">
            <span className="text-blue inline-block text-6xl">
              <strong>404</strong>
            </span>
            <span className="text-gray inline-block text-3xl">
              Page Not Found
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
