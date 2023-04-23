//import $ from 'jquery';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
//require('dotenv').config(); //import and load .env variables

function ContactForm(){
    const email_form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zyt8p8c', 'template_uj406yo', email_form.current, 'rdlwnzw_MGal3dKmT')
          .then((result) => {
              console.log(result.text);
              alert('Your email has been sent successfully');
          }, (error) => {
              console.log(error.text);
          });
    };
    return(
        <form ref={email_form} method='POST' onSubmit={sendEmail}>
            <div className="form-group my-3">
                <input type="text" className="form-control" name='sender_name' placeholder="Votre Nom" required/>
            </div>
            <div className="form-group my-3">
                <input type="email" className="form-control" name='sender_email' placeholder="Votre Email" required/>
            </div>
            <div className="form-group my-3">
                <input type="text" name='email_subject' className="form-control" placeholder="Objet" required/>
            </div>
            <div className="form-group my-3">
                <textarea name="email_body" cols="30" rows="3" className="form-control" placeholder="Message" required></textarea>
            </div>
            <div className="form-group my-3">
                {/*<a href={`mailto:godwillmbdev@gmail?body=${$("#email-body").val()}subject=${$("#email-body").val()}.com`}>*/}
                    <input type="submit" className="btn btn-success form-control px-3" value='Envoyer'/>
                {/*</a>*/}
            </div>
        </form>
    );
}
export default ContactForm;