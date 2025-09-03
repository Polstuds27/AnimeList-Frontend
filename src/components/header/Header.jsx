import { useEffect, useState } from 'react';
import './header.css';

function Header({setAnimeInfo, setSearchOn, setCurrentPage, isHome=false, setLoading}){

    const [animeName, setAnimeName] = useState("");
        async function search(){
        if(!animeName.trim()){
            alert("Empty searches not allowed");
            return;
        } 

        setLoading(true);
        try{
            const response = await fetch(`https://anime-list-backend-two.vercel.app/api/animes/search/${animeName}`);
            const data = await response.json();
            setAnimeInfo(data);
            setLoading(false);
        }catch(err){
            setLoading(false);
            console.error(err);
        }
    }

    useEffect(()=>{
        if(isHome){
            if(animeName===""){
            setSearchOn(false);
            setCurrentPage(1);
            } 
            else setSearchOn(true);
        }else{
            return;
        }
        
    },[animeName])

        return(
        <>
        <nav className='header-container'>
            <h1 className='logo'>
                AnimeList
            </h1>
             {isHome && (
                <div className="input-wrapper">
                    <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
                    <input
                    type="text"
                    name="searchbar"
                    id="search-bar"
                    placeholder="Type your anime here"
                    value={animeName}
                    onChange={(e) => {
                        const value = e.target.value;
                        setAnimeName(value);
                        setSearchOn(value.trim() !== ""); 
                    }}
                    onKeyDown={(e) => {
                        const value = e.target.value;
                        if (e.key === "Enter") search();
                        else if (e.key === "Backspace") setSearchOn(value.trim() !== "");
                    }}
                    />
                </div>
                )}
        </nav>
        </>
    );
    
}

export default Header;