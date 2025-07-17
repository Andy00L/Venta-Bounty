import { Github, MessageCircle, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  Solana: [
    "Grants",
    "Break Solana",
    "Media Kit",
    "Careers",
    "Disclaimer",
    "Privacy Policy",
  ],
  "Get Connected": ["Blog", "Newsletter"],
};

const socialLinks = [
  {
    icon: Youtube,
    href: "https://github.com/Andy00L/Venta-Bounty",
    label: "YouTube",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
  {
    icon: Github,
    href: "https://github.com/Andy00L/Venta-Bounty",
    label: "GitHub",
  },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: MessageCircle, href: "#", label: "Telegram" },
];

export default function footer() {
  return (
    <footer className="bg-background-deep border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* GitHub Logo Button */}
        <div className="flex justify-center mb-4">
          <a
            href="https://github.com/Andy00L/Venta-Bounty"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="inline-flex items-center justify-center rounded-full p-2 hover:bg-muted transition-colors"
          >
            <Github className="h-7 w-7 text-muted-foreground hover:text-primary" />
          </a>
        </div>
        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground mt-8">
          Open Source
        </div>
      </div>
    </footer>
  );
}
