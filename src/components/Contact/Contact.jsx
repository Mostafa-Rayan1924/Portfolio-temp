import { Mail } from "lucide-react";
import SectionsTitle from "../SectionsTitle";
import { buttonVariants } from "../ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative   bg-opacity-80 backdrop-blur-md border rounded-xl p-6 flex flex-col items-center gap-y-6 md:gap-y-12">
      <div className="absolute  w-[50px] h-[50px]   opacity-50 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20 top-0 right-0 " />
      <div className="text-center">
        <SectionsTitle title="get in touch" desc="let's work together" />
      </div>
      <a
        href="mailto:mostafarayan880@gmail.com"
        className={buttonVariants({ size: "lg" })}>
        <Mail className="size-4" />
        <span>si hello</span>
      </a>
    </section>
  );
};

export default Contact;
