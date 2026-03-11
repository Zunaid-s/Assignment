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
var strength = {
        0: "Worst ☹",
        1: "Bad ☹",
        2: "Weak ☹",
        3: "Good ☺",
        4: "Strong ☻"
}


nam.addEventListener('input', function(){
    jsn.name = nam.value;  // Fixed: use .value instead of .innerText
})
email.addEventListener('input', function(){
    jsn.email = email.value;  // Fixed: use .value instead of .innerText
})
phoneno.addEventListener('input',function(){
    jsn.phoneno = phoneno.value;  // Fixed: use .value instead of .innerText
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
        jsn.password = password.value;  // Fixed: use .value instead of .innerText
    }
});
var submitBtn = document.getElementById('submit');

// Add form submit event listener to save jsn to localStorage before page refresh
var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    localStorage.setItem('userData', JSON.stringify(jsn));
    // Allow the form to submit and refresh the page
});
