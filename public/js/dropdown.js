function closeSection(element){


    // add arrow up or down
    if( element.children[1].classList.contains("fa-angle-up") ){ // WHEN ARROW UP

        // CLICKED ON ICON LIST - this keeps the icon box there but still hidden
        element.children[1].remove(); // removes the current arrow angle

        element.insertAdjacentHTML("beforeend", `<i class="fa-solid fa-angle-down"></i>`)

        if(
            element.children[0].innerText === "Icons" ||
            element.children[0].innerText === "Contact Type"

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
            element.children[0].innerText === "Icons" ||
            element.children[0].innerText === "Contact Type"

        ){

            element.parentElement.children[1].classList.remove("hideVisibility");
            return;

        }

        // element.parentElement.children[1].style.display = "block";
        element.parentElement.children[1].classList.remove("hide");


    }


}