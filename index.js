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
				makeConnection.insertAdjacentHTML('afterbegin', '<div id="form-conection"><i id="cross-form-connection" class="fas fa-times cross-for-connection"></i><form><div class="form-group"><label for="inputEmail">Email address</label><input type="email" class="form-control" id="inputEmail" name="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" required><small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small></div><div class="form-group"><label for="inputPassword">Password</label><input type="password" class="form-control" id="inputPassword" name="inputPassword" placeholder="Password" required></div><div class="form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1"><label class="form-check-label" for="exampleCheck1">Check me out</label></div><button type="submit" id="submitConection" class="btn btn-primary">Submit</button></form></div>');


			}
			// Target element of form conncetion
			const submitConection = document.getElementById('submitConection');
			const inputEmail = document.getElementById('inputEmail');
			const inputPassword = document.getElementById('inputPassword');
			const getData = JSON.parse(localStorage.getItem('userAccount'));
			const arr = [];
			const crossConnection = document.getElementById('cross-form-connection');

			// Add data of userAccount form localStorage to the Array
			for(let itm in getData){
				arr.push(getData[itm]);
			}

			// Check and connection to the forum
			submitConection.addEventListener('click', (e)=>{
				e.preventDefault();
				const target = e.target;

				if(target == submitConection){
					if(inputEmail.value !== arr[2]){
						swal.fire("Unknown address.", "Please enter a correct address.", "Error");
					}else{
						if(inputPassword.value !== arr[6]){
							swal.fire("Unknown password", "Please enter a correct password.", "Error");
						}else{
							swal.fire("Account authenticate", "Welcome us " + arr[0] , "success");
							sessionStorage.setItem('userSession', JSON.stringify(getData));
							setTimeout(function(){ 
								window.location.href = "forum.html";
							}, 2000);
						}
					}
				}
			});


			// Event for close the form connection
			crossConnection.addEventListener('click', (e)=>{
				const target = e.target;

				if(target == crossConnection){

					// Remove the form connection on div empty "makeConnection"
					crossConnection.parentElement.remove();
				}
			});

		});


		// Event responsive displaying of element
		function mediaScreen (mq) {
			// Condition for changes displaying with media query arguments
			if(mq.matches){

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

		// Inscription
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
				getValues(e);

				swal.fire("Registration confirm", "Welcome us " + arr[0], "success");
				
				setTimeout(function(){ 
					window.location.href = "forum.html";
				}, 2000);

			}else{
				swal.fire("Error !", "You did not fill out the form correctly, try again!(looser)", "error");
			}
		}

		// Get the data
		const userData = {};
		let arr = [];

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

			for(let itm in userData)[
				arr.push(userData[itm])
			]
			// finally save to localStorage and sessionStorage
			sessionStorage.setItem('userSession', JSON.stringify(userData));
			localStorage.setItem('userAccount',JSON.stringify(userData));
		}  



    // Create the account
		formDataInscription.addEventListener("submit",formControl);	
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
    const pseudoNav = document.getElementById('pseudoNav');
		const crossProfile = document.getElementById('cross-for-profile');

		// Event responsive displaying of element
		function mediaScreen (mq) {
			// Condition for changes displaying with media query arguments
			if(mq.matches){

				// Element that changes without a particular event //

				// Element display none
				userProfile.style.display ="none";
				crossProfile.style.display ="inline";
				// Element display


				// Event displaying the profile and close the actuality block
				userIcon.addEventListener('click', (e)=>{
					const target = e.target;

					if(mq.matches){
						if(target == userIcon){
							userProfile.style.display ="inline";
							actuality.style.display = "none";
						}

					}

				});


				// Event close the profile and display the actuality block

				crossProfile.addEventListener('click', (e)=>{
					const target = e.target;


					if(target == crossProfile){
						actuality.style.display = "inline";
						userProfile.style.display ="none";

					}

				})
			}else{

				// Element display
				userProfile.style.display ="inline";
				actuality.style.display = "inline";

				// Element display none
				crossProfile.style.display ="none";
			}
		}

		mediaScreen(md);

		md.addListener(mediaScreen);

		deconnection.addEventListener('click', ()=> {
			sessionStorage.removeItem('userSession');
			window.location.href = "index.html";
		})


		// Get the data and send this to the html element
		let getData = JSON.parse(localStorage.getItem('userAccount'));
		let arr = [];

    // Add data to the Array
		for(let itm in getData){
			arr.push(getData[itm]);
		}
    userProfilePseudo.innerText = arr[0] + ' ' + arr[1];
    pseudoNav.innerText = arr[0];
		userProfileMail.innerText = arr[2];
		userProfileGender.innerText = arr[3];
		userProfileCity.innerText = arr[4];
		userProfileAge.innerText = arr[5] + ' years old';

		if(	sessionStorage.getItem('userSession') == undefined	){
			window.location.href = "index.html";
		}
	}

///////////////////// FORUM HTML //////////////////////////////
///////////////////////////////////////////////////////////////
