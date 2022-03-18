import './styles/main.scss'

import React from "react"
import ReactDOM from "react-dom"
//Partials
import Header from './js/header/Header'
import Hero from './js/hero/Hero'

const App = () => {
    return <>
    <Header/>
    <Hero/>
    </>
}


ReactDOM.render(<App/>,document.getElementById("test"));

