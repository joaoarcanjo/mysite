import "./style/About.css"
import { ImLocation } from "react-icons/im";
import { MdEmail, MdSmartphone } from "react-icons/md";
import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi"
import { Footer } from "../../components/Footer";
import { useMenuState } from "../../Navigation/OpenMenu";


function Skills() {

    return (
        <div className="space-y-3 grid place-items-center">
            <h1 className="pt-3 flex justify-center mb-4 font-nunito font-extrabold text-4xl tracking-tight leading-none text-fifthColor">
                My Skills
            </h1>
            <div className="space-y-3">
                <div>
                    <h3 className="text-left w-full font-nunito">Soft skills:</h3>
                    <ul className="flex flex-wrap gap-2">
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Time management</span>
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Networking</span>
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Responsability</span>
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Teamwork</span>    
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Communication</span>    
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Creativity</span>    
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Adaptability</span>
                    </ul>
                </div>
                <div>
                    <h3 className="text-left w-full font-nunito">Hard skills:</h3>
                    <ul className="flex flex-wrap gap-2">
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Javascript</span>
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Java</span>
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Kotlin</span>
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Assembly</span>
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Postgres</span>  
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">SQLServer</span>  
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Typescript</span>    
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">C</span>   
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">C#</span>     
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">.NET</span>  
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Spring boot</span>
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">React</span>
                        <span className="bg-fourthColor font-nunito text-thirdColor text-sm rounded shadow-xl px-1 hover:text-fourthColor hover:bg-fifthColor transition-colors">Android</span>
                    </ul>
                </div>
            </div>
        </div> 
    )
}

function Contacts() {
    
    return (
        <div className="space-y-5 grid place-items-center">
            <h1 className="pt-3 flex justify-center mb-4 font-nunito font-extrabold text-4xl tracking-tight leading-none text-fifthColor">My Contacts</h1>
            <div className="space-y-2">
                <div className="flex flex-row space-x-2">
                    <ImLocation size={30} color={"green"}></ImLocation> 
                    <p className="font-nunito font-black">Alverca do Ribatejo</p>
                </div>
                <div className="flex flex-row space-x-2">
                    <MdEmail size={30} color={"blue"}></MdEmail> 
                    <p className="font-nunito font-black">joaopedro.arcanjo@hotmail.com</p>
                </div>
                <div className="flex flex-row space-x-2">
                    <MdSmartphone size={30} color={"#222222"}></MdSmartphone> 
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
        <div className="bg-whiteColor border-2 rounded-md p-2 shadow-xl w-full">
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
            <div className="w-full">
                <hr className="h-px bg-fifthColor"/>
                <div className="pt-4">
                    <p className="mb-3 font-nunito text-md text-justify text-gray-500">
                        This project was developed as a final project for my degree. The objective was to develop a system to make it easier to report anomalies that may occur in a company, using only a telephone and a qrcode that is close to the faulty device.
                        It includes the development of a database, a backend server and a web application for the user to interact with the system.
                    </p>
                </div>
            </div>}
        </div>
    )
}

function Projects() {
    
    return (
        <div className="space-y-3 grid place-items-center">
            <h1 className="pt-3 flex justify-center mb-4 font-nunito font-extrabold text-4xl tracking-tight leading-none text-fifthColor">
                My Projects
            </h1>
            <ProjectItem/>
        </div> 
    )
}

function MainInfo() {
    return (
        <div className="space-y-5 py-5">
            <div className="title space-y-2">
                <h1 className="pt-3 flex justify-center text-5xl font-nunito font-black text-fifthColor hover:text-fourthColor md:text-5xl lg:text-6xl dark:text-white">João Arcanjo</h1>
            </div>
            <div className="bg-black space-y-10">
                <p className="font-nunito text-justify mb-3 text-fifthColor first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-fifthColor first-letter:mr-3 first-letter:float-left">
                    I'm João Arcanjo, 21 years, from Alverca do Ribatejo, Lisbon, Portugal and actually i am a master degree informatic enginner student.
                </p>
                <img className="border-t-8 border-fifthColor" alt="" src={require('./images/me.jpeg')}/>
            </div>
        </div>
    )
}

function About() {
    return (
        <div className="h-screen">
            <div className="space-y-5 grid place-items-center py-5 px-10">
                <div className="flex max-w-md laptop:max-w-4xl grid laptop:grid-cols-2 laptop:gap-40">
                    <div className="position-fixed left-0 top-0">
                        <MainInfo/>
                    </div>
                    <div className="space-y-10 w-full divide-y overflow-auto">
                        <div></div>
                        <Projects/>
                        <Contacts/>
                        <Skills/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )   
}

export default About;