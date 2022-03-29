import './styles/main.scss'
import React from "react"
import ReactDOM from "react-dom"
//Partials
import Header from './js/header/Header'
import Hero from './js/hero/Hero'
import Games from './js/games/Games'
import Club from './js/club/Club'
import Achievements from './js/achievements/Achievements'
import Team from './js/team/Team'
import News from './js/news/News'
import Media from './js/media/Media'
import Tv from './js/tv/Tv'
import Shop from './js/shop/Shop'
import Sponsors from './js/sponsors/sponsors'
import Newsletter from './js/newsletter/Newsletter'
import Footer from './js/footer/Footer'




const App = () => {
    return <>
    <Header/>
    <Hero/>
    <Games/>
    <Club />
    <Achievements/>
    <Team/>
    <News/>
    <Media />
    <Tv/>
    <Shop />
    <Sponsors />
    <Newsletter />
    <Footer />
    </>
}


ReactDOM.render(<App/>,document.getElementById("root"));

