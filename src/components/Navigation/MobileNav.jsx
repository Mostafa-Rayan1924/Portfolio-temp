import { navLinks } from "@/constants/NavLinks";
const MobileNav = () => {
  return (
    <header className="flex md:hidden fixed bottom-0 left-0 z-50 border-t border-border py-4 w-full bg-background">
      <div className="container ">
        <nav className="flex items-center gap-4 justify-evenly ">
          {navLinks.map((link) => (
            <a
              href={`#${link.title}`}
              key={link.id}
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 ">
              <div className="flex  items-center flex-col gap-y-[2px]">
                <span>{link.icon}</span>
                <span className="capitalize">{link.title}</span>
              </div>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default MobileNav;
