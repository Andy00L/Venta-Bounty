import { Menu, Search } from "lucide-react";
import Image from "next/image";
import solanaLogo from "./../public/solanaLogo.webp";
import { Button } from "./ui/button";
const navItems = [
  { name: "Venta Page", link: "https://www.venta.xyz/" },
  { name: "GitHub", link: "https://github.com/Andy00L/Venta-Bounty" },
];

export default function header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* Logo */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.link ? (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-foreground hover:text-primary-glow flex items-center gap-1 px-4 py-2 rounded transition-colors"
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  style={{ textDecoration: "none" }}
                >
                  {item.name}
                </a>
              ) : (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="text-foreground hover:text-primary-glow flex items-center gap-1"
                >
                  {item.name}
                </Button>
              )
            )}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
