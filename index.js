// Global variable for all file
const md = window.matchMedia("(max-width: 991px)");

///////////////////////////////////////////////////////////////
////////////////////// INDEX HTML /////////////////////////////
if (window.location.href.indexOf("index") != -1){

// Target element
const connection = document.getElementById('connection');
const makeConnection = document.getElementById('makeConnection');
const containerFormInscription = document.getElementById('container-form-inscription');
const buttonInscriptionMobile = document.getElementById('buttonInscriptionMobile');
const welcomeToTheForum = document.getElementById('welcomeToTheForum');
const crossInscription = document.getElementById('cross-form-inscription');

// Event displaying form conection and close form connection


    connection.addEventListener('click', (e) => {
        const target = e.target;
    
        if(target == connection){
    
            // Add the form connection to the div empty "makeConnection"
            makeConnection.insertAdjacentHTML('afterbegin', '<div id="form-conection"><i id="cross-form-connection" class="fas fa-times cross-for-connection"></i><form><div class="form-group"><label for="exampleInputEmail1">Email address</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required><small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small></div><div class="form-group"><label for="exampleInputPassword1">Password</label><input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required></div><div class="form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1"><label class="form-check-label" for="exampleCheck1">Check me out</label></div><button type="submit" class="btn btn-primary">Submit</button></form></div>');
        
        }
        
        // Target the cross for close the form connection
        const crossConnection = document.getElementById('cross-form-connection');
        
        // Event for close the form connection
        crossConnection.addEventListener('click', (e)=>{
            const target = e.target;
        
            if(target == crossConnection){
    
                // Remove the form connection on div empty "makeConnection"
                crossConnection.parentElement.remove();
            }
        });
    
    });

    function mediaScreen (mq) {
        // Condition for changes displaying with media query arguments
        if(mq.matches){
    
            // Element that changes without a particular event //
    
            // Element display none
            containerFormInscription.style.display ="none";
    
            // Element display
            buttonInscriptionMobile.style.display = "inline";
            crossInscription.style.display ='inline';
    
            // Event displaying the form and close the welcome/description block
            buttonInscriptionMobile.addEventListener('click', (e)=>{
                const target = e.target;
    
       
                if(target == buttonInscriptionMobile){
                welcomeToTheForum.classList.add('displayNone');  
                containerFormInscription.style.display ="inline";
    
             }
       
            })
    
            // Event close the form and display the welcome/description block
            crossInscription.addEventListener('click', (e)=>{
                const target = e.target;
    
       
                if(target == crossInscription){
                welcomeToTheForum.classList.remove('displayNone');  
                containerFormInscription.style.display ="none";
    
             }
       
            })
        }else{
            // Element that changes without a particular event //
    
            // Element display
            containerFormInscription.style.display ="inline";
    
            // Element display none
            buttonInscriptionMobile.style.display = "none";
            crossInscription.style.display ='none';
            welcomeToTheForum.classList.remove('displayNone');  
    
        }
    }
    
    mediaScreen(md);
    
    md.addListener(mediaScreen);

}

////////////////////// INDEX HTML /////////////////////////////
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
///////////////////// FORUM HTML //////////////////////////////

if (window.location.href.indexOf("forum") != -1){
// Target element
let deconnection = document.getElementById('deconnection');
let userProfile = document.getElementById('userProfile');
let userProfilePseudo = document.getElementById('userProfilePseudo');
let userProfileMail = document.getElementById('userProfileMail');
let userProfileAge = document.getElementById('userProfileAge');
let userProfileCity = document.getElementById('userProfileCity');
let dateOfConection = document.getElementById('dateOfConection');
let userIcon = document.getElementById('userIcon');
let actuality = document.getElementById('actuality');




//////////////////////////////////////////////////////////////
//////////////////// Global function for all file ////////////

// Event responsive displaying of element

function mediaScreen (mq) {
    // Condition for changes displaying with media query arguments
    if(mq.matches){

        // Element that changes without a particular event //

        // Element display none
        userProfile.style.display ="none";

        // Element display
        /*buttonInscriptionMobile.style.display = "inline";
        crossInscription.style.display ='inline';*/

        // Event displaying the profile and close the actuality block
        userIcon.addEventListener('click', (e)=>{
            const target = e.target;

   
            if(target == userIcon){
            //userProfile.classList.add('displayNone');  
            userProfile.style.display ="inline";
            actuality.style.display = "none";
         }
   
        });

        // Event close the profile and display the actuality block
        /*
        crossInscription.addEventListener('click', (e)=>{
            const target = e.target;

   
            if(target == crossInscription){
            welcomeToTheForum.classList.remove('displayNone');  
            containerFormInscription.style.display ="none";

         }
   
        })*/
    }else{
        // Element that changes without a particular event //

        // Element display
     /*
        containerFormInscription.style.display ="inline";

        // Element display none
        buttonInscriptionMobile.style.display = "none";
        crossInscription.style.display ='none';
        welcomeToTheForum.classList.remove('displayNone');  
*/
    }
}

mediaScreen(md);

md.addListener(mediaScreen);
}

///////////////////// FORUM HTML //////////////////////////////
///////////////////////////////////////////////////////////////