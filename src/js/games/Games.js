import React from 'react'
// import GamesBackground from './GamesBackground'
import Cards from './Cards'
import NextGame from './NextGame'
import backgroundImage from '../../../assets/backgroundImage.png';


const Games = () => {
    return <section className='games'> 
    
     
    <img src={ backgroundImage } alt="background layer" class="games__background"/>
    <div className='container'>
        <Cards/>
        <NextGame/>
    </div>
    
     
    </section>
   
}

export default Games