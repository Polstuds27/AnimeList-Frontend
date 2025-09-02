import './home.css';
import SideBar from "../sidebar/SideBar";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AnimeCard from "../anime-card/AnimeCard";
import { useEffect, useState } from 'react';
function Home(){
    
    const [animeInfo, setAnimeInfo] = useState([]);
     const [loading, setLoading] = useState(true); // 👈 add loading state
    const [error, setError] = useState(null); // 👈 optional error state

    useEffect(()=>{
        fetch("http://localhost:3000/animes")
        .then((res)=>res.json())
        .then((data)=>{
            setAnimeInfo(data);
            setLoading(false);

        })
        .catch((err)=>{
            console.error(err);
            setError("Error loading!");
            setLoading(false);   
        });
    },[])

    if (loading) {
        return <h2 style={{color:"white"}}>Loading anime list...</h2>;
    }

    if (error) {
        return <h2 style={{color:"red"}}>{error}</h2>;
    }

    return(
        <>
            <Header/>
            <main className="body-container">
                <SideBar />
                <div className="home-container">
                    {animeInfo.map((a)=>(
                        <AnimeCard 
                        key={a.id}
                        image={a.image} 
                        title={a.title} 
                        title_english = {a.title_english}
                        episodes = {a.episodes}
                        score = {a.score}
                        rank = {a.rank}
                        trailer = {a.trailer}
                        genres = {a.genres}
                        />
                    ))}
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Home;