// pages/_app.js
import { Provider } from "@/components/ui/provider";
import { useRouter } from "next/router";
import Navbar from "../components/ui/navbar-notSignedIn";
import SignedInNavbar from "../components/ui/navbar-signedIn"; // Import the signed-in navbar
import '../styles/globals.css';
import HeroSection from "../components/ui/welcome";
import MostRelevant from "../components/ui/most-relevant";
import Discover from '../components/ui/discover';
import Why from '../components/ui/why';
import Trending from '../components/ui/trending';
import Ready from '../components/ui/ready';
// import Footer from '../components/ui/footer'; // Remove the Footer import here

export default function App({ Component, pageProps }) {
 const router = useRouter();

 // List of standalone routes (pages that should not show homepage stuff)
 const isStandalonePage = [
   "/signup-page",
   "/login-page",
 ].includes(router.pathname);

 // Check if the user is on the signed-in page
 const isSignedInPage = router.pathname === "/signedIn-page";

 return (
   <Provider>
     {/* Show different navbar and home sections based on the route */}
     {router.pathname === "/" ? (
       <>
         <Navbar />
         <HeroSection />
         <MostRelevant />
         <Discover />
         <Why />
         <Trending />
         <Ready />
         {/* <Footer />  We'll include Footer in pages/index.js */}
       </>
     ) : isSignedInPage ? (
       <>
         <SignedInNavbar />
         <HeroSection />
         <MostRelevant />
         <Discover />
         <Why />
         <Trending />
         <Ready />
         {/* <Footer /> We'll include Footer in pages/signedIn-page.js */}
       </>
     ) : null}

     {/* Always show the actual page component */}
     <Component {...pageProps} />
   </Provider>
 );
}