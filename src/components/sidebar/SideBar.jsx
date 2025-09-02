import './sidebar.css';
import { NavLink } from 'react-router-dom';

function SideBar({onHomeClick}){

    return(
        <>
                <nav className='sidebar-container'>
                    <ul>
                        <li>
                            <NavLink 
                            to="/"
                            className='link'
                            onClick={onHomeClick}>
                                <i className="fa-solid fa-house icon"></i>
                                <span>
                                    Home
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/About"className='link'>
                            <i className="fa-solid fa-circle-info icon"></i>
                                <span>
                                        About
                                </span>
                            </NavLink>
                        </li>
                    </ul>      
                </nav>
        </>
    );
}

export default SideBar;