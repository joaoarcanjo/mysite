//import { useMenuState } from "../Navigation/OpenMenu"

type Hobbie = {
    imageSrc: string,
    title: string,
    description: string
}

function HobbieElement({hobbie}: {hobbie: Hobbie}) {
    return (
        <div className="m-8 flex flex-col justify-center items-center px-10">
            <img className="object-contain border-4 border-fifthColor rounded-full" alt="" src={hobbie.imageSrc}/>
            <h1 className="pt-3 text-center font-nunito font-semibold text-lg text-fifthColor font-bold text-3xl">{hobbie.title}</h1>
            <p className="text-justify text-md first-letter:text-3xl first-letter:mr-3 font-nunito first-letter:float-left first-letter:text-fourthColor text-fifthColor">{hobbie.description}</p>   
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
            imageSrc: require('./images/tecnologia.jpg'),
            title: 'Technology',
            description: 'I\'ve been fascinated by technology since i was very young, nowadays all gadgets and new techonologies catch my atention, being an apologist for their integration into our daily, in a moderate way.'
        },
        {
            imageSrc: require('./images/arcanjo_eye.jpg'),
            title: 'Photograpy',
            description: 'Taking pictures is one of the things i like to do most in my free time, namely when I\'m going to discover some new place, my camera is something i never forget to take. You can find some of my photos on my instagram page.'
        },
        {
            imageSrc: require('./images/bicicleta.jpg'),
            title: 'Sports',
            description: 'I\'m a big fan of sports, for 16 years of my life I practiced swimming. I like watching football and others sports games with friends and when i have some free time i like to go cycling and skateboarding.'
            //Taking pictures is one of the things I like to do most in my spare time, namely when I'm going to discover some new place, you can find some of my work <a href="https://www.instagram.com/arcanjo_eye/" className="no-underline hover:underline">here</a>.
        },
        {
            imageSrc: require('./images/cars.jpg'),
            title: 'Cars',
            description: 'Since I can remember being people, cars have always been a great passion that has grown and remains until today. I\'m that guy who gets hysterical when sees an unusual car on the street.'
        }  
    ]
    
    return (
        <div className=" grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 place-items-center">
            { hobbies.map((value, key) => <HobbieElement hobbie={value} key={key}/>) }
        </div> 
    )
}

export function Hobbies() {
    return (
         <div className="min-h-screen">
            <div className="space-y-5 grid place-items-center py-2 px-3">
            <div className="max-w-md tablet:max-w-3xl laptop:max-w-7xl grid place-items-center">
                <MainInfo/>
                <HobbiesInfo/>
            </div>
            </div>
        </div>  
    )   
}