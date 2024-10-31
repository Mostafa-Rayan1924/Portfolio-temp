import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navigation/Navbar";
import MobileNav from "@/components/Navigation/MobileNav";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Portfolio",
  description: "A modern portfolio website with Next.js and Tailwind CSS.",
  icons: [
    {
      href: "/logo.svg",
      url: "/logo.svg",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={cn(" text-foreground bg-background overflow-x-hidden ")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          <MobileNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
