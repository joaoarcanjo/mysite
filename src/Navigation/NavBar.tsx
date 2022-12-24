import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"
import { useMenuState } from "./OpenMenu";

export default function NavBar() {

    const navRef = useRef<HTMLDivElement>(null);
    const menuState = useMenuState();

    const [isOpen, setOpen] = useState(false)

    const showNavbar = () => {
        navRef.current?.classList.toggle("responsive_nav")
        setOpen(false)
    }

    const NavElement = ({navTo, text}: { navTo: string, text: string }) => {
        return <span onClick={showNavbar}><NavLink to={navTo}>{text}</NavLink></span>
    }

    function NavElements() {

        return (
            <>
                <NavElement key={'about'} navTo='' text='About'/>
                <NavElement key={'hobbies'} navTo='hobbies' text='Hobbies'/>
                <NavElement key={'school'} navTo='school' text='School'/>
            </>
        )
    }

    return (
        <header>
            <NavLink className="logo" to="">
                <span>João Arcanjo</span>
            </NavLink>
            <nav ref={navRef}>
                <NavElements/>
                {isOpen &&
                    <button onClick={() => {setOpen(false); menuState?.setState(false)}}  className='nav-btn nav-close-btn'>
                        <FaTimes onClick={showNavbar}/>
                    </button>
                }
            </nav>
            {!isOpen &&
                <button onClick={() => {setOpen(true); menuState?.setState(true)}} className='nav-btn'>
                    <FaBars onClick={showNavbar}/>
                </button>
            }
        </header>
    )
}