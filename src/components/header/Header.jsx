import { useEffect, useState } from 'react';
import './header.css';

function Header({setAnimeInfo, setSearchOn, setCurrentPage, isHome=false}){

    const [animeName, setAnimeName] = useState("");
        async function search(){
        if(!animeName.trim()){
            alert("Empty searches not allowed");
            return;
        } 

        try{
            const response = await fetch(`http://localhost:3000/animes/search/${animeName}`);
            const data = await response.json();
            setAnimeInfo(data);
        }catch(err){
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