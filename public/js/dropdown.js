function closeSection(element){


    // add arrow up or down
    if( element.children[1].classList.contains("fa-angle-up") ){ // WHEN ARROW UP

        // CLICKED ON ICON LIST - this keeps the icon box there but still hidden
        element.children[1].remove(); // removes the current arrow angle

        element.insertAdjacentHTML("beforeend", `<i class="fa-solid fa-angle-down"></i>`)

        if(
            element.getAttribute("class") === "drop-down-select-div"


        ){

            element.parentElement.children[1].classList.add("hideVisibility");
            return;

        }

        element.parentElement.children[1].classList.add("hide");

    }else{ // WHEN ARROW DOWN

        element.children[1].remove(); // removes the current arrow angle
        element.insertAdjacentHTML("beforeend", `<i class="fa-solid fa-angle-up"></i>`)

        // CLICKED ON ICON LIST - this shows the icon box
        if(
            element.getAttribute("class") === "drop-down-select-div"

        ){

            element.parentElement.children[1].classList.remove("hideVisibility");
            return;

        }

        // element.parentElement.children[1].style.display = "block";
        element.parentElement.children[1].classList.remove("hide");


    }


}


function iconSelect(element){


    let icon = element.children[0];

        element.parentElement.parentElement.children[0].children[0].children[0].setAttribute(
            "class",
            `${
                icon.getAttribute("class").slice(0, icon.getAttribute("class").length )
            }`
        )



}