import "./style/About.css"

function About() {
    return (
        <div className="grid place-items-center h-screen">
            <div className="title space-y-2">
                <h1 className="pt-3 flex justify-center text-5xl font-bold tracking-tight text-fifthColor hover:text-fourthColor md:text-5xl lg:text-6xl dark:text-white">João Arcanjo</h1>
                <p> (Just Arcanjo, for friends) </p>
            </div>
            <div className="bg-black space-y-10 px-10 py-10">
                <p className="text-justify mb-3 text-fifthColor first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-fifthColor first-letter:mr-3 first-letter:float-left">
                    I'm João Arcanjo, 21 years, from Alverca do Ribatejo, Lisbon, Portugal and actually i am a master degree informatic enginner student.
                </p>
                <img className="border-t-8 border-fifthColor" src={require('./style/me.jpeg')}/>
                <p>Some projects will appear here</p>
            </div>
        </div>
    )   
}

export default About;