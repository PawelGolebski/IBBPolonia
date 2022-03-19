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

const App = () => {
    return <>
    <Header/>
    <Hero/>
    <Games/>
    <Club />
    <Achievements/>
    <Team/>
    </>
}


ReactDOM.render(<App/>,document.getElementById("test"));

