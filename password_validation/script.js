
var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');
var nam = document.getElementById('name');
var email = document.getElementById('email');
var phoneno = document.getElementById('phoneno');

let jsn = {
    name:"",
    email:"",
    phoneno:"",
    password:""
}
let strength = {
	0: "Worst ☹",
	1: "Bad ☹",
	2: "Weak ☹",
	3: "Good ☺",
	4: "Strong ☻"
}


nam.addEventListener('input', function(){
    jsn.name = nam.value;
})
email.addEventListener('input', function(){
    jsn.email = email.value; 
})
phoneno.addEventListener('input',function(){
    jsn.phoneno = phoneno.value;
})


password.addEventListener('input', function()
{
    var val = password.value;
    var result = zxcvbn(val);

    meter.value = result.score;
   
    if(val !== "") {
        text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span>"; 
    }
    else {
        text.innerHTML = "";
    }
    if (meter.value <= 2) {
        console.log("Enter a better password.")
    }else{
        jsn.password = password.value;
    }
});
let submitBtn = document.getElementById('submit');
let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    localStorage.setItem('userData', JSON.stringify(jsn));
});
