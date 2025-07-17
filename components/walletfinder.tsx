"use client";
import { X } from "lucide-react";
import type { StaticImageData } from "next/image";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import WalletCard from "./walletcard";
import ottr from "./../public/ottr.webp";
import slope from "./../public/slope.png";

export default function Walletfinder() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filters = [
    "All Wallets",
    "Hardware",
    "Custodial",
    "Non-custodial/Self-custodial",
    "Token Extensions",
    "Blinks and Actions",
    "Solana Pay",
    "Buy Crypto",
    "Sell Crypto",
    "Hold NFTs",
    "Stake SOL",
    "Mobile",
    "Desktop",
    "Web Browser",
  ];

  const WalletData = {
    last_updated: "2025-07-17",
    wallets: [
      {
        name: "Phantom",
        website_url: "https://phantom.app",
        image_url: "/phantom.svg",
        platforms: ["iOS", "Android", "Chrome", "Firefox"],
        custody_model: "Self-custody",
        features: {
          in_app_dex_swap: true,
          nft_gallery: true,
          in_app_staking: true,
          fiat_on_ramp: true,
          fiat_off_ramp: false,
          push_notifications: true,
          solana_pay_qr: "yes",
        },
        version_tested: "24.1.5",
        test_date: "2025-07-10",
        notes: "QR works for standard transfer URLs and custom checkout flows.",
      },
      {
        name: "Solflare",
        website_url: "https://solflare.com",
        image_url: "https://solflare.com/favicon.ico",
        platforms: ["iOS", "Android", "Chrome", "Firefox"],
        custody_model: "Self-custody",
        features: {
          in_app_dex_swap: true,
          nft_gallery: true,
          in_app_staking: true,
          fiat_on_ramp: true,
          fiat_off_ramp: true,
          push_notifications: true,
          solana_pay_qr: "Yes",
        },
        version_tested: "3.2.0",
        test_date: "2025-07-10",
        notes: "Seamless Solana Pay checkout with on-chain receipt display.",
      },
      {
        name: "Backpack",
        website_url: "https://backpack.app",
        image_url: "https://backpack.app/favicon.ico",
        platforms: ["iOS", "Android", "Chrome"],
        custody_model: "Self-custody",
        features: {
          in_app_dex_swap: true,
          nft_gallery: true,
          in_app_staking: false,
          fiat_on_ramp: false,
          fiat_off_ramp: false,
          push_notifications: true,
          solana_pay_qr: "No",
        },
        version_tested: "0.10.150",
        test_date: "2025-07-12",
        notes: "Focus on xNFTs; no QR parsing yet.",
      },
      {
        name: "Glow",
        website_url: "https://glow.app",
        image_url: "https://glow.app/landing/app-icons/purple.png",
        platforms: ["iOS", "Android", "Safari Extension"],
        custody_model: "Self-custody",
        features: {
          in_app_dex_swap: false,
          nft_gallery: true,
          in_app_staking: false,
          fiat_on_ramp: true,
          fiat_off_ramp: true,
          push_notifications: true,
          solana_pay_qr: "Yes",
        },
        version_tested: "2.0.8",
        test_date: "2025-07-11",
        notes: "Full QR flow and Safari wallet connect.",
      },
      {
        name: "Decaf",
        website_url: "https://decaf.so",
        image_url: "/decaf.webp",
        platforms: ["iOS", "Android"],
        custody_model: "Custodial",
        features: {
          in_app_dex_swap: false,
          nft_gallery: false,
          in_app_staking: false,
          fiat_on_ramp: true,
          fiat_off_ramp: true,
          push_notifications: false,
          solana_pay_qr: "Partial",
        },
        version_tested: "0.9.4",
        test_date: "2025-07-11",
        notes: "Redirects to web Solana Pay checkout.",
      },
      {
        name: "Jupiter Wallet",
        website_url: "https://jup.ag",
        image_url: "https://jup.ag/favicon.ico",
        platforms: ["Chrome", "Firefox"],
        custody_model: "Self-custody",
        features: {
          in_app_dex_swap: true,
          nft_gallery: false,
          in_app_staking: false,
          fiat_on_ramp: true,
          fiat_off_ramp: false,
          push_notifications: true,
          solana_pay_qr: "yes",
        },
        version_tested: "1.1.3",
        test_date: "2025-07-12",
        notes:
          "DEX-first UX, QR works for standard transfer URLs and custom checkout flows..",
      },
      {
        name: "Bitget Wallet",
        website_url: "https://web3.bitget.com",
        image_url: "https://web3.bitget.com/favicon.ico",
        platforms: ["iOS", "Android"],
        custody_model: "Custodial",
        features: {
          in_app_dex_swap: true,
          nft_gallery: true,
          in_app_staking: true,
          fiat_on_ramp: true,
          fiat_off_ramp: true,
          push_notifications: true,
          solana_pay_qr: "Yes",
        },
        version_tested: "6.7.0",
        test_date: "2025-07-12",
        notes: "End-to-end QR payment; slower confirmation screen.",
      },
      {
        name: "OKX Wallet",
        website_url: "https://www.okx.com/web3",
        image_url: "https://www.okx.com/favicon.ico",
        platforms: ["iOS", "Android", "Chrome"],
        custody_model: "Custodial",
        features: {
          in_app_dex_swap: true,
          nft_gallery: true,
          in_app_staking: true,
          fiat_on_ramp: true,
          fiat_off_ramp: true,
          push_notifications: true,
          solana_pay_qr: "yes",
        },
        version_tested: "5.8.1",
        test_date: "2025-07-13",
        notes: "QR works for standard transfer URLs and custom checkout flows.",
      },
      {
        name: "Slope",
        website_url: "https://slope.finance",
        image_url: slope,
        platforms: ["iOS", "Android"],
        custody_model: "Self-custody",
        features: {
          in_app_dex_swap: false,
          nft_gallery: false,
          in_app_staking: false,
          fiat_on_ramp: false,
          fiat_off_ramp: false,
          push_notifications: false,
          solana_pay_qr: "No",
        },
        version_tested: "1.3.7",
        test_date: "2025-07-13",
        notes: "No Solana Pay module.",
      },
      {
        name: "Exodus",
        website_url: "https://www.exodus.com",
        image_url: "https://www.exodus.com/favicon.ico",
        platforms: ["iOS", "Android", "Windows", "macOS", "Linux"],
        custody_model: "Self-custody",
        features: {
          in_app_dex_swap: false,
          nft_gallery: false,
          in_app_staking: true,
          fiat_on_ramp: true,
          fiat_off_ramp: true,
          push_notifications: true,
          solana_pay_qr: "No",
        },
        version_tested: "24.3.0",
        test_date: "2025-07-14",
        notes: "Staking and ramps but no QR parsing.",
      },
      {
        name: "TokenPocket",
        website_url: "https://www.tokenpocket.pro",
        image_url: "https://www.tokenpocket.pro/favicon.ico",
        platforms: ["iOS", "Android", "Chrome", "Firefox"],
        custody_model: "Self-custody",
        features: {
          in_app_dex_swap: true,
          nft_gallery: true,
          in_app_staking: false,
          fiat_on_ramp: true,
          fiat_off_ramp: false,
          push_notifications: true,
          solana_pay_qr: "yes",
        },
        version_tested: "5.4.2",
        test_date: "2025-07-15",
        notes: "QR works for standard transfer URLs and custom checkout flows.",
      },
      {
        name: "Guarda Wallet",
        website_url: "https://guarda.com",
        image_url: "/Guarda.svg",
        platforms: ["iOS", "Android", "Chrome", "Firefox", "Windows", "macOS"],
        custody_model: "Self-custody",
        features: {
          in_app_dex_swap: false,
          nft_gallery: true,
          in_app_staking: false,
          fiat_on_ramp: true,
          fiat_off_ramp: false,
          push_notifications: true,
          solana_pay_qr: "No",
        },
        version_tested: "3.8.0",
        test_date: "2025-07-15",
        notes: "No Solana Pay reader.",
      },
      {
        name: "Fuse Wallet",
        website_url: "https://fuse.io",
        image_url: "/fuse.svg",
        platforms: ["Android", "iOS"],
        custody_model: "Self-custody (seed-less 2FA)",
        features: {
          in_app_dex_swap: false,
          nft_gallery: false,
          in_app_staking: false,
          fiat_on_ramp: false,
          fiat_off_ramp: false,
          push_notifications: true,
          solana_pay_qr: "No",
        },
        version_tested: "2.1.0",
        test_date: "2025-07-15",
        notes: "No Solana integration in payments.",
      },
      {
        name: "Cake Wallet",
        website_url: "https://cakewallet.com",
        image_url: "/cakewallet.svg",
        platforms: ["iOS", "Android"],
        custody_model: "Self-custody",
        features: {
          in_app_dex_swap: true,
          nft_gallery: false,
          in_app_staking: false,
          fiat_on_ramp: true,
          fiat_off_ramp: false,
          push_notifications: true,
          solana_pay_qr: "yes",
        },
        version_tested: "4.2.5",
        test_date: "2025-07-15",
        notes:
          "Generates payment links; QR works for standard transfer URLs and custom checkout flows.",
      },
      {
        name: "Coinbase Wallet",
        website_url: "https://www.coinbase.com/wallet",
        image_url: "/coinbase.svg",
        platforms: ["iOS", "Android", "Chrome", "Firefox"],
        custody_model: "Self-custody",
        features: {
          in_app_dex_swap: true,
          nft_gallery: true,
          in_app_staking: false,
          fiat_on_ramp: true,
          fiat_off_ramp: false,
          push_notifications: true,
          solana_pay_qr: "Partial",
        },
        version_tested: "2025.06",
        test_date: "2025-07-15",
        notes: "Handles basic Solana Pay invoices but not reference IDs.",
      },
      {
        name: "Trust Wallet",
        website_url: "https://trustwallet.com",
        image_url: "https://trustwallet.com/favicon.ico",
        platforms: ["iOS", "Android", "Chrome"],
        custody_model: "Self-custody (MPC optional)",
        features: {
          in_app_dex_swap: true,
          nft_gallery: true,
          in_app_staking: true,
          fiat_on_ramp: true,
          fiat_off_ramp: false,
          push_notifications: true,
          solana_pay_qr: "Partial",
        },
        version_tested: "9.2.3",
        test_date: "2025-07-15",
        notes: "Reads QR but opens confirmation in external browser tab.",
      },
      {
        name: "Ledger Live",
        website_url: "https://www.ledger.com",
        image_url: "https://www.ledger.com/favicon.ico",
        platforms: ["Hardware (Bluetooth/USB)"],
        custody_model: "Self-custody (hardware)",
        features: {
          in_app_dex_swap: false,
          nft_gallery: false,
          in_app_staking: true,
          fiat_on_ramp: true,
          fiat_off_ramp: true,
          push_notifications: true,
          solana_pay_qr: "No",
        },
        version_tested: "Live App 2.7",
        test_date: "2025-07-15",
        notes: " no native QR.",
      },
      {
        name: "Trezor Model T",
        website_url: "https://trezor.io",
        image_url: "https://trezor.io/favicon.ico",
        platforms: ["Hardware (USB)"],
        custody_model: "Self-custody (hardware)",
        features: {
          in_app_dex_swap: false,
          nft_gallery: false,
          in_app_staking: false,
          fiat_on_ramp: false,
          fiat_off_ramp: false,
          push_notifications: false,
          solana_pay_qr: "No",
        },
        version_tested: "FW 2.4.4",
        test_date: "2025-07-15",
        notes: "No Solana Pay support; usable via third-party wallets only.",
      },
      {
        name: "SafePal ",
        website_url: "https://www.safepal.com",
        image_url: "https://www.safepal.com/favicon.ico",
        platforms: ["Software"],
        custody_model: "Self-custody (software)",
        features: {
          in_app_dex_swap: true,
          nft_gallery: true,
          in_app_staking: true,
          fiat_on_ramp: true,
          fiat_off_ramp: true,
          push_notifications: false,
          solana_pay_qr: "yes",
        },
        version_tested: "1.0",
        test_date: "2025-07-15",
        notes:
          "QR works for standard transfer URLs bot not custom checkout flows.",
      },
      {
        name: "Tangem Wallet",
        website_url: "https://tangem.com",
        image_url: "https://tangem.com/favicon.ico",
        platforms: ["Hardware (NFC card)", "Mobile App"],
        custody_model: "Self-custody (hardware)",
        features: {
          in_app_dex_swap: false,
          nft_gallery: false,
          in_app_staking: false,
          fiat_on_ramp: true,
          fiat_off_ramp: false,
          push_notifications: false,
          solana_pay_qr: "No",
        },
        version_tested: "Card FW 1.2",
        test_date: "2025-07-15",
        notes: "NFC card—no direct QR scan capability.",
      },
      {
        name: "Ultimate Wallet (sunset)",
        website_url: "https://ultimate.app",
        image_url: "/ultimate.png",
        platforms: ["iOS", "Android"],
        custody_model: "Self-custody",
        features: {
          in_app_dex_swap: true,
          nft_gallery: true,
          in_app_staking: true,
          fiat_on_ramp: false,
          fiat_off_ramp: false,
          push_notifications: true,
          solana_pay_qr: "Yes",
        },
        version_tested: "1.4.9",
        test_date: "2025-05-15",
        notes: "App acquired by Jupiter; still functional but deprecating.",
      },
      {
        name: "Ottr Wallet (sunset)",
        website_url: "https://ottr.finance",
        image_url: ottr,
        platforms: ["iOS", "Android"],
        custody_model: "Custodial (passkey)",
        features: {
          in_app_dex_swap: false,
          nft_gallery: false,
          in_app_staking: true,
          fiat_on_ramp: true,
          fiat_off_ramp: true,
          push_notifications: true,
          solana_pay_qr: "Yes",
        },
        version_tested: "1.58",
        test_date: "2025-02-28",
        notes: "Team joined Worldcoin; service ends Aug 2025.",
      },
      {
        name: "Espresso Cash",
        website_url: "https://espressocash.com",
        image_url: "https://www.espressocash.com/images/Vectors-Wrapper_2.svg",
        platforms: ["iOS", "Android"],
        custody_model: "Custodial",
        features: {
          in_app_dex_swap: true,
          nft_gallery: false,
          in_app_staking: false,
          fiat_on_ramp: true,
          fiat_off_ramp: false,
          push_notifications: true,
          solana_pay_qr: "Partial",
        },
        version_tested: "0.7.3",
        test_date: "2025-06-20",
        notes:
          "QR reader limited to SOL/USDC payments. Does not support complex payments flow",
      },
      {
        name: "Tiplink",
        website_url: "https://tiplink.io",
        image_url: "https://tiplink.io/favicon.ico",
        platforms: ["Web"],
        custody_model: "Custodial (link-based)",
        features: {
          in_app_dex_swap: false,
          nft_gallery: false,
          in_app_staking: false,
          fiat_on_ramp: false,
          fiat_off_ramp: false,
          push_notifications: false,
          solana_pay_qr: "Yes",
        },
        version_tested: "Web build 2025-07-01",
        test_date: "2025-07-15",
        notes: "Generates Solana Pay QR for gift links; reads OK.",
      },
      {
        name: "MathWallet",
        website_url: "https://mathwallet.org",
        image_url: "https://doc.mathwallet.org/images/logo.svg",
        platforms: ["iOS", "Android", "Chrome", "Firefox"],
        custody_model: "Self-custody",
        features: {
          in_app_dex_swap: false,
          nft_gallery: true,
          in_app_staking: false,
          fiat_on_ramp: true,
          fiat_off_ramp: false,
          push_notifications: true,
          solana_pay_qr: "Partial",
        },
        version_tested: "3.5.9",
        test_date: "2025-07-14",
        notes: "Reads QR codes butdoes not support complex payment flow",
      },
      {
        name: "ctrl Wallet",
        website_url: "https://xdefi.io",
        image_url: "/xdefi.svg",
        platforms: ["Chrome", "Firefox", "mobile"],
        custody_model: "Self-custody",
        features: {
          in_app_dex_swap: true,
          nft_gallery: true,
          in_app_staking: false,
          fiat_on_ramp: true,
          fiat_off_ramp: false,
          push_notifications: true,
          solana_pay_qr: "no",
        },
        version_tested: "24.7.6",
        test_date: "2025-07-15",
        notes: "Does not read QR, ",
      },
    ],
  };

  // Define a type for the wallet structure
  type Wallet = (typeof WalletData.wallets)[number] & {
    image_url?: string | StaticImageData;
  };

  const toggleFilter = (filter: string) => {
    if (filter === "All Wallets") {
      setActiveFilters([]);
      return;
    }

    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const resetFilters = () => {
    setActiveFilters([]);
  };

  // Helper to map filters to wallet properties
  const filterWallets = (
    wallets: Wallet[],
    activeFilters: string[]
  ): Wallet[] => {
    if (activeFilters.length === 0) return wallets;
    return wallets.filter((wallet: Wallet) => {
      // Map filter names to wallet properties
      return activeFilters.every((filter: string) => {
        // Check custody model
        if (
          filter === "Custodial" &&
          wallet.custody_model?.toLowerCase().includes("custodial")
        )
          return true;
        if (
          filter === "Non-custodial/Self-custodial" &&
          wallet.custody_model?.toLowerCase().includes("self-custody")
        )
          return true;
        if (
          filter === "Hardware" &&
          wallet.platforms?.some((p: string) =>
            p.toLowerCase().includes("hardware")
          )
        )
          return true;
        if (
          filter === "Mobile" &&
          wallet.platforms?.some(
            (p: string) =>
              p.toLowerCase().includes("ios") ||
              p.toLowerCase().includes("android")
          )
        )
          return true;
        if (
          filter === "Desktop" &&
          wallet.platforms?.some((p: string) =>
            ["windows", "macos", "linux"].includes(p.toLowerCase())
          )
        )
          return true;
        if (
          filter === "Web Browser" &&
          wallet.platforms?.some((p: string) =>
            ["chrome", "firefox", "safari extension"].includes(p.toLowerCase())
          )
        )
          return true;
        // Features
        if (filter === "Hold NFTs" && wallet.features?.nft_gallery) return true;
        if (filter === "Stake SOL" && wallet.features?.in_app_staking)
          return true;
        if (filter === "Buy Crypto" && wallet.features?.fiat_on_ramp)
          return true;
        if (filter === "Sell Crypto" && wallet.features?.fiat_off_ramp)
          return true;
        if (filter === "Token Extensions" && wallet.features?.in_app_dex_swap)
          return true;
        if (
          filter === "Solana Pay" &&
          wallet.features?.solana_pay_qr &&
          wallet.features.solana_pay_qr !== "No"
        )
          return true;
        if (
          filter === "Blinks and Actions" &&
          wallet.features?.push_notifications
        )
          return true;
        // Default: not matched
        return false;
      });
    });
  };

  const filteredWallets = filterWallets(WalletData.wallets, activeFilters);

  // Download handler for raw JSON
  const handleDownloadJSON = () => {
    const blob = new Blob([JSON.stringify(WalletData.wallets, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "solana-wallets.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold  mb-6 tracking-tight">
          <span className="bg-gradient-solana bg-clip-text ">
            Solana Wallet Comparison
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Compare features and find the best Solana wallet for your needs.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={
              (filter === "All Wallets" && activeFilters.length === 0) ||
              activeFilters.includes(filter)
                ? "default"
                : "outline"
            }
            size="sm"
            onClick={() => toggleFilter(filter)}
            className="text-sm"
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Reset Filters Button */}
      {activeFilters.length > 0 && (
        <div className="flex justify-center mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={resetFilters}
            className="text-muted-foreground border-muted-foreground/30 hover:border-primary"
          >
            <X className="h-4 w-4 mr-2" />
            Reset Filters
          </Button>
        </div>
      )}

      {/* Download JSON Button */}
      <div className="flex justify-end mb-4">
        <Button variant="outline" size="sm" onClick={handleDownloadJSON}>
          Download Raw JSON
        </Button>
      </div>

      {/* Results */}
      <div className="min-h-[400px]">
        {filteredWallets.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-6">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                No results found!
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to find more wallets
              </p>
              <Button
                variant="default"
                size="lg"
                onClick={resetFilters}
                className="shadow-purple-intense"
              >
                Reset Filters
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWallets.map((wallet) => {
              // Map features to a string array for display
              const features: string[] = [
                ...(wallet.custody_model?.toLowerCase().includes("custodial")
                  ? ["Custodial"]
                  : []),
                ...(wallet.custody_model?.toLowerCase().includes("self-custody")
                  ? ["Non-custodial/Self-custodial"]
                  : []),
                ...(wallet.platforms?.some((p: string) =>
                  p.toLowerCase().includes("hardware")
                )
                  ? ["Hardware"]
                  : []),
                ...(wallet.platforms?.some(
                  (p: string) =>
                    p.toLowerCase().includes("ios") ||
                    p.toLowerCase().includes("android")
                )
                  ? ["Mobile"]
                  : []),
                ...(wallet.platforms?.some((p: string) =>
                  ["windows", "macos", "linux"].includes(p.toLowerCase())
                )
                  ? ["Desktop"]
                  : []),
                ...(wallet.platforms?.some((p: string) =>
                  ["chrome", "firefox", "safari extension"].includes(
                    p.toLowerCase()
                  )
                )
                  ? ["Web Browser"]
                  : []),
                ...(wallet.features?.nft_gallery ? ["Hold NFTs"] : []),
                ...(wallet.features?.in_app_staking ? ["Stake SOL"] : []),
                ...(wallet.features?.fiat_on_ramp ? ["Buy Crypto"] : []),
                ...(wallet.features?.fiat_off_ramp ? ["Sell Crypto"] : []),
                ...(wallet.features?.in_app_dex_swap
                  ? ["Token Extensions"]
                  : []),
                ...(wallet.features?.solana_pay_qr &&
                wallet.features.solana_pay_qr !== "No"
                  ? ["Solana Pay"]
                  : []),
                ...(wallet.features?.push_notifications
                  ? ["Blinks and Actions"]
                  : []),
              ];
              return (
                <div
                  key={wallet.name}
                  onClick={() => {
                    setSelectedWallet(wallet);
                    setDialogOpen(true);
                  }}
                  className="cursor-pointer"
                >
                  <WalletCard
                    wallet={{
                      id: wallet.website_url,
                      name: wallet.name,
                      description: wallet.notes || "",
                      icon: "",
                      features: features,
                      image_url: wallet.image_url,
                      website_url: wallet.website_url,
                      platforms: wallet.platforms,
                      custody_model: wallet.custody_model,
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* Wallet Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          {selectedWallet && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  {selectedWallet.image_url && (
                    <img
                      src={
                        typeof selectedWallet.image_url === "string"
                          ? selectedWallet.image_url
                          : undefined
                      }
                      alt={selectedWallet.name}
                      className="w-10 h-10 rounded"
                    />
                  )}
                  {selectedWallet.name}
                </DialogTitle>
                <DialogDescription>
                  <a
                    href={selectedWallet.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    {selectedWallet.website_url}
                  </a>
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-2">
                <div>
                  <span className="font-semibold">Platforms:</span>{" "}
                  {selectedWallet.platforms?.join(", ")}
                </div>
                <div>
                  <span className="font-semibold">Custody Model:</span>{" "}
                  {selectedWallet.custody_model}
                </div>
                <div>
                  <span className="font-semibold">Features:</span>{" "}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {Object.entries(selectedWallet.features || {}).map(
                      ([k, v]) => {
                        let badgeClass = "bg-muted text-muted-foreground";
                        let label = String(v);
                        if (
                          v === true ||
                          (typeof v === "string" && v.toLowerCase() === "yes")
                        ) {
                          badgeClass = "bg-green-500 text-white";
                          label = "Yes";
                        } else if (
                          v === false ||
                          (typeof v === "string" && v.toLowerCase() === "no")
                        ) {
                          badgeClass = "bg-red-500 text-white";
                          label = "No";
                        } else if (
                          typeof v === "string" &&
                          v.toLowerCase() === "partial"
                        ) {
                          badgeClass = "bg-yellow-500 text-white";
                          label = "Partial";
                        }
                        return (
                          <Badge key={k} className={"capitalize " + badgeClass}>
                            {k.replace(/_/g, " ")}: {label}
                          </Badge>
                        );
                      }
                    )}
                  </div>
                </div>
                <div>
                  <span className="font-semibold">Version Tested:</span>{" "}
                  {selectedWallet.version_tested}
                </div>
                <div>
                  <span className="font-semibold">Test Date:</span>{" "}
                  {selectedWallet.test_date}
                </div>
                <div>
                  <span className="font-semibold">Notes:</span>{" "}
                  {selectedWallet.notes}
                </div>
              </div>
              <DialogClose asChild>
                <Button variant="outline" className="mt-6 w-full">
                  Close
                </Button>
              </DialogClose>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
