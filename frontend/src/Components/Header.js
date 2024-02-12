import { React, useContext, useState } from 'react'
import { Link , useHistory } from 'react-router-dom'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import { AuthContext } from '../Context/AuthContext';

function Header() {

    const { user } = useContext(AuthContext)

    const navigate = useHistory();

    const [menutoggle, setMenutoggle] = useState(false)

    const { dispatch } = useContext(AuthContext)

    const Toggle = () => {
        setMenutoggle(!menutoggle)
    }

    const closeMenu = () => {
        setMenutoggle(false)
    }

    return (
        <div className="header">
            <div className="logo-nav">
            <Link to='/'>
                <a href="#home">Librasys</a>
            </Link>
            </div>
            <div className='nav-right'>
                <input className='search-input' type='text' placeholder='Search a Book'/>
                <ul className={menutoggle ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/'>
                            <a href="#home">Home</a>
                        </Link>
                    </li>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/books'>
                        <a href="#books">Books</a>
                        </Link>
                    </li>
                    {  !user ? <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/signin'>
                        <a href='signin'>SignIn</a>
                        </Link>
                    </li> 
                    :
                    <li className="option" onClick={() => { closeMenu() }}>
                        <a onClick={()=> { dispatch({type: "LOGOUT"}); navigate.push("/")}} >SignOut</a>
                    </li> 
                    }
                    
                </ul>
            </div>

            <div className="mobile-menu" onClick={() => { Toggle() }}>
                {menutoggle ? (
                    <ClearIcon className="menu-icon" style={{ fontSize: 40 }} />
                ) : (
                    <MenuIcon className="menu-icon" style={{ fontSize: 40 }} />
                )}
            </div>
        </div>
    )
}

export default Header
