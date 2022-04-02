import React from "react";
// Assets
import signature from "../../../assets/signature.png"
import coachImg from '../../../assets/coachImg.png'




const CardClub = () => {
    return <div className="club__card">
        
        <div className="club__cardWrapper">
            <h2 className="club__title">
                Kilka słów o klubie
            </h2>
            <p className="club__description">
                Korzenie Polonii sięgają 1973 roku, kiedy Maciek Behnke i Henio Paulinski, członkowie 
                polskiego YMCA, założyli klub siatkarski. Klub zasilił zawodników ze Związku 
                i polskiego harcerstwa i pod nazwą „Polskie YMCA”, wszedł do 3 Dywizji Angielskiej 
                Ligi Narodowej. Drużyna, początkowo kierowana przez Bolesława Lesieckiego 
                (Sekretarz Generalny Polskiego YMCA), stopniowo rozwijał się i przechodził przez 
                dywizje rekrutując nowych graczy z młodzieży wykształconej w skautingu.
            </p>
            <div className="club__signature">
                <img src={ signature } alt="coach's signature"/>
            </div>
            <p className="club__position">
                Główny Trener
            </p>
            <p className="club__coach">
                VANGELIS KOUTOULEAS
            </p>
        </div>
        
        <div className="club__coachImg">
            <img src={ coachImg } alt="Team coach" />
        </div>

    </div>
}

export default CardClub