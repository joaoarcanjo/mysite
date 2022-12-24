import { FcFeedback, FcCellPhone, FcHome } from "react-icons/fc";

const divStyle = {
    background: 'white'
  };

function Contacts() {
    return (
        <div className="space-y-5 grid place-items-center">
            <h1 className="pt-3 flex justify-center mb-4 text-3xl font-bold tracking-tight leading-none text-fifthColor md:text-5xl lg:text-6xl dark:text-white">My Contacts</h1>
            
            <div style={divStyle} className="flex w-full max-w-[400px] rounded-lg shadow">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                    <FcHome size={40}></FcHome>
                </div>
                <div className="w-full">
                    <h4 className="text-dark mb-1 text-xl font-bold">My Location</h4>
                    <p className="text-body-color text-base"> Rua da Indústria nº2 3ºfrente, Alverca do Ribatejo, Lisboa, Portugal.</p>
                </div>
            </div>

            <div style={divStyle} className="flex w-full max-w-[400px] rounded-lg shadow">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                    <FcCellPhone size={40}></FcCellPhone>
                </div>
                <div className="w-full">
                    <h4 className="text-dark mb-1 text-xl font-bold">Phone Number</h4>
                    <p className="text-body-color text-base">(+351) 96 55 36 775</p>
                </div>
            </div>
            
            <div style={divStyle} className="flex w-full max-w-[400px] rounded-lg shadow">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                    <FcFeedback size={40}></FcFeedback>
                </div>
                <div className="w-full">
                    <h4 className="text-dark mb-1 text-xl font-bold">Email Address</h4>
                    <p className="text-body-color text-base">joaopedro.arcanjo@hotmail.com</p>
                </div>
            </div>
    </div> 
    )
}

export default Contacts;


