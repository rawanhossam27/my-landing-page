// pages/_app.js
import { Provider } from "@/components/ui/provider";
import { useRouter } from "next/router";
import Navbar from "../components/ui/navbar-notSignedIn";
import '../styles/globals.css';
import HeroSection from "../components/ui/welcome";
import MostRelevant from "../components/ui/most-relevant";
import Discover from '../components/ui/discover';
import Why from '../components/ui/why';
import Trending from '../components/ui/trending';
import Ready from '../components/ui/ready';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // List of standalone routes (pages that should not show homepage stuff)
  const isStandalonePage = router.pathname === "/signup-page" || router.pathname === "/login-page"; // Added "/login-page"

  return (
    <Provider>
      {/* Only show navbar/home sections if NOT a standalone page */}
      {!isStandalonePage && (
        <>
          <Navbar />
          <HeroSection />
          <MostRelevant />
          <Discover />
          <Why />
          <Trending />
          <Ready />
        </>
      )}

      {/* Always show the actual page component */}
      <Component {...pageProps} />
    </Provider>
  );
}
