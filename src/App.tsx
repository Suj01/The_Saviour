import "./App.css";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import { IDO } from "./pages/IDO";

import Intro from "./pages/Intro";
import Roadmap from "./pages/Roadmap";
import Tokenomics from "./pages/Tokenomics";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <AllRoutes/> */}
      <Home/>
      <Intro/>
      <IDO/>
      <Tokenomics/>
      <Roadmap/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
