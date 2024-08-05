import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About.jsx";
import Home from "./Pages/Home/Home.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Services from "./Pages/Services/Services.jsx";
import Process from "./Pages/Process/Process.jsx";
import SingleService from "./Pages/SingleService/SingleService.jsx";
import Web from "./Pages/Web/Web.jsx";
import SingleApp from "./Pages/SingleApp/SingleApp.jsx";
import Branding from "./Pages/Branding/Branding.jsx";
import Content from "./Pages/Content/Content.jsx";
import Privacy from "./Pages/Privacy/Privacy.jsx";
import Terms from "./Pages/Terms/Terms.jsx";
import Seo from "./Pages/Seo/Seo.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop .jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/uiux" element={<SingleService />} />
          <Route path="/services/web" element={<Web />} />
          <Route path="/services/app" element={<SingleApp />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/content" element={<Content />} />
          <Route path="/services/seo" element={<Seo />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/process" element={<Process />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
