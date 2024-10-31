"use client";
import { projects } from "@/constants/Projects";
import SectionsTitle from "../SectionsTitle";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Eye, Github, Layout, PaintBucket, Tags } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { useState } from "react";

const Project = () => {
  let [img, setImg] = useState();
  return (
    <section id="projects" className="pb-20">
      <div className="text-center mb-10">
        <SectionsTitle title={"Projects"} desc={"My recent projects"} />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger onClick={() => setImg(item.images[0])} asChild>
              <Image
                src={item.banner}
                width={1200}
                height={400}
                alt="img banner"
                className="w-full h-[300px] object-cover rounded-lg cursor-pointer ring-4 ring-primary ring-offset-4 ring-offset-primary-20"
              />
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 m-0  sm:max-w-5xl h-[80vh] overflow-y-auto bg-card rounded-lg shadow-lg">
              <DialogHeader className="bg-card p-6 flex justify-between items-center border-b">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <button className="text-gray-500 hover:text-red-500"></button>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-4 p-6">
                <div className="flex flex-col gap-4">
                  <Image
                    src={img ? img : item.banner}
                    width={500}
                    height={500}
                    alt="img banner"
                    className="w-full border-2 h-[300px] object-fill rounded-lg"
                  />
                  <div className="flex items-center gap-2 overflow-x-auto">
                    {item.images.map((img, index) => (
                      <Image
                        onClick={() => setImg(img)}
                        key={index}
                        src={img}
                        width={100}
                        height={100}
                        className="object-cover p-2 border-2  ring-offset-2 rounded-lg w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] cursor-pointer"
                        alt="img thumbnail"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col  gap-4">
                  <p className="border-b pb-6 text-muted-foreground capitalize">
                    {item.desc}
                  </p>
                  <div className="flex border-b pb-6 flex-col w-[90%] sm:w-[60%] gap-3">
                    <div className="flex items-center justify-between ">
                      <h4 className="flex items-center text-muted-foreground  text-sm gap-1 ">
                        <PaintBucket />
                        Published:
                      </h4>
                      <span className="text-sm font-bold">{item.time}</span>
                    </div>
                    <div className="flex items-center justify-between  ">
                      <h4 className="flex items-center text-muted-foreground  text-sm gap-1 ">
                        <Layout />
                        Layout:
                      </h4>
                      <span className=" text-sm capitalize font-bold">
                        {item.responsive}
                      </span>
                    </div>
                    <div className="flex items-center justify-between  ">
                      <h4 className="flex items-center text-muted-foreground  text-sm gap-1 ">
                        <Tags />
                        Tags:
                      </h4>
                      <div className="flex items-center flex-wrap gap-1">
                        {item.techs.map((item) => (
                          <span className="border rounded-md p-1 text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center flex-wrap  gap-4 mt-4">
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 sm:px-6 text-white py-2 bg-primary flex items-center gap-1 rounded-lg`}>
                      <Eye className="size-4" />
                      View Demo
                    </a>
                    <a
                      href={item.sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 sm:px-6 py-[10px] text-white bg-background flex items-center gap-1 rounded-lg`}>
                      <Github className="size-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default Project;
