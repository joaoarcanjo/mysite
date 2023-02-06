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
        menuState?.setState(false)
    }

    const NavElement = ({navTo, text}: { navTo: string, text: string }) => {

        const className = 
            isOpen ? "font-nunito font-extrabold text-3xl text-fifthColor hover:animate-pulse" 
            : "font-nunito font-extrabold text-2xl text-fifthColor hover:animate-pulse"

        return <span onClick={showNavbar}><NavLink className={className} to={navTo}>{text}</NavLink></span>
    }

    function NavElements() {

        return (
            <>
                <NavElement key={'about'} navTo='' text='About'/>
                <NavElement key={'hobbies'} navTo='hobbies' text='Hobbies'/>
                <NavElement key={'qualifications'} navTo='qualifications' text='Qualifications'/>
            </>
        )
    }

    return (
        <header className="bg-whiteColor">
            <NavLink className="logo" to="">
                <span className="font-solitreo text-fourthColor">João Arcanjo</span>
            </NavLink>
            <div className="flex md:flex md:flex-grow flex-row justify-end space-x-1">
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
            </div>
        </header>
    )
}