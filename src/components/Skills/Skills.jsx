import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabs } from "@/constants/SkillsTabs";
import SectionsTitle from "../SectionsTitle";
import { Backend, frontend, Tools } from "@/constants/SkillsProgress";
import SkillsCard from "../SkillsCard";
const Skills = () => {
  return (
    <section id="skills" className="relative  ">
      <div className="text-center mb-10">
        <SectionsTitle title={"Skills"} desc={"My technical proficiency"} />
      </div>
      <div className="absolute right-0 w-[150px] h-[150px] sm:w-[220px] bottom-0 sm:h-[220px]    opacity-50 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20 " />
      <Tabs
        defaultValue={tabs[0].value}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div className="grid col-span-3  md:col-span-1 ">
          <TabsList className="flex flex-row items-center justify-center md:flex-col gap-1 w-full h-fit ">
            {tabs.map((item) => {
              return (
                <TabsTrigger
                  key={item.id}
                  className="w-full"
                  value={item.value}>
                  {item.value}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>
        <div className="grid col-span-3 md:col-span-2 border border-primary rounded-lg   ">
          <div className="flex flex-col col-span-3 gap-2 w-full ">
            <h3 className="text-primary font-bold text-xl px-4 py-2 border-b border-primary">
              Skills
            </h3>
            <div className="px-4 py-2">
              <TabsContent value="Frontend">
                {frontend.map((item) => {
                  return <SkillsCard item={item} />;
                })}
              </TabsContent>
              <TabsContent value="Backend">
                {Backend.map((item) => {
                  return <SkillsCard item={item} />;
                })}
              </TabsContent>
              <TabsContent value="Tools">
                {Tools.map((item) => {
                  return <SkillsCard item={item} />;
                })}
              </TabsContent>
            </div>
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default Skills;
