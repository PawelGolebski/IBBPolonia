import React from 'react'
//Assets
// import heroPlayer from '../../../assets/heroPlayer.png'
// import backgroundImage from '../../../assets/backgroundImage.png'

const Hero = () => {
    return <section className="hero">
    <div className="container">
        <div className="textBox">
            <p className="textBox__welcomeText">Witaj na naszej stronie</p>
            <div className="textBox__line"></div>
            <h1 className="textBox__headline">Poznaj Mistrzów
                <p className="headline__teamName">IBB Polonia VC</p>
            </h1>
            <p className="textBox__description"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sit officia accusantium nisi ut a aliquid hic consequatur exercitationem enim blanditiis, reprehenderit autem fugiat maxime amet quasi doloribus. Aliquam, optio? Minima excepturi
                repudiandae cum neque soluta hic, molestias mollitia blanditiis.
            </p>
            
        </div>
    </div>
    <div className="hero__image"> </div>

    <div className="hero__background"></div>
</section>
}

export default Hero