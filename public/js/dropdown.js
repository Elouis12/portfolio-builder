function closeSection(element){




    // add arrow up or down
    if( element.children[1].classList.contains("fa-angle-up") ){

        // clicked on icon list - this keeps the icon box there but still hidden

        element.children[1].remove(); // removes the current arrow angle

        element.insertAdjacentHTML("beforeend", `<i class="fa-solid fa-angle-down"></i>`)

        if( element.children[0].innerText === "Icons" ){

            element.parentElement.children[1].style.visibility = "hidden";
            return;

        }

        element.parentElement.children[1].style.display = "none";

    }else{

        element.children[1].remove(); // removes the current arrow angle
        element.insertAdjacentHTML("beforeend", `<i class="fa-solid fa-angle-up"></i>`)

        // clicked on icon list - this shows the icon box
        if( element.children[0].innerText === "Icons" ){

            element.parentElement.children[1].style.visibility = "visible";
            return;

        }

        element.parentElement.children[1].style.display = "block";

    }


}