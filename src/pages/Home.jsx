import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/Home.css"
import "../styles/Footer.css"
import { homeSection } from "../data/HomeSection"
import parser from "html-react-parser"
import { coursesSection } from "../data/CoursesSection"
import { tutorsSection, tutorsList } from "../data/TutorsSection"
import { partnersSection, partnersList } from "../data/PartnersSection"
import Tutors from "../components/Tutors"
import Partners from "../components/Partners"
import Contact from "../components/Contact"
import { contactsSection } from "../data/ContacstSection"

function Home() {
    return (
        <>
            <Navbar />
            {/* Home */}
            <div className="wrapper">
                <section id="home">
                    <img src={homeSection.image} />
                    <div className="kolom">
                        {parser(homeSection.content)}
                    </div>
                </section>

                {/* Online course */}
                <section id="courses">
                    <div className="kolom">
                        {parser(coursesSection.content)}
                    </div>
                    <img src={coursesSection.image} />
                </section>

                {/* Tutors */}
                <section id="tutors">
                    <div className="tengah">
                        <div className="kolom">
                            {parser(tutorsSection.content)}
                        </div>
                        <Tutors tutorsList={tutorsList} />
                    </div>
                </section>

                {/* Partners */}
                <section id="partners">
                    <div className="tengah">
                        <div className="kolom">
                            {parser(partnersSection.content)}
                        </div>
                        <Partners partnersList={partnersList} />
                    </div>
                </section>
            </div>
            <Contact contactsSection={contactsSection} />
            <Footer />
        </>
    )
}

export default Home