import './header.css';

function Header(){
    return(
        <>
        <nav className='header-container'>
            <h1 className='logo'>
                AnimeList
            </h1>
            <div className="input-wrapper">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" name="searchbar" id="search-bar" placeholder='Type your anime here'/>
            </div>
            
        </nav>
        </>
    );
}

export default Header;