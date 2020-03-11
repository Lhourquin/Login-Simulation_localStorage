let conection = document.getElementById('conection');
let makeConection = document.getElementById('makeConection');
let containerFormInscription = document.getElementById('container-form-inscription');
let md = window.matchMedia("(max-width: 991px)");
let buttonInscriptionMobile = document.getElementById('buttonInscriptionMobile');
let welcomeToTheForum = document.getElementById('welcomeToTheForum');


conection.addEventListener('click', (e) => {
    let target = e.target;

    if(target == conection){
        makeConection.insertAdjacentHTML('afterbegin', '<div id="form-conection"><i id="cross-form-connection" class="fas fa-times cross-to-the-right"></i><form><div class="form-group"><label for="exampleInputEmail1">Email address</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required><small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small></div><div class="form-group"><label for="exampleInputPassword1">Password</label><input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required></div><div class="form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1"><label class="form-check-label" for="exampleCheck1">Check me out</label></div><button type="submit" class="btn btn-primary">Submit</button></form></div>');
    
    }
    
    let cross = document.getElementById('cross-form-connection');
 
    cross.addEventListener('click', (e)=>{
        let target = e.target;
    
        if(target == cross){
            cross.parentElement.remove();
        }
    });

});

function mediaScreen (mq) {
    if(mq.matches){
        containerFormInscription.style.display ="none";
        buttonInscriptionMobile.style.display = "inline";

    }else{
        containerFormInscription.style.display ="inline";
        buttonInscriptionMobile.style.display = "none";
    }
}

mediaScreen(md);

md.addListener(mediaScreen);

buttonInscriptionMobile.addEventListener('click', (e)=>{
    let target = e.target;

    if(md.matches){
        if(target == buttonInscriptionMobile){
        welcomeToTheForum.style.visibility = 'hidden';  
        }
    }else{
        welcomeToTheForum.style.setProperty('visibility' ,'visible');
        }
})