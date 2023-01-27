import "./style/About.css"
import { ImLocation } from "react-icons/im";
import { MdEmail, MdSmartphone } from "react-icons/md";
import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi"
import { Footer } from "./components/Footer";
import { useMenuState } from "../Navigation/OpenMenu";

function Contacts() {
    
    return (
        <div className="space-y-5 grid place-items-center">
            <h1 className="pt-3 flex justify-center mb-4 font-nunito font-extrabold text-4xl tracking-tight leading-none text-fifthColor">My Contacts</h1>
            <div className="space-y-2">
                <div className="flex flex-row space-x-2">
                    <ImLocation size={30}></ImLocation> 
                    <p className="font-nunito font-black">Alverca do Ribatejo</p>
                </div>
                <div className="flex flex-row space-x-2">
                    <MdEmail size={30}></MdEmail> 
                    <p className="font-nunito font-black">joaopedro.arcanjo@hotmail.com</p>
                </div>
                <div className="flex flex-row space-x-2">
                    <MdSmartphone size={30}></MdSmartphone> 
                    <p className="font-nunito font-black">(+351) 965536775</p>
                </div>
            </div>
        </div> 
    )
}

function ProjectItem() {

    const [moreInfo, showMoreInfo] = useState(false);
    const menuState = useMenuState();

    return (
        <div className="bg-whiteColor border-2 rounded-md p-2 w-full">
            <div className="flow-root pt-2 mb-2">
                <p className="float-left text-xl font-nunito font-black text-fifthColor">
                    QRreport
                </p>
                {!menuState?.isOpen &&
                    <button className="animate-bounce float-right" onClick={() => showMoreInfo(!moreInfo)}>
                        {!moreInfo && <BiDownArrow size={30}></BiDownArrow>}
                        {moreInfo && <BiUpArrow size={30}></BiUpArrow>}
                    </button>}
            </div>
            {moreInfo &&
            <>
                <hr className="h-px bg-fifthColor"/>
                <div className="pt-4">
                    <p className="mb-3 font-nunito text-md text-justify text-gray-500">
                        This project was developed as a final project for my degree. The objective was to develop a system to make it easier to report anomalies that may occur in a company, using only a telephone and a qrcode that is close to the faulty device.
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
            <h1 className="pt-3 flex justify-center mb-4 font-nunito font-extrabold text-4xl tracking-tight leading-none text-fifthColor">
                My Projects
            </h1>
            <ProjectItem/>
        </div> 
    )
}

function MainInfo() {
    return (
        <div className="space-y-5 px-10 py-5 max-w-md">
            <div className="title space-y-2">
                <h1 className="pt-3 flex justify-center text-5xl font-nunito font-black text-fifthColor hover:text-fourthColor md:text-5xl lg:text-6xl dark:text-white">João Arcanjo</h1>
            </div>
            <div className="bg-black space-y-10">
                <p className="font-nunito text-justify mb-3 text-fifthColor first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-fifthColor first-letter:mr-3 first-letter:float-left">
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
            <div className="space-y-5 grid place-items-center divide-y px-10 py-10">
                <div></div>
                <Projects/>
                <Contacts/>
            </div>
            <Footer/>
        </div>
    )   
}

export default About;