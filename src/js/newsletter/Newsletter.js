import React from "react";




const Newsletter = () => {
    return <section className="newsletter">
        <div className="container">
            <p className="newsletter__text">
                Chcesz być na bieżąco? Zapisz się do newslettera
            </p>
            <label for="emailInput" className="newsletter__emailLabel">e-mail</label>
            <input id="emailInput" name="emailInput" type="text" placeholder="Wpisz swój adres E-mail" className="newsletter__emailInput"/>

            <label className="newsletter__checkboxLabel">
                    <input type="checkbox" className="newsletter__checkbox"/>
                    <span className="newsletter__checkmark"></span>
                    <p>
                        Przeczytałem i akceptuję postanowienia 
                    </p>
                    <a href="#">
                        Polityki Prywatności
                        
                    </a>
                    <span className="newsletter__astrid">
                            *
                    </span>

                        
                </label>
            <button className="newsletter__button">Wyślij</button>
        </div>
    </section>

}

export default Newsletter