import "./style/About.css"
import { Footer } from "./components/Footer";
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useMenuState } from "../Navigation/OpenMenu";

function Master() {

    const menuState = useMenuState();
    
    return (
        <div className="bg-whiteColor border-2 rounded-md p-2 w-full divide-y space-y-10">
            <div className="w-full">
                <p className="text-xl text-fifthColor font-bold">
                    Master's degree
                </p>
                <div className="flex justify-start margin:auto space-x-2 place-items-center">
                    <p className="text-xl text-fifthColor">
                        FCUL (2022-
                    </p> 
                    <AiOutlineLoading3Quarters className="float-right" size={15}></AiOutlineLoading3Quarters>
                    <p>)</p>
                </div>
  
                <p className="float-left text-fifthColor">
                    Informatic Engineering (I. Security)
                </p>
            </div>
            <div className="space-y-1">
                <p></p>
                <p>Final media: --</p>
                <p>Final tese grade: --</p>
            </div>
        </div>
    )
}

function Bachelor() {

    return (
        <div className="bg-whiteColor border-2 rounded-md p-2 w-full divide-y space-y-10">
            <div className="w-full">
                <p className="text-xl text-fifthColor font-bold">
                    Bachelor's degree
                </p>
                <p className="text-xl text-fifthColor">
                    ISEL (2019-2022)
                </p>
                <p className="float-left text-fifthColor">
                    Informatic and Computer Engineering
                </p>
            </div>
            <div className="space-y-1">
                <p></p>
                <p>Final media: 16</p>
                <p>Final project grade: 18</p>
            </div>
        </div>
    )
}

function HighSchool() {
    
    return (
        <div className="bg-whiteColor border-2 rounded-md p-2 w-full divide-y space-y-10">
            <div className="w-full">
                <p className="text-xl text-fifthColor font-bold">
                    High School
                </p>
                <p className="text-xl text-fifthColor">
                    ESGC (2016-2019)
                </p>
                <p className="float-left text-fifthColor">
                    Science and Technology 
                </p>
            </div>
            <div className="space-y-1">
                <p></p>
                <p>Final media: 15</p>
            </div>
        </div>
    )
}

function Education() {
    
    return (
        <div className="space-y-3 grid place-items-center w-80">
            <h1 className="pt-3 flex justify-center mb-4 text-3xl font-bold tracking-tight leading-none text-fifthColor md:text-5xl lg:text-6xl dark:text-white">
                My Education
            </h1>
            <Master/>
            <Bachelor/>
            <HighSchool/>
        </div> 
    )
}

function Internship() {
    
    return (
        <div className="bg-whiteColor border-2 rounded-md p-2 w-full divide-y space-y-10">
            <div className="w-full">
                <p className="text-xl text-fifthColor font-bold">
                    Internship
                </p>
                <p className="text-xl text-fifthColor">
                    SKY (2022)
                </p>
                <p className="float-left text-fifthColor">
                    Junior Backend Developer Apprentice 
                </p>
            </div>
        </div>
    )
}

function Experience() {

    return (
        <div className="space-y-3 grid place-items-center w-80">
            <h1 className="pt-3 flex justify-center mb-4 text-3xl font-bold tracking-tight leading-none text-fifthColor md:text-5xl lg:text-6xl dark:text-white">
                My Experience
            </h1>
            <Internship/>
        </div> 
    )

}

function Qualifications() {
    //TODO: remove the last <div></div> and the space-y-4, the problem is the space between footer and the other comps.
    return (
        <div className="space-y-4 grid place-items-center h-screen">
            <div className="space-y-5 px-10">
                <div></div>
                <Education/>
                <Experience/>
            </div>
            <div></div>
            <Footer/>
        </div>
    )   
}

export default Qualifications;