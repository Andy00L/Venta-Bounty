import Footer from "@/components/footer";
import Header from "@/components/header";
import Walletfinder from "@/components/walletfinder";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-deep">
      <Header />
      <main>
        <Walletfinder />
      </main>
      <Footer />
    </div>
  );
}
