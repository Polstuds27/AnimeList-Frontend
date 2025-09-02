import './sidebar.css';
import { NavLink } from 'react-router-dom';

function SideBar(){

    return(
        <>
                <nav className='sidebar-container'>
                    <ul>
                        <li>
                            <NavLink to="/"className='link'>
                                <span>
                                    Home
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/About"className='link'>
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