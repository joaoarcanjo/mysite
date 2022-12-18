import "./style/About.css"
import { ImLocation } from "react-icons/im";
import { MdEmail, MdSmartphone } from "react-icons/md";
import { BsInstagram } from "react-icons/bs"
import { CiLinkedin } from "react-icons/ci"
import { BsGithub, BsInfoCircle } from "react-icons/bs"
import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi"

const footerIconsColor = {color: "#CDD7D6"}

function Contacts() {
    
    return (
        <div className="space-y-5 grid place-items-center">
            <h1 className="pt-3 flex justify-center mb-4 text-3xl font-bold tracking-tight leading-none text-fifthColor md:text-5xl lg:text-6xl dark:text-white">My Contacts</h1>
            <div className="space-y-2">
                <div className="flex flex-row space-x-2">
                    <ImLocation size={30}></ImLocation> 
                    <p>Alverca do Ribatejo</p>
                </div>
                <div className="flex flex-row space-x-2">
                    <MdEmail size={30}></MdEmail> 
                    <p>joaopedro.arcanjo@hotmail.com</p>
                </div>
                <div className="flex flex-row space-x-2">
                    <MdSmartphone size={30}></MdSmartphone> 
                    <p>(+351) 965536775</p>
                </div>
            </div>
        </div> 
    )
}

function ProjectItem() {

    const [moreInfo, showMoreInfo] = useState(false)

    return (
        <div className="bg-whiteColor lg:flex border-2 rounded-md p-2 w-full">
            <div className="flow-root pt-2 mb-2">
                <p className="float-left text-xl text-fifthColor">
                    QRreport
                </p>
                <button className="animate-bounce float-right" onClick={() => showMoreInfo(!moreInfo)}>
                    {!moreInfo && <BiDownArrow size={30}></BiDownArrow>}
                    {moreInfo && <BiUpArrow size={30}></BiUpArrow>}
                </button> 
            </div>
            {moreInfo &&
            <>
                <hr className="h-px bg-fifthColor"/>
                <div className="pt-4">
                    <p>This project was developed as a final project for my degree. The objective was to develop a system to make it easier to report anomalies that may occur in a company, using only a telephone and a qrcode that is close to the faulty device.
It includes the development of a database, a backend server and a web application for the user to interact with the system.
                    </p>
                </div>
            </>}
        </div>
    )
}

function Projects() {
    
    return (
        <div className="space-y-3 grid place-items-center w-80">
            <h1 className="pt-3 flex justify-center mb-4 text-3xl font-bold tracking-tight leading-none text-fifthColor md:text-5xl lg:text-6xl dark:text-white">
                My Projects
            </h1>
            <ProjectItem/>
        </div> 
    )
}

function Footer() {
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

function MainInfo() {
    return (
        <div className="space-y-5 px-10 py-5">
            <div className="title space-y-2">
                <h1 className="pt-3 flex justify-center text-5xl font-bold tracking-tight text-fifthColor hover:text-fourthColor md:text-5xl lg:text-6xl dark:text-white">João Arcanjo</h1>
                <p> (Just Arcanjo, for friends) </p>
            </div>
            <div className="bg-black space-y-10">
                <p className="text-justify mb-3 text-fifthColor first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-fifthColor first-letter:mr-3 first-letter:float-left">
                    I'm João Arcanjo, 21 years, from Alverca do Ribatejo, Lisbon, Portugal and actually i am a master degree informatic enginner student.
                </p>
                <img className="border-t-8 border-fifthColor" alt="" src={require('./style/me.jpeg')}/>
            </div>
        </div>
    )
}

function About() {
    return (
        <div className="grid place-items-center h-screen">
            <MainInfo/>
            <div className="space-y-5 divide-y px-10 py-10">
                <div></div>
                <Projects/>
                <Contacts/>
            </div>
            <Footer/>
        </div>
    )   
}

export default About;