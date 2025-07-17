import { ArrowRight, Globe, Monitor, Shield, Smartphone } from "lucide-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { Button } from "./ui/button";

interface WalletCardProps {
  wallet: {
    id: string;
    name: string;
    description: string;
    icon: string;
    features: string[];
    image_url?: string | StaticImageData;
    website_url?: string;
    platforms?: string[];
    custody_model?: string;
  };
}

const getFeatureIcon = (feature: string) => {
  switch (feature) {
    case "Hardware":
      return <Shield className="h-4 w-4" />;
    case "Mobile":
      return <Smartphone className="h-4 w-4" />;
    case "Desktop":
      return <Monitor className="h-4 w-4" />;
    case "Web Browser":
      return <Globe className="h-4 w-4" />;
    default:
      return null;
  }
};

export default function walletcard({ wallet }: WalletCardProps) {
  return (
    <div
      className="bg-gradient-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-purple transition-all duration-300 group"
      style={{
        transition:
          "transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.045)";
        e.currentTarget.style.boxShadow = "0 0 80px hsl(270 100% 65% / 0.7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Wallet Header */}
      <div className="flex items-center gap-4 mb-4">
        {/* Logo */}
        {wallet.image_url ? (
          <Image
            src={wallet.image_url}
            alt={wallet.name + " logo"}
            width={48}
            height={48}
            className="h-12 w-12 rounded-lg bg-card border border-border object-contain"
            unoptimized={typeof wallet.image_url !== "string"}
          />
        ) : (
          <div className="text-3xl">{wallet.icon}</div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary-glow transition-colors truncate">
              {wallet.website_url ? (
                <a
                  href={wallet.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {wallet.name}
                </a>
              ) : (
                wallet.name
              )}
            </h3>
            {wallet.custody_model && (
              <span className="ml-2 px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-border">
                {wallet.custody_model}
              </span>
            )}
          </div>
          {/* Platforms */}
          {wallet.platforms && wallet.platforms.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {wallet.platforms.map((platform, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-muted/40 text-xs text-muted-foreground border border-border"
                >
                  {platform}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Description */}
      {wallet.description && (
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {wallet.description}
        </p>
      )}
      {/* Features */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {wallet.features.slice(0, 4).map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary-glow rounded-md text-xs"
            >
              {getFeatureIcon(feature)}
              <span className="truncate">{feature}</span>
            </div>
          ))}
          {wallet.features.length > 4 && (
            <div className="px-2 py-1 bg-muted/20 text-muted-foreground rounded-md text-xs">
              +{wallet.features.length - 4} more
            </div>
          )}
        </div>
      </div>
      {/* View Details Button */}
      <Button
        variant="ghost"
        className="w-full justify-between text-primary-glow hover:text-primary hover:bg-primary/10 group/button"
      >
        <span>View Details</span>
        <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}
