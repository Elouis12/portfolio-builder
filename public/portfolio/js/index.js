
const showOverlay = () => {

    let overlayElement = document.getElementById("overlayElement")

    overlayElement.className = "overlay";
}

const closeOverlay = () => {

    let overlayElement = document.getElementById("overlayElement")


    // e.classList.remove('overlay');
        overlayElement.className = "hide";
}


let darkModeTheme = true; // dark mode initially

const darkMode = () => {


    document.body.classList.toggle("darkModeBody");

    let themeIcons = document.getElementsByClassName("themeIcon");

    for( let x = 0; x < themeIcons.length; x+=1 ){

        themeIcons[x].classList.toggle("darkModeIcon");

    }

    let titles = document.getElementsByClassName("section-title");

    for( let x = 0; x < titles.length; x+=1 ){

        titles[x].classList.toggle("dark-mode-section-title");

    }


    let nightTheme = document.getElementById("nightTheme");

    nightTheme.getAttribute("class").includes("fa-cloud-moon") ?
    nightTheme.setAttribute("class", "fa-solid fa-cloud-sun") :
    nightTheme.setAttribute("class", "fa-solid fa-cloud-moon")

    let logo = document.getElementById("logo");
    logo.style.color = "hsl(0, 0%, 100%)";


    let dropdown = document.getElementById("nav-drop-down");

    // dropdown.classList.toggle("dark-mode-section-title")

    darkModeTheme = !darkModeTheme;

    localStorage.setItem("darkMode", darkModeTheme);

}


const setTheme = () => {

    let lightMode = localStorage.getItem("darkMode");

    if( lightMode === "false" ){

        darkMode();
    }
}


window.addEventListener("scroll", ()=>{

    let navbar = document.getElementById("nav-container");
    let dropdown = document.getElementById("nav-drop-down");

    // alert(window.scrollY)
    if (window.scrollY > 10 ){

        navbar.classList.add('nav-container-scroll')
        // dropdown.classList.remove("dark-mode-section-title")

    }else{

        navbar.classList.remove('nav-container-scroll')
        // dropdown.classList.add("dark-mode-section-title")

    }

})