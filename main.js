/* :: >> basic formular validation SCRIPT js <<  :: */


/* get the formular */
let formularBasic = document.querySelector('#formular')


/* submit the formular values */
formularBasic.addEventListener('submit', sendForm ); 


function sendForm(event){

    event.preventDefault()

    /* get the formular as event target */
    formularBasic = event.target;                    
    let formData = new FormData(formularBasic);      
    
    /** remind.. → FormData()Method only works with named HTML elements! 
    * with FormData() you can append new informations invisible for the user */

    /** append an individual ID(timestamp)  
    *   in milliseconds */
    let timestamp = Date.now();
    
    formData.append('timestamp ID: ', timestamp);

    /* ˅ validate email adress function */

    validMail();

    /* append some time informations */
    formData.append('submit date: ', new Date().toLocaleDateString())
    formData.append('submit time: ', new Date().toLocaleTimeString())

    /* append users href information: */
    formData.append('pathName: ', window.location.href);
    
    /** submit all values ...)))
    *  ↓ ☺ objects in the FormData() interface can be iterated */

    for( let key of formData.keys()){
        console.table(key, formData.get(key));   
    }
    /* optional after confirm: => formData.reset(); */
};


/** after html validation :: 
* validate the mail adress again 
* with js and regular expression */

const mail = document.querySelector('#mail');

function validMail(){

    const mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let mailCheck = mailRegEx.test(mail.value);
    if( mailCheck != true){

        window.alert('wrong e mail adress!')
        console.clear();

    };

};
