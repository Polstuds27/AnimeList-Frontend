import './about.css';
import SideBar from "../sidebar/SideBar";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function About(){
    return(
        <>
        <Header 
        isHome={false}/>
            <main className="body-container">
                <SideBar/>
                <div className="about-container">
                    <section className='title-section'>
                        <h1 className='title'>
                            About this Website
                        </h1>
                    </section>

                    <section className="description-section">
                        <p className="description">
                            This website is an expirement project that uses web scrapping and jikan API for the anime details and information. This also incorporates the AventIQ-AI | T5 model, this AI model summarizes the synopsis of each anime that the user view.
                        </p>
                    </section>

                </div>
            </main>
        <Footer/>
        </>
    );
}

export default About;