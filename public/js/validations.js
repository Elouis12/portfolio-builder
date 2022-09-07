function validateFields() {

    let inputsDiv = document.getElementsByClassName("title-to-border")

    let resumeInput = document.getElementById("resume-input");


    let validated = true;

    // RESUME
    if( resumeInput.value === "" ){
        // show error icon
        resumeInput.parentElement.children[2].classList.remove("hideVisibility")

        resumeInput.closest(".section-container").children[0].classList.add("red-border");

        validated = false;

    } else {

        // hide error icon
        resumeInput.parentElement.children[2].classList.add("hideVisibility")

        resumeInput.closest(".section-container").children[0].classList.remove("red-border");

    }


    for (let x = 0; x < inputsDiv.length; x += 1) {

        let input = inputsDiv[x].children[1];

        // ex. "skills" will highlighted
        let parentSectionTitle = input.closest('.section-container').children[0];

        // ex. "category 1" will be highlighted
        let childSectionTitle = input.parentElement.parentElement.parentElement.children[0];


        let contactType;

        let value = input.value.trim();

        if (inputsDiv[x].children[0].innerHTML === "Contact") {

            contactType = inputsDiv[x].parentElement.children[1].children[0].children[0].children[0].children[0].getAttribute("class");
        }


        if (

            (
                inputsDiv[x].children[0].innerHTML === "Contact" &&
                (
                    contactType === "fa-solid fa-envelope" && !validateEmail(value) ||
                    contactType === "fa-solid fa-link" && !validateUrl(value)

                )
            )

                ||

            (
                inputsDiv[x].children[0].innerHTML === "Project Link"
                &&
                !validateUrl(value)

            )

                ||
            (
                value === "" &&
                (
                    input.getAttribute("id") !== "nav-name"
                        ||
                    input.getAttribute("id") !== "project-link"
                )
            )


        ) {

            // show error icon
            inputsDiv[x].children[2].classList.remove("hideVisibility")

            parentSectionTitle.classList.add("red-border");

            childSectionTitle.classList.add("red-border");


            validated = false;

        } else {

            // hide error icon
            inputsDiv[x].children[2].classList.add("hideVisibility");

            parentSectionTitle.classList.remove("red-border");

            childSectionTitle.classList.remove("red-border");

        }
    }

    return validated;

}

const validateEmail = (email) => {

    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validateUrl = (url) => {

    return String(url)
        .toLowerCase()
        .match(
            /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/);
};
