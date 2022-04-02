import React, {useState} from "react";
import validator from "validator";



const Newsletter = () => {
    const [valid, setValid] = useState('newsletter__emailMessage-valid');
    
;
    // const emailRegex = /\S+@\S+\.\S+/

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
      var email = e.target.value
    
      if (validator.isEmail(email)) {
        setEmailError('')
      } else {
        setEmailError('Podaj prawidłowy adres email')
      }
    }


    // const validateEmail = (event) => {
    //     event.preventDefault();
    //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
    //     {
    //         setValid('newsletter__emailMessage-valid');
    //     }else{
    //         setValid('newsletter__emailMessage');
    //     }
            
    // //     if (emailRegex.test(email)) {
    // //       setValid('newsletter__emailMessage-valid');
    // //     } else {
    // //       setValid('newsletter__emailMessage');
    // //     }
    // //   };

    return <section className="newsletter">
        <div className="container">
            <p className="newsletter__text">
                Chcesz być na bieżąco? Zapisz się do newslettera
            </p>
            <label for="emailInput" className="newsletter__emailLabel">e-mail</label>
            <input onChange={(e) => validateEmail(e)} id="emailInput" name="emailInput" type="text" placeholder="Wpisz swój adres E-mail" className="newsletter__emailInput"/>
            <span style={{
                            fontWeight: 'bold',
                            color: 'red',
                            }}>{emailError}</span>            
            <label className="newsletter__checkboxLabel">
                    <input type="checkbox" className="newsletter__checkbox"/>
                    <span className="newsletter__checkmark"></span>
                    <p>
                        Przeczytałem i akceptuję postanowienia 
                        <a href="#">
                        Polityki Prywatności
                        
                    </a>
                    <span className="newsletter__astrid">
                            *
                    </span>
                    </p>
                    
                    

                        
                </label>
            <button className="newsletter__button">Wyślij</button>
        </div>
    </section>

}

export default Newsletter