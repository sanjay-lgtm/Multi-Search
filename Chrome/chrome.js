let toggle = document.getElementById("toggle"); // Remove the # symbol
let dark = document.querySelector(".dark")
let footer = document.querySelector(".footer")
let searchField = document.querySelector(".search-feild")
let btn = document.querySelector('.btn')
let btn1 = document.querySelector('.btn1')
// let img = document.querySelector('img')
let findOut = document.querySelector(".find-out")
let languages = document.querySelector('.languages')
let hrBreak = document.querySelector(".break")
let googleSearch = document.querySelector("#search")
//Dark mode on
function darkModeOn() {
    dark.style.backgroundColor = "rgb(36,35,35)";
    footer.style.backgroundColor = "rgb(31,30,30)";
    dark.style.color = "lightgray";
    footer.style.color = "gray";
    searchField.style.backgroundColor = "rgb(36,35,35)";
    searchField.style.color = "white";
    searchField.style.border = "1px solid rgb(95,95,95)";
    btn.style.backgroundColor = "rgb(53,52,52)";
    btn1.style.backgroundColor = "rgb(53,52,52)";
    btn.style.color = 'lightgray';
    btn1.style.color = 'lightgray';
    // img.src = 'menu(2).png';
    findOut.style.color = "rgb(39,124,223)";
    languages.style.color = "rgb(39,124,223)";
    hrBreak.style.border = '1px solid rgb(40,40,40)';
    localStorage.setItem("darkMode","enabled")
}

//dark mode off

function darkModeOff() {
    dark.style.backgroundColor = "white";
    footer.style.backgroundColor = "rgb(238,238,238)";
    dark.style.color = "black";
    footer.style.color = "rgb(102,100,100)";
    searchField.style.backgroundColor = "white";
    searchField.style.color = "black";
    btn.style.backgroundColor = "rgb(248,248,248)";
    btn1.style.backgroundColor = "rgb(248,248,248)";
    btn.style.color = 'rgb(88,88,88)';
    btn1.style.color = 'rgb(88,88,88)';
    // img.src = 'menu.png';
    findOut.style.color = "blue";
    languages.style.color = "blue";
    hrBreak.style.border = '1px solid rgb(223,223,223)';
    localStorage.setItem("darkMode",null)
}

//Darkmode toggle save in localstorage
let saveDarkMode = localStorage.getItem("darkMode");
if(saveDarkMode === "enabled"){
    toggle.checked = true;
    darkModeOn();
}


//toggle switch on or off
toggle.addEventListener("click", function() {
    if (toggle.checked == true) {
        console.log("OK")
        darkModeOn();
    } else {
        darkModeOff();
    }
});

//add search functiality
function search(){
    let input = searchField.value;
    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1CHBD_enIN1035IN1035&oq=" + input + "&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyCggBEC4YsQMYgAQyDQgCEC4YgwEYsQMYgAQyCggDEAAYsQMYgAQyCggEEAAYsQMYgAQyBwgFEAAYgAQyDQgGEAAYgwEYsQMYgAQyBwgHEAAYgAQyDQgIEAAYgwEYsQMYgAQyEAgJEAAYgwEYsQMYgAQYigXSAQkzMzMzajBqMTWoAgmwAgE&sourceid=chrome&ie=UTF-8"
}

searchField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if (searchField.value === "") {
            console.log("Please type something!!");
        } else {
            search();
        }
    }
});
