const SectionsTitle = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h2 className="text-primary font-bold">{title}</h2>
      <p className=" capitalize text-2xl font-semibold">{desc}</p>
    </div>
  );
};

export default SectionsTitle;
