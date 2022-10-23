import "./style/About.css"

function About() {
    return (
        <div className="all-page">
            <div className="main-section">
                <div className="my-photo">
                    <img src={require('./style/me.jpeg')}/>
                </div>
                <h2>Hello, I'm João Arcanjo</h2>
                <h4>21 years old</h4>  
                <h4>Lisbon, Portugal</h4>
            </div>
        </div>
    )   
}

export default About;