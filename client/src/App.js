import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import { useTheme } from "./Context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contacts />
        </div>
        <div className="footer pb-3 ms-3 ">
          <Tada>
            <h5 className="text-center">Made By Ajit sah &copy; 2025</h5>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#049fd9", borderRadius: "100px" }}
      />
    </>
  );
}

export default App;
