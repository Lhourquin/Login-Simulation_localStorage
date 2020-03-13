if (window.location.href.indexOf("index") != -1){

	//Inscription
	let formDataInscription = document.getElementById('formDataInscription');


	const userData = {};

	function getValues(e) {
		// turn form elements object into an array
		const elements = Array.prototype.slice.call(e.target.elements);

		// go over the array storing input name & value pairs
		elements.forEach((el) => {
			if (el.type !== "submit"){
				userData[el.name] = el.value;
			}
		});

		// finally save to localStorage
		sessionStorage.setItem('userSession', JSON.stringify(userData));
		localStorage.setItem('userAccount',JSON.stringify(userData));
	}  

	formDataInscription.addEventListener("submit", getValues);

	// Connection
  /*
	let getData = JSON.parse(localStorage.getItem('userAccount'));


	let formConection = document.getElementById('form-conection');

	
		console.log("is load");
		let inputEmail = document.getElementById('inputEmail').value;
		let inputPassword = document.getElementById('inputPassword').value;
		let submitConection = document.getElementById('submitConection');
		let arr = [];


		for(let itm in getData){
			arr.push(getData[itm]);
		}

		function checkAccount(){
			if(inputEmail == arr[2]){
				console.log(inputEmail);
				if(inputPassword != arr[6]){
					alert('wrong password !');
				}else if (inputPassword == arr[6]){
					sessionStorage.setItem('userSession', JSON.stringify(getData));
				}
			}

			formConection.addEventListener('click', checkAccount);
		}
	*/




}


if (window.location.href.indexOf("forum") != -1){

	let getData = JSON.parse(sessionStorage.getItem('userSession'));

	let arr = [];

	if(getData){
		for(let itm in getData){
			arr.push(getData[itm]);
		}
		userProfilePseudo.innerText = arr[0] + ' ' + arr[1];
		userProfileMail.innerText = arr[2];
		userProfileGender.innerText = arr[3];
		userProfileCity.innerText = arr[4];
		userprofileAge.innerText = arr[5] + ' years old';

	}else{
		window.location.href = "index.html";
	}


}
