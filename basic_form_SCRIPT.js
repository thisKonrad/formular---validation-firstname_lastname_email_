/* :˅::˅: basic formular validation SCRIPT js :˅::˅: */


/* get the formular */

let formularBasic = document.querySelector('#formular')


/* submit the formular values */

formularBasic.addEventListener('submit', sendForm ); 
function sendForm(event){
    event.preventDefault()

    formularBasic = event.target;                    /* >> get the formular as event target:: */
    let formData = new FormData(formularBasic);      /* >> create an new FormData() and knot it to the current formular */
    
    /* remind.. → FormData()Method only works with named HTML elements! */
    
    /* with FormData() you can append new informations invisible for the user */

    /** append an individual event number for this instance take the current  
    *   date in milliseconds * Math.random() for an individual number */

    let timebase = new Date();
    let milSecBase = timebase.getTime();/* ◄ milliseconds*/
    let xy = Math.floor(Math.random(3.45)* milSecBase);
 
    formData.append('event number: ', xy );

    /* ˅ validate email adress function :: dekalred below this interface */

    validMail();

    /* append some time informations */

    formData.append('submit date: ', new Date().toLocaleDateString())
    formData.append('submit time: ', new Date().toLocaleTimeString())

    /* append users href information: */

    formData.append('pathName: ', window.location.href);
    
    /** submit all values ...)))
    *  ↓ ☺ objects in the FormData() interface can be looped with a for of loop */

    for( let key of formData.keys()){
        console.table(key, formData.get(key));   
    }
    //optional after confirm :: => formData.reset();
};


/* after html validation :: validate the mail adress again with js and regular expression */

const mail = document.querySelector('#mail');

function validMail(){

    const mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let mailCheck = mailRegEx.test(mail.value);
    if( mailCheck != true){

        window.alert('wrong e mail adress!')
        console.clear();

    };

};