"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const SkillsCard = ({ item }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(item.progValue), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mb-4 flex flex-col gap-1">
      <div className="flex items-center justify-between ">
        <h5 className="text-sm font-semibold text-muted-foreground capitalize">
          {item.name}
        </h5>
        <small className="  text-[10px] text-primary font-bold  ">
          {item.progValue}%
        </small>
      </div>
      <Progress className="h-[6px]" value={progress} />
    </div>
  );
};

export default SkillsCard;
