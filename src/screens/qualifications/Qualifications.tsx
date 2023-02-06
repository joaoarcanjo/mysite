import { Footer } from "../../components/Footer";
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useMenuState } from "../../Navigation/OpenMenu";

function Master() {

    const menuState = useMenuState();
    
    return (
        <div className="bg-whiteColor border-2 rounded-md p-2 w-full divide-y space-y-3 shadow-xl">
            <div className="w-full">
                <p className="text-xl text-fourthColor font-bold">
                    Master's degree
                </p>
                <div className="flex justify-start margin:auto space-x-2 place-items-center">
                    <p className="text-xl text-fifthColor">
                        FCUL (2022-
                    </p> 
                    {!menuState?.isOpen &&
                        <AiOutlineLoading3Quarters className="animate-spin float-right" size={15}></AiOutlineLoading3Quarters>
                    }
                    <p>)</p>
                </div>
                <div className="space-y-2">
                    <p className="w-full text-fifthColor">
                        Informatic Engineering (I. Security)
                    </p>
                    <a href="https://ciencias.ulisboa.pt/">
                        <img className="object-fill h-10 w-30" alt="Faculdade de Ciências da Universidade de Lisboa" src={require('./images/fcul.png')}/>
                    </a>
                </div>
            </div>
            <div className="space-y-1">
                <p></p>
                <p className="text-fifthColor">Final grade: --</p>
                <p className="text-fifthColor">Thesis grade: --</p>
            </div>
        </div>
    )
}

function Bachelor() {

    return (
        <div className="bg-whiteColor border-2 rounded-md p-2 w-full divide-y space-y-3 shadow-xl">
            <div className="w-full">
                <p className="text-xl text-fourthColor font-bold">
                    Bachelor's degree
                </p>
                <p className="text-xl text-fifthColor">
                    ISEL (2019-2022)
                </p>
                <p className="w-full text-fifthColor">
                    Informatic and Computer Engineering
                </p>
                <a href="https://www.isel.pt/">
                    <img className="object-fill h-14 w-30" alt="Instituto Superior de Engenharia de Lisboa logo" src={require('./images/isel.png')}/>
                </a>
            </div>
            <div className="space-y-1">
                <p></p>
                <p className="text-fifthColor">Final grade: 16</p>
                <p className="text-fifthColor">Final project grade: 18</p>
            </div>
        </div>
    )
}

function HighSchool() {
    
    return (
        <div className="bg-whiteColor border-2 rounded-md p-2 w-full divide-y space-y-3 shadow-xl">
            <div className="w-full">
                <p className="text-xl text-fourthColor font-bold">
                    High School
                </p>
                <p className="text-xl text-fifthColor">
                    ESGC (2016-2019)
                </p>
                <p className="w-full text-fifthColor">
                    Science and Technology 
                </p>
                <a href="https://www.esgc.pt/portal/index.php">
                    <img className="object-fill h-10 w-30" alt="Escola Secundária de Gago Coutinho logo" src={require('./images/esgc.png')}/>
                </a>
            </div>
            <div className="space-y-1">
                <p></p>
                <p className="text-fifthColor">Final grade: 15</p>
            </div>
        </div>
    )
}

function Education() {
    
    return (
        <div className="space-y-3 grid place-items-center">
            <h1 className="pt-3 flex justify-center text-5xl font-nunito font-black text-fifthColor md:text-5xl lg:text-6xl dark:text-white">  
                Education
            </h1>
            <Master/>
            <Bachelor/>
            <HighSchool/>
        </div> 
    )
}

function Internship() {
    
    return (
         <div className="bg-whiteColor border-2 rounded-md p-2 w-full space-y-3 shadow-xl">
            <div className="w-full">
                <p className="text-xl text-fourthColor font-bold">
                    Internship
                </p>
                <p className="text-xl text-fifthColor">
                    SKY (2022)
                </p>
                <p className="w-full text-fifthColor">
                    Junior Backend Developer Apprentice 
                </p>
                <a href="https://www.linkedin.com/company/skyportugal/">
                    <img className="object-fill h-10 w-30" alt="Sky logo" src={require('./images/sky.png')}/>
                </a>
            </div>
            <div></div>
     </div>
    )
}

function Experience() {

    return (
        <div className="space-y-3">
            <h1 className="pt-3 flex justify-center text-5xl font-nunito font-black text-fifthColor md:text-5xl lg:text-6xl dark:text-white">
                Experience
            </h1>
            <Internship/>
        </div> 
    )

}

function Qualifications() {
    //TODO: remove the last <div></div> and the space-y-4, the problem is the space between footer and the other comps.
    return (
        <div className="h-screen">
        <div className="space-y-5 grid place-items-center py-5 px-10">
            <div className="flex max-w-md laptop:max-w-4xl grid laptop:grid-cols-2 laptop:gap-20">
                <Education/>
                <Experience/>
            </div>
        </div>
        <Footer/>
    </div>
    )   
}

export default Qualifications;