function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted successfully!');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



// user compliment
function userCompliment() {
	alert("Lookin' Sharp!");
}

let catPic = document.querySelector('#kittens');

catPic.addEventListener('mouseover', userCompliment);



//color button
function myFavoriteColor() {
	alert("My favorite color is green and red.");
}

let faveColor = document.querySelector('#color');

faveColor.addEventListener('click', myFavoriteColor);



//place button
function myFavoritePlace() {
	alert("My favorite place is the beach.");
}

let favePlace = document.querySelector('#place');

favePlace.addEventListener('click', myFavoritePlace);



// ritual button
function myFavoriteRitual() {
	alert("My favorite ritual is taking a daily walk.");
}

let faveRitual = document.querySelector('#ritual');

faveRitual.addEventListener('click', myFavoriteRitual);