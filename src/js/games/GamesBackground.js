import React from 'react';
import Cards from './Cards';
// Assets
import backgroundImage from '../../../assets/backgroundImage.png';
import NextGame from './NextGame';


const GamesBackground = () => {
    return  <section class="games">
    <img src={ backgroundImage } alt="background layer" class="games__background"/>
    <div class="container">
        <Cards/>
        <NextGame/>
    </div>
</section>
}

export default GamesBackground