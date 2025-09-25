import Header from "./components/Header";
import SocialCTA from "./components/SocialCTA";
import LogoShowcase from "./components/LogoShowcase";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 dark:from-gray-950 dark:to-gray-900">
      <div className="mx-auto max-w-5xl px-6">
        <Header />

        <main className="space-y-10">
          <SocialCTA />
          <LogoShowcase />
        </main>

        <Footer />
      </div>
    </div>
  );
}
