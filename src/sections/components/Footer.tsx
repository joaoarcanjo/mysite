import { BsInstagram, BsGithub, BsInfoCircle } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { ImLocation } from "react-icons/im";

const footerIconsColor = {color: "#CDD7D6"}

export function Footer() {
    return (
        //TODO: colocar todos os links num ficheiro para ser mais facil alterar futuramente.
        <footer className="bg-fifthColor text-center w-full">
            <div className="m-2">
                <a href="https://www.instagram.com/joao__arcanjo/" type="button" style={footerIconsColor} className="rounded-full border-2 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                    <BsInstagram style={footerIconsColor} className="w-5 h-full mx-auto"></BsInstagram>
                </a>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-arcanjo-8b86131b9/" type="button" style={footerIconsColor} className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                    <CiLinkedin style={footerIconsColor} className="w-6 h-full mx-auto"></CiLinkedin>
                </a>
                <a href="https://github.com/joaoarcanjo" type="button" style={footerIconsColor} className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                    <BsGithub style={footerIconsColor} className="w-5 h-full mx-auto"></BsGithub>
                </a>
                <a href="#!" type="button" style={footerIconsColor} className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                    <BsInfoCircle style={footerIconsColor} className="w-5 h-full mx-auto"></BsInfoCircle>
                </a>
                <a href="#!" type="button" style={footerIconsColor} className="rounded-full border-2 w-9 h-9 m-1">
                    <ImLocation style={footerIconsColor} className="w-5 h-full mx-auto"></ImLocation>
                </a>
            </div>
        </footer>
    )
}