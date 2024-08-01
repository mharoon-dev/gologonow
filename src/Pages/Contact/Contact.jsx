import "./contact.css"
import Navbar from "../../Components/Navbar/Navbar.jsx"
import ContactBanner from "../../Components/ContactBanner/ContactBanner.jsx"
import Footer from "../../Components/Footer/Footer.jsx"
import ContactForm from "../../Components/ContactForm/ContactForm.jsx"

const Contact = () => {
  return (
    <>
    <Navbar />
    <ContactBanner />
    <ContactForm />
    <Footer />
    </>
  )
}

export default Contact