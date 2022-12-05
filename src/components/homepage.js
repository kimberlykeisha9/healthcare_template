import Home from "./home";
// import Menu from "./menu";
import About from "./about";
import FooterMenu from "./footer_menu";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import background1 from "../assets/background_1.png";
import background2 from "../assets/background_2.png";
import background3 from "../assets/background_3.png";
import background4 from "../assets/background_4.png";
import Solutions from "./solutions";
import Awards from "./awards";
import Articles from "./articles";
import Contact from "./contact";

function HomePage() {
  return (
    <div>
      {/* <Menu /> */}
      <div>
        <Home background={background1} />
        <About background={background2} />
        <Solutions />
        <Awards background={background3} />
        <Articles />
        <Contact background={background4} />
        <Footer />
      </div>
      {/* <FooterMenu /> */}
    </div>
  );
}

export default HomePage;
