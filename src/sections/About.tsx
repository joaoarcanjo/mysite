import "./style/About.css"

function About() {
    return (
        <div className="all-page">
            <div className="main-section">
                <div></div>
                    <h1 className="about-title">
                        I'm João Arcanjo
                        <span className="about-subtitle">
                            (Just Arcanjo, for friends)
                        </span>
                    </h1>
                <div className="my-photo">
                    <img src={require('./style/me.jpeg')}/>
                </div>
                <h4>21 years old</h4>  
                <h4>Lisbon, Portugal</h4>
                <p>I'm João Arcanjo, 21 years old, from Lisbon, Portugal and actually an informatic enginner student</p>
            </div>
        </div>
    )   
}

export default About;