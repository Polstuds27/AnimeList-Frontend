import './anime-info.css';
import SideBar from "../sidebar/SideBar";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../loader/Loader'
function AnimeInfo(){

    const {id} = useParams();

    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [animeInfo, setAnimeInfo] = useState([]);

    useEffect(()=>{
        fetch(`https://anime-list-backend-two.vercel.app/api/animes/info/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setAnimeInfo(data);
            setLoading(false);
        })
        .catch(err =>{
            console.error(err);
            setError(err);
            setLoading(false);
        })    
    },[id])


    function getEmbedUrl(url) {
    if (!url) return null;
    const videoIdMatch = url.match(/v=([^&]+)/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
    }

    return(
        <>
            <Header isHome={false}/>
            <main className="body-container">
                <SideBar />

                {loading ? (<Loader/>)
                :
                error ?
                (<h2 style={{ color: "red" }}>{error}</h2>)
                :
                <>
                     <div className="info-container">
                    <div className="visual-section">
                        <h1>{animeInfo.title}</h1>
                            <div className="media-section">
                                <div className="img-section">
                                <img src={animeInfo.image}/* poster*/ alt="" />
                            </div>
                            <div className="video-section">
                                {animeInfo.trailer ? (
                                    <iframe
                                    src={getEmbedUrl(animeInfo.trailer)} 
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    ></iframe>
                                ) : (
                                    <p style={{ color: "white" }}>No trailer available</p>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    <div className="details-section">
                        <h1>Show Details</h1>    

                        <h4><b>Original Title:</b> {animeInfo.title}</h4>
                        <h4><b>English Title:</b> {animeInfo.title_english}</h4>
                        <h4><b>Type:</b> {animeInfo.episodes===null || animeInfo.episodes===1 ? 
                        "Movie" 
                        : 
                        "Series"}
                        </h4>
                        <h4><b>Episodes:</b> {animeInfo.episodes}</h4>
                        <h4><b>Score:</b> {animeInfo.score}</h4>
                        <h4><b>Rank:</b> {animeInfo.rank}</h4>
                        <h4><b>Genre:</b> {animeInfo.genres}</h4>
                        <br />
                        <h4><b>AI Summarization of synopsis</b> </h4>
                        <h5>powered by <i><a href="https://aventiq.ai/">AventIQ-AI | T5</a></i></h5>
                        <div className="synopsis-section">
                            <p>
                                {animeInfo.summary}
                            </p>
                        </div>
                    </div>
                    <div className="reviews-section">   
                    </div>
                </div>
                </> 
                }
            </main>
            <Footer/>
        </>
    );
}

export default AnimeInfo;