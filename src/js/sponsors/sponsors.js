import React from "react";
// Assets
import mainSponsor from "../../../assets/mainSponsorLogo.png"


  
  
  

const Sponsors = () => {

    function importAll(r) {
        let sponsors = {};
        r.keys().map((item, index) => { sponsors[item.replace('./', '')] = r(item); });
        return sponsors;
      }

    const sponsors = importAll(require.context('../../../assets/sponsors', false, /\.(png|jpe?g|svg)$/)) || [];
    const sponsorsArray = Object.values(sponsors)
   

    return <section className="sponsors">
        <div className="container">
            <div className="sponsors__mainSponsor">
                <img src={ mainSponsor } alt="main sponsor"/>
            </div>
            
            { sponsorsArray.map(sponsor => {
                return <div className="sponsors__sponsorLogo"> 
                            <img src={ sponsor } alt="sponsor logo" />
                    </div>
                })
            }
            
        </div>

    </section>
}

export default Sponsors

