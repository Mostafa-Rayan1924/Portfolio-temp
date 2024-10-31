import { socialLinks } from "@/constants/socialLinks";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { ArrowRight, Download, Square } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-4 md:pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex md:flex-row  flex-col items-center gap-8">
        <ul className="flex flex-row md:flex-col gap-3 border rounded-full  md:py-6 md:px-2 px-6 py-2 ">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className=" text-muted-foreground hover:text-primary">
              {link.icon}
            </a>
          ))}
        </ul>
        <div className="space-y-3 ">
          <h2 className="text-3xl text-center md:text-start md:text-4xl lg:text-5xl font-bold capitalize">
            Hi I'm Mostafa
          </h2>
          <h3 className="text-lg  text-center md:text-start text-muted-foreground font-semibold ">
            Front End Developer
          </h3>
          <p className="mx-1 sm:mx-0 text-center md:text-start text-muted-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            repellendus corporis, at cupiditate consectetur quidem minus aut
            atque cumque eveniet voluptatem recusandae itaque inventore
            consequuntur ab vero ratione hic? Modi!
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 py-4">
            <a href="#projects" className={buttonVariants({ size: "lg" })}>
              <span>my works</span>
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#projects"
              className={buttonVariants({ variant: "outline", size: "lg" })}>
              <span>Download CV</span>
              <Download className="size-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex mt-4 relative justify-end">
        <div className="absolute left-1/2 md:left-auto  -translate-x-1/2 md:translate-x-0 w-[270px] h-[270px] sm:w-[320px] sm:h-[320px]    opacity-40 blur  rounded-full bg-primary -z-20 top-0 " />
        <Image
          src={"/my.jpg"}
          width={320}
          height={320}
          className="rounded-full mx-auto md:mx-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] border-2 ring-4 ring-primary ring-offset-4 ring-offset-background object-cover"
          alt={"profile"}
        />
        <Square className="size-6 absolute -top-8 text-muted-foreground rotate-6 right-[180px]" />
        <Square className="size-6 absolute bottom-6 text-muted-foreground rotate-3 right-[280px]" />
        <Square className="size-6 absolute top-1/2  -translate-y-1/2 text-muted-foreground rotate-6 right-4 md:-right-8" />
      </div>
    </section>
  );
};

export default Hero;
