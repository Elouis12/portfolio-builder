
let validated = true;

function validateFields() {

    let inputsDiv = document.getElementsByClassName("title-to-border")


    validateResumeInput();


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


        if( input.parentElement.children[0].innerHTML === "Navigation Title" ){

            continue;
        }

        if(
                inputsDiv[x].children[0].innerHTML === "Project Link" && // don't select project AS long as they didn't give a value
                input.value === ""
         ){

            // it might be the case the red button is applied
            if( !inputsDiv[x].children[2].getAttribute("class").includes("hideVisibility") ){

                inputsDiv[x].children[2].classList.add("hideVisibility");

            }

            // if any of it's others (project title, project summary ) have a red exclamation then remove any potential red border from section title

/*            let container = inputsDiv[x];
            let projectTitleDiv = container.children[1];
            let projectSummaryDiv = container.children[3];

            if(
                !projectTitleDiv.children[2].getAttribute("class").includes("hideVisibility") ||
                !projectSummaryDiv.children[2].getAttribute("class").includes("hideVisibility")

            ){

            }*/
            continue;
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
                value === ""


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

    validateFavIconInput(); // putting it at the end prevents the portfolio title input field from removing the 'red-border' style being applied

    return validated;

}

function validateResumeInput(){

    let resumeInput = document.getElementById("resume-input");
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

    return validated;
}
function validateFavIconInput(){

    let favIconInput = document.getElementById("portfolio-file-input");
    let favIconInputMainContainer = favIconInput.closest('.section-container')
    let favIconInputContainer = favIconInput.closest('.fav-icon-container')

    if( favIconInput.value === "" ){


        // show error icon
        favIconInputContainer.children[ favIconInputContainer.children.length - 1 ].classList.remove("hideVisibility")

        favIconInputMainContainer.children[0].classList.add("red-border");

        validated = false;

    }else{

        // hide error icon
        favIconInputContainer.children[ favIconInputContainer.children.length - 1 ].classList.add("hideVisibility")

        // remove border
        favIconInputMainContainer.children[0].classList.remove("red-border")

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
