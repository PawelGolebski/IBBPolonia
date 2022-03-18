import React from 'react'
import GamesBackground from './GamesBackground'
import Cards from './Cards'
import NextGame from './NextGame'



const Games = () => {
    return <>
     <GamesBackground>
         <Cards/>
         <NextGame/>
     </GamesBackground>
    </>
   
}

export default Games