import './home.css';
import SideBar from "../sidebar/SideBar";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AnimeCard from "../anime-card/AnimeCard";
import { useEffect, useState } from 'react';
import PaginationBar from '../pagination-bar/PaginationBar';
function Home(){
    
    const [animeInfo, setAnimeInfo] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    const [currentPage, setCurrentPage] = useState(1);
    const [searchOn, setSearchOn] = useState(false);


    function fetchData(page){
        fetch(`https://anime-list-backend-two.vercel.app/api/animes/${page}`)
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
    }

    const handleHomeClick = () => {
    setSearchOn(false);
    setCurrentPage(1);
    fetchPage(1);
    };

    useEffect(()=>{
        fetchData(currentPage);
    },[currentPage]);

    return(
        <>
            <Header 
            setAnimeInfo={setAnimeInfo} 
            setSearchOn={setSearchOn}
            setCurrentPage={setCurrentPage}
            isHome={true}
            />
            <main className="body-container">
                <SideBar 
                onHomeClick={handleHomeClick}/>
                <div className="home-container">
                    {animeInfo.map((a)=>(
                        <AnimeCard 
                        key={a.id}
                        id={a.id}
                        image={a.image} 
                        title={a.title} 
                        />
                    ))}

                    <PaginationBar
                    currentPage={currentPage}
                    totalPage={100}
                    setCurrentPage={setCurrentPage}
                    searchOn={searchOn}
                    />
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Home;