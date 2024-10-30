import { navLinks } from "@/constants/NavLinks";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 h-[80px] z-50 w-full bg-background/50 backdrop-blur-md py-6">
      <div className="container flex items-center justify-between flex-wrap">
        <Image src={"/logo.svg"} alt="Logo" width={150} height={40} />
        {/* links on large screen */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className="text-sm text-muted-foreground capitalize hover:text-foreground transition-all duration-300"
              href={`#${link.title}`}>
              {link.title}
            </a>
          ))}
        </nav>
        {/* mode */}
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
