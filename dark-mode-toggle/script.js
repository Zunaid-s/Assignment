let togglebtn = document.querySelector("button");
let bdy = document.querySelector(".all");

if (localStorage.getItem("mode") === null) {
    localStorage.setItem("mode", "0");
} else {
    if (localStorage.getItem("mode") === "0") {
        bdy.style.backgroundColor = "#fbf9f7";
        bdy.style.color = "#0d0d0d";
        togglebtn.style.backgroundColor = "#fbf9f7";
        togglebtn.style.color = "#0d0d0d";
        togglebtn.style.borderColor = "#0d0d0d";
        localStorage.setItem("mode","0");
    } else if (localStorage.getItem("mode") === "1") {
        bdy.style.backgroundColor = "#0d0d0d";
        bdy.style.color = "#fbf9f7";
        togglebtn.style.borderColor = "#fbf9f7";
        togglebtn.style.backgroundColor = "#0d0d0d";
        togglebtn.style.color = "#fbf9f7";
    }
}
togglebtn.onclick = () =>{
    let mode = localStorage.getItem("mode");
    if(mode === "0"){
        bdy.style.backgroundColor = "#0d0d0d";
        bdy.style.color = "#fbf9f7";
        togglebtn.style.backgroundColor = "#0d0d0d";
        togglebtn.style.borderColor = "#fbf9f7";
        togglebtn.style.color = "#fbf9f7";
        localStorage.setItem("mode","1");
    }else{
        bdy.style.backgroundColor = "#fbf9f7";
        bdy.style.color = "#0d0d0d";
        togglebtn.style.backgroundColor = "#fbf9f7";
        togglebtn.style.borderColor = "#0d0d0d";
        togglebtn.style.color = "#0d0d0d";
        localStorage.setItem("mode","0");
    }

}