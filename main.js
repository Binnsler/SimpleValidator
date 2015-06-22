var isNumber = function(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
};

var userPhoneNumber = prompt("Please enter your phone number. We promise not to use it to steal your identity and/or rape you in your sleep. Please use XXX-XXX-XXXX.");

if(userPhoneNumber.charAt(3) !== "-" && userPhoneNumber.charAt(7) !== "-"){
	alert("Your phone number is not in a valid format.");
}

var userBirthDate = prompt("Please enter your birth date using the format XX/XX/XX.");

if(userBirthDate.charAt(2) !== "/" && userBirthDate.charAt(5) !== "-"){
	alert("Your date is not in a valid format.")
}

var userPostalCode = prompt("Please enter your postal code using the format XXXXX.");

if(!isNumber(userPostalCode)){
	alert("Your date is not in a valid format.");
}

var userState = prompt("Please enter your state using two letters all caps, i.e. 'CA'.");

if(userState.length !== 2){
	alert("You did not enter a valid state abreviation.");
}
else if(userState.toUpperCase() !== userState){
	alert("You need to use all caps for the state.");
}

var userMarried = prompt("Are you married? Please answer yes or no - caps doesn't matter.")

if(userMarried.toUpperCase() !== "YES" || userMarried.toUpperCase() !== "NO"){
	alert("We asked you a simple question. Are you married? Yes or no. You failed.");
}