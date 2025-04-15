import { Provider } from "@/components/ui/provider"; // existing Provider
import Navbar from "../components/ui/navbar-notSignedIn"; // Correct path to Navbar
import '../styles/globals.css';
import HeroSection from "../components/ui/welcome"; // Import the Welcome component

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Navbar />
      <HeroSection /> 
      <Component {...pageProps} />
    </Provider>
  );
}
