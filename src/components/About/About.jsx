import { ArrowRight, Square } from "lucide-react";
import React from "react";
import SectionsTitle from "../SectionsTitle";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const About = () => {
  let date = new Date();
  return (
    <section id="about" className="relative ">
      <div className="absolute -left-20 sm:-left-60 w-[150px] h-[150px] sm:w-[320px] sm:h-[320px]    opacity-50 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20 top-0 " />
      <div className="max-w-[700px] relative p-4 sm:p-6 mx-auto bg-background/90 border border-border rounded-lg">
        <Square className="size-10 absolute -top-5 -z-10 text-muted-foreground opacity-85 rotate-6 right-0" />
        <div className="flex flex-col gap-y-4">
          <SectionsTitle title={"About Me"} desc={"Get to know me"} />
          <p className=" text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            similique alias ullam vel in enim asperiores? Quod vitae porro,
            sequi debitis, earum quia itaque beatae laudantium, delectus nobis
            unde quasi!
          </p>
          <div className="grid grid-cols-2  lg:grid-cols-3 gap-x-4  ">
            <div className="flex flex-col gap-y-1">
              <h4 className="text-4xl font-bold">
                {date.getFullYear() - 2020}+
              </h4>
              <p className=" whitespace-nowrap text-sm sm:text-main  text-muted-foreground">
                Years of experience
              </p>
            </div>
            <div className="flex flex-col gap-y-1">
              <h4 className="text-4xl font-bold">30+</h4>
              <p className="whitespace-nowrap text-sm sm:text-main text-muted-foreground">
                Completed Projects
              </p>
            </div>
            <button
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-4 col-span-3 lg:col-span-1"
              )}>
              <span>Discovre Skills</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
