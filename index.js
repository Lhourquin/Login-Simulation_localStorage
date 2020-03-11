let connection = document.getElementById('connection');
let makeConection = document.getElementById('makeConection');
let containerFormInscription = document.getElementById('container-form-inscription');
let md = window.matchMedia("(max-width: 991px)");
let buttonInscriptionMobile = document.getElementById('buttonInscriptionMobile');
let welcomeToTheForum = document.getElementById('welcomeToTheForum');
let crossInscription = document.getElementById('cross-form-inscription');


connection.addEventListener('click', (e) => {
    let target = e.target;

    if(target == connection){
        makeConection.insertAdjacentHTML('afterbegin', '<div id="form-conection"><i id="cross-form-connection" class="fas fa-times cross-for-connection"></i><form><div class="form-group"><label for="exampleInputEmail1">Email address</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required><small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small></div><div class="form-group"><label for="exampleInputPassword1">Password</label><input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required></div><div class="form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1"><label class="form-check-label" for="exampleCheck1">Check me out</label></div><button type="submit" class="btn btn-primary">Submit</button></form></div>');
    
    }
    
    let crossConnection = document.getElementById('cross-form-connection');
    
    crossConnection.addEventListener('click', (e)=>{
        let target = e.target;
    
        if(target == crossConnection){
            crossConnection.parentElement.remove();
        }
    });

});

function mediaScreen (mq) {
    if(mq.matches){
        containerFormInscription.style.display ="none";
        buttonInscriptionMobile.style.display = "inline";
        crossInscription.style.display ='inline';


        buttonInscriptionMobile.addEventListener('click', (e)=>{
            let target = e.target;

   
            if(target == buttonInscriptionMobile){
            welcomeToTheForum.classList.add('displayNone');  
            containerFormInscription.style.display ="inline";

         }
   
        })

        crossInscription.addEventListener('click', (e)=>{
            let target = e.target;

   
            if(target == crossInscription){
            welcomeToTheForum.classList.remove('displayNone');  
            containerFormInscription.style.display ="none";

         }
   
        })
    }else{
        containerFormInscription.style.display ="inline";
        buttonInscriptionMobile.style.display = "none";
        crossInscription.style.display ='none';

        welcomeToTheForum.classList.remove('displayNone');  

    }
}

mediaScreen(md);

md.addListener(mediaScreen);
