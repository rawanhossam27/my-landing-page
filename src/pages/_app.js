import { Provider } from "@/components/ui/provider"; // existing Provider
import Navbar from "../components/ui/navbar-notSignedIn"; // Correct path to Navbar
import '../styles/globals.css';
import HeroSection from "../components/ui/welcome"; // Import the Welcome component
import MostRelevant from "../components/ui/most-relevant"; // Import the most-relevant component
import Discover from '../components/ui/discover';  // Import the most-relevant component

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Navbar />
      <HeroSection /> 
      <MostRelevant/>
      <Discover/>
      <Component {...pageProps} />
    </Provider>
  );
}
