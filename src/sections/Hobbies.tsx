//import { useMenuState } from "../Navigation/OpenMenu"
import { Footer } from "./components/Footer"

type Hobbie = {
    imageSrc: string,
    title: string,
    description: string
}

function HobbieElement({hobbie}: {hobbie: Hobbie}) {
    return (
        <div className="m-8 flex flex-col justify-center items-center">
            <img className="object-contain border-4 border-fifthColor rounded-full" alt="" src={hobbie.imageSrc}/>
            <h1 className="pt-3 text-center font-mono font-semibold text-lg">{hobbie.title}</h1>
            <p className="text-justify first-letter:text-3xl first-letter:mr-3 first-letter:float-left">{hobbie.description}</p>   
        </div>
    )
}

function MainInfo() {
    
    return (
        <div className="space-y-5 px-10 py-5">
            <h1 className="pt-3 flex justify-center text-5xl font-nunito font-black text-fifthColor hover:text-fourthColor md:text-5xl lg:text-6xl dark:text-white">My Hobbies</h1>
        </div>
    )
}

function HobbiesInfo() {

    let hobbies: Hobbie[] = [
        {
            imageSrc: require('./hobbies_photos/gadgets.jpg'),
            title: 'Technology',
            description: 'I´ve been fascinated by technology since i was very young, nowadays all gadgets and new techonologies catch my atention, being an apologist for their integration into our daily, in a moderate way.'
        },
        {
            imageSrc: require('./hobbies_photos/arcanjo_eye.jpg'),
            title: 'Photograpy',
            description: 'Taking pictures is one of the things i like to do most in my free time, namely when I\'m going to discover some new place, my camera is something i never forget to take. You can find some of my photos on my instagram page.'
        },
        {
            imageSrc: require('./hobbies_photos/bicicleta.jpg'),
            title: 'Sports',
            description: 'I\'m a big fan of sports, for 16 years of my life I practiced swimming, i like watching football games with friends and when i have some free time i like to go cycling and skateboarding.'
            //Taking pictures is one of the things I like to do most in my spare time, namely when I'm going to discover some new place, you can find some of my work <a href="https://www.instagram.com/arcanjo_eye/" className="no-underline hover:underline">here</a>.
        }   
    ]
    
    return (
        <div className="grid place-items-center w-80">
            { hobbies.map(value => <HobbieElement hobbie={value}/>) }
        </div> 
    )
}

export function Hobbies() {
    return (
        <div className="grid place-items-center h-screen">
            <MainInfo/>
            <div className="space-y-5 px-10">
                <HobbiesInfo/>
            </div>
            <Footer/>
        </div>
    )   
}