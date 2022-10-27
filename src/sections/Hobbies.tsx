export function Hobbies(){
    return (
        <div className="grid place-items-center">
            <h1 className="pt-3 flex justify-center mb-4 text-3xl font-bold tracking-tight leading-none text-fifthColor md:text-5xl lg:text-6xl dark:text-white">My Hobbies</h1>
            <div className="space-y-5">
                <div className="flex justify-center">
                    <div className="pt-6 w-3/5">
                        <img className="border-4 border-fifthColor rounded-full" src={require('./hobbies_photos/gadgets.jpg')}/>
                        <h1 className="pt-3 text-center font-mono font-semibold text-lg">Technology</h1>
                        <p className="text-justify first-letter:text-3xl first-letter:mr-3 first-letter:float-left">I was fascinated by technology from a very early age, nowadays all kinds of gadgets and new technologies call my attention.</p>   
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="pt-6 w-3/5">
                        <img className="border-4 border-fifthColor rounded-full" src={require('./hobbies_photos/arcanjo_eye.jpg')}/>
                        <h1 className="pt-3 text-center font-mono font-semibold text-lg">Photograpy</h1>
                        <p className="text-justify first-letter:text-3xl first-letter:mr-3 first-letter:float-left">Taking pictures is one of the things I like to do most in my spare time, namely when I'm going to discover some new place, you can find some of my work <a href="https://www.instagram.com/arcanjo_eye/" className="no-underline hover:underline">here</a>.</p>   
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="pt-6 w-3/5">
                        <img className="border-4 border-fifthColor rounded-full" src={require('./hobbies_photos/bicicleta.jpg')}/>
                        <h1 className="pt-3 text-center font-mono font-semibold text-lg">Sports</h1>
                        <p className="text-justify first-letter:text-3xl first-letter:mr-3 first-letter:float-left"> I'm a big fan of sports, for 16 years of my life I practiced swimming, I love watching football games with friends and I love cycling or skateboarding.</p>   
                    </div>
                </div>
            </div>
        </div>
    )
} 