import React from "react";

import footerLogo from "../../../assets/footerLogo.png";



const Footer = () => {
    return <footer className="footer">
    <div className="container">
        <div className="footer__logoWrapper">
            <img src={ footerLogo } alt="club logo" class="footer__logo" />
        </div>
        <div className="footer__column">
            <h3>Klub</h3>
                <p>Historia klubu</p>
                <p>Sponsorzy</p>
                <p>Zarząd</p>
                <p>Hala meczy</p>
                <p>Juniorzy</p>
        </div>
        <div className="footer__column">
            <h3>Zespół</h3>
            <p>Zawodnicy</p>
            <p>Personel</p>
            <p>Supporters</p>
            <p>Mecze</p>
            <p>Tabela ligowa</p>
        </div>
        <div className="footer__column">
            <h3> Zostań sponsorem</h3>
            <p>Oferta sponsoringowa i reklamowa</p>
            <p>Informacje o sponsoringu i reklamie</p>
            <p>Zostań częścią drużyny</p>
        </div>
        <div className="footer__column">
            <h3>Informacje</h3>
            <p>Bilety</p>
            <p>Kontakt</p>
            <p>Informacje prasowe</p>
            <p>Materiały prasowe</p>
        </div>
        <div className="footer__column">
            <h3> Skontaktuj się z nami</h3>
            <p>Siedziba Klubu:</p>
            <p>658 Chiswick High Rd, Brentford, London TW8 0HJ</p>
            <p>Adres do korespondencji:</p>
            <p>IBB Polonia VC LTD 18 Gorst Road NW10 6LE London</p>
            <p>contact@polonia.vc</p>
            <p>Codziennie od 9:00 do 17:00</p>
        </div>
    </div>
</footer>
}


export default Footer