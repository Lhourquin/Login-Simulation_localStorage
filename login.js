/////////////////////////////:: INDEX ////////////////////
if (window.location.href.indexOf("index") != -1){

	//Inscription
	//let formDataInscription = document.getElementById('formDataInscription');
	let submitRegister = document.getElementById('submitRegister');
	const inputDataOfSuscribeForm = document.getElementsByClassName('inputDataOfSuscribeForm');
	let formDataInscription = document.getElementById('formDataInscription');

	// Suscribe Form control
	function formControl(e) {

		e.preventDefault();

		var flag = true;
		for(let i = 0; i < inputDataOfSuscribeForm.length ; i++) {
			if(inputDataOfSuscribeForm[i].value.length == 0){
				flag = false;
				break;
			}
			
		}
		
		if(flag){
		   swal.fire("Inscription comfirmer !", "Vous allez être redirigé !", "success");
			//alert('tt est bon');
			getValues(e);
			//window.location.href = "forum.html";
			 setTimeout(function(){ 
				window.location.href = "forum.html";
			}, 2000);

		}else{
			 swal.fire("Erreur !", "Vous n'avez pas rempli le formulaire correctement, réessayez !", "error");
		}
	}

	//submitRegister.addEventListener('click', formControl);

	// Get the data
	const userData = {};

	function getValues(e) {

		
		// turn form elements object into an array
		const elements = Array.prototype.slice.call(e.target.elements);

		// go over the array storing input name & value pairs
		elements.forEach((el) => {
			if (el.type !== "submit"){
				const value = el.value.trim();
				userData[el.name] = value;	
			}
		});

		// finally save to localStorage
		sessionStorage.setItem('userSession', JSON.stringify(userData));
		localStorage.setItem('userAccount',JSON.stringify(userData));
	}  

	formDataInscription.addEventListener("submit",formControl);

	
}
	


/////////////////////////FORUM ///////////////////////
if (window.location.href.indexOf("forum") != -1){

	let getData = JSON.parse(localStorage.getItem('userAccount'));
	//sessionStorage.setItem('userSession', JSON.stringify(getData));
	
	let arr = [];


		for(let itm in getData){
			arr.push(getData[itm]);
		}
		userProfilePseudo.innerText = arr[0] + ' ' + arr[1];
		userProfileMail.innerText = arr[2];
		userProfileGender.innerText = arr[3];
		userProfileCity.innerText = arr[4];
		userprofileAge.innerText = arr[5] + ' years old';

	if(	sessionStorage.getItem('userSession') == undefined	){
		window.location.href = "index.html";

	}
	


}
