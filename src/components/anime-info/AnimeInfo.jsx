import './anime-info.css';
import SideBar from "../sidebar/SideBar";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function AnimeInfo(props){
    return(
        <>
            <Header/>
            <main className="body-container">
                <SideBar />
                <div className="info-container">
                    <div className="visual-section">
                        <h1>The Last Stop</h1>
                            <div className="media-section">
                                <div className="img-section">
                                <img src="https://cdn.venngage.com/template/thumbnail/small/3138e0fa-0900-44aa-9937-38f31601fcbf.webp" alt="" />
                            </div>
                            <div className="video-section">
                                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                    
                    <div className="details-section">
                        <h1>Show Details</h1>    

                        <h4><b>Original Title:</b> The Last Show</h4>
                        <h4><b>English Title:</b> The Last Show</h4>
                        <h4><b>Type:</b> The Last Show</h4>
                        <h4><b>Episodes:</b> The Last Show</h4>
                        <h4><b>Score:</b> The Last Show</h4>
                        <h4><b>Rank:</b> The Last Show</h4>
                        <h4><b>Genre:</b> The Last Show</h4>
                        <br />
                        <h4><b>AI Summarization of synopsis</b> </h4>
                        <h5>powered by <i><a href="https://aventiq.ai/">AventIQ-AI | T5</a></i></h5>
                        <div className="synopsis-section">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem eius veritatis ut molestiae voluptatibus odio possimus beatae totam, distinctio odit in, dolorem ratione maxime saepe ex iste? Soluta, aliquid beatae?
                            </p>
                        </div>

                    </div>
                    
                    <div className="reviews-section">   

                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default AnimeInfo;