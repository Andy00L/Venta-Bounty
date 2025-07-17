# Solana Wallet Comparison 🪙

A living reference for all wallets supporting Solana, detailing their key features and Solana Pay QR-code compatibility.

---

## 📊 What’s Inside

- ✅ **Wallet Inventory** (mobile, browser-extension, desktop, hardware, custodial)
- ✅ **Feature Matrix:**
  - Platforms (iOS, Android, Chrome, etc.)
  - Custody Model (Self-custody, MPC, Custodial)
  - In-app DEX swap
  - NFT gallery
  - In-app staking
  - Fiat on/off ramps
  - Push-notification support
  - Solana Pay QR reader (Yes / Partial / No)
- ✅ **Version tested + Date of testing**
- ✅ **Wallet logos included**
- ✅ **Interactive Web App** (filter by features, view wallet details)
- ✅ **Raw data** (in-code JSON, downloadable from the web app)

---

## 🚀 Live Demo

🌐 Frontend Web App: https://venta-bounty.vercel.app/

🎥 Video Walkthrough: https://www.loom.com/share/c57c25a55e0c4c379ecec3f9075d2a77?sid=555b3b59-6124-4a4a-bac5-1114e43aacae

---

## 📁 Data

- All wallet data is stored in `ventabounty/components/walletfinder.tsx` as a JSON array.
- Each wallet entry includes name, website, logo, features, version tested, and notes.
- **You can also download the latest wallet data as a JSON file directly from the web app using the 'Download Raw JSON' button.**
- **Evidence (screenshots/recordings) showing verified Solana Pay behaviour is stored in the `ventabounty/SolanaPaybehaviour/` folder.**

---

## 🔄 Update Instructions

1. Open `ventabounty/components/walletfinder.tsx`
