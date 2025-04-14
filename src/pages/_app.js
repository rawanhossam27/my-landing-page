import { Provider } from "@/components/ui/provider";  // existing Provider
import Navbar from "../components/ui/navbar-notSignedIn";  // Correct path to Navbar
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
 return (
 <Provider>
<Navbar />
<Component {...pageProps} />
 </Provider>
 );

}