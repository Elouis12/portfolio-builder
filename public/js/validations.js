

function validateFields() {


    return validatePortfolioContainer() &
        validateAboutMeContainer() &
        validateExperienceContainer() &
        validateSkillsContainer() &
        validateProjectsContainer() &
        validateContactsContainer() &
        validateResumeInput();

}

function validatePortfolioContainer(){


    let portfolioDragContainer = document.getElementById("portfolio-drag-container");
    let portfolioIconFileInput = document.getElementById("portfolio-file-input");

    let portfolioName = document.getElementById("portfolio-name");

    let validateMainContainer = true;

    if( portfolioIconFileInput.value.trim() === "" ){

        validateMainContainer = false;
        portfolioDragContainer.children[1].classList.remove("hideVisibility");

    }else{

        portfolioDragContainer.children[1].classList.add("hideVisibility");

    }

    if( portfolioName.value.trim() === "" ){

        validateMainContainer = false;
        portfolioName.parentElement.children[2].classList.remove("hideVisibility");

    }else{
        portfolioName.parentElement.children[2].classList.add("hideVisibility");

    }

    if( !validateMainContainer ){

        portfolioDragContainer.closest('.section-container').children[0].classList.add("red-border")
    }else{

        portfolioDragContainer.closest('.section-container').children[0].classList.remove("red-border")

    }

    return validateMainContainer;

}


function validateAboutMeContainer()
{

    let aboutMeSummary = document.getElementById("about-me-summary");

    let validateMainContainer = true;

    if( aboutMeSummary.value.trim() === "" ){

        validateMainContainer = false;
        aboutMeSummary.parentElement.children[2].classList.remove('hideVisibility');

    }else{
        aboutMeSummary.parentElement.children[2].classList.add('hideVisibility');
    }

    if( !validateMainContainer ){

        aboutMeSummary.closest('.section-container').children[0].classList.add('red-border')
    }else{

        aboutMeSummary.closest('.section-container').children[0].classList.remove('red-border')

    }


    return validateMainContainer;

}

function validateExperienceContainer(){

    let experienceContainers = document.getElementsByClassName("experiences-container");


    let validateSectionContainer = true;
    let validateMainContainer = true;

    for( let x = 0; x < experienceContainers.length; x+=1 ){

        let inputsContainer = experienceContainers[x].children[1].children[1];

        // go through its inputs
        for( let y = 0; y < inputsContainer.children.length; y+=1 ){


            let exclamationMark = inputsContainer.children[y].children[2];
            let value = inputsContainer.children[y].children[1].value.trim();
            // if any of them are empty
            if( value === "" ){


                validateSectionContainer = false;
                validateMainContainer = false;
                exclamationMark.classList.remove("hideVisibility")

            }else{

                exclamationMark.classList.add("hideVisibility")

            }
        }

        // if false at last 1
        // 1. change the main container red border
        // 2. change its own container red border

        // else remove the borders or exclamation marks


        if( !validateSectionContainer ){

            // 2.
            experienceContainers[x].children[0].classList.add("red-border");


            validateSectionContainer = true; // reset it for next container used

        }else{

            // 2.
            experienceContainers[x].children[0].classList.remove("red-border");

        }

    }


    // add the container option after it loops through all
    if( experienceContainers.length >= 1 ){

        if( !validateMainContainer ){

            // 1.
            experienceContainers[0].closest('.section-container').children[0].classList.add("red-border")

        }else{

            // 1.
            experienceContainers[0].closest('.section-container').children[0].classList.remove("red-border")

        }

    }




    return validateMainContainer && validateSectionContainer;
}


function validateSkillsContainer(){

    let categoryContainer = document.getElementsByClassName("category-container");

    let validateMainContainer = true;
    let validCategoryContainer = true;
    let validSkillContainer = true;


    for( let x = 0; x < categoryContainer.length; x+=1 ){

// CATEGORY
        let categoryExclamationMark = categoryContainer[x].children[1].children[1].children[2];
        let categoryName = categoryContainer[x].children[1].children[1].children[1].value.trim();

        let categorySectionTitleDiv = categoryContainer[x].children[0];

        if( categoryName === "" ){

            validateMainContainer = false;
            validCategoryContainer = false;
        }

        if( !validCategoryContainer ){

            categoryExclamationMark.classList.remove("hideVisibility");
            categorySectionTitleDiv.classList.add('red-border');


        }else{

            categoryExclamationMark.classList.add("hideVisibility");
            categorySectionTitleDiv.classList.remove('red-border');

        }

// INDIVIDUAL SKILLS
        let skillsContainer = categoryContainer[x].children[1].children[2];


        for( let y = 0; y < skillsContainer.children.length - 1; y+=1 ){ // -1 because of the "add category" button we don't want to select it


            let skillExclamationMark = skillsContainer.children[y].children[1].children[1].children[2];
            let skillName = skillsContainer.children[y].children[1].children[1].children[1].value.trim();


            if( skillName === "" ){


                validateMainContainer = false;
                validSkillContainer = false;

                skillExclamationMark.classList.remove("hideVisibility")


            }else{
                skillExclamationMark.classList.add("hideVisibility")

            }

            // make category and skills red
            if( !validSkillContainer ){

                categorySectionTitleDiv.classList.add('red-border');

                skillsContainer.children[y].children[0].classList.add('red-border')

                validSkillContainer = true; // reset it for the next skill

            }else{

                // categorySectionTitleDiv.classList.remove('red-border');

                skillsContainer.children[y].children[0].classList.remove('red-border')

            }

        }
        validCategoryContainer = true; // reset it for the next category

    }


    // add the container option after it loops through all
    if( categoryContainer.length >= 1 ){

        if( !validateMainContainer ){

            // 1.
            categoryContainer[0].closest('.section-container').children[0].classList.add("red-border")

        }else{

            // 1.
            categoryContainer[0].closest('.section-container').children[0].classList.remove("red-border")

        }

    }


    return validateMainContainer && validCategoryContainer && validSkillContainer;

}


function validateProjectsContainer(){

    let projectsContainer = document.getElementsByClassName("project-container")

    let validateMainContainer = true;
    let validProjectContainer = true;


    for( let x = 0; x < projectsContainer.length; x+=1 ){

        let inputsContainer = projectsContainer[x].children[1].children[1];


        for( let y = 0; y < inputsContainer.children.length; y+=1 ){

            let projectExclamationMark = inputsContainer.children[y].children[2];
            let inputSection = inputsContainer.children[y].children[0].innerHTML;
            let value = inputsContainer.children[y].children[1].value.trim();

            if(
                (
                    inputSection === "Project Link" && value !== "" && !validateUrl(value)
                ) ||
                value === "" && inputSection !== "Project Link"
            ){

                validateMainContainer = false;
                validProjectContainer = false;

                projectExclamationMark.classList.remove("hideVisibility");

            }else{

                projectExclamationMark.classList.add("hideVisibility");
            }

        }

        if( !validProjectContainer ){

            // 2.
            projectsContainer[x].children[0].classList.add("red-border");


            validProjectContainer = true; // reset it for next container used

        }else{

            // 2.
            projectsContainer[x].children[0].classList.remove("red-border");

        }
    }


    if( projectsContainer.length >= 1 ){

        if( !validateMainContainer ){

            // 2.
            projectsContainer[0].closest('.section-container').children[0].classList.add("red-border");

        }else{

            // 2.
            projectsContainer[0].closest('.section-container').children[0].classList.remove("red-border");

        }

    }

    return validateMainContainer && validProjectContainer;
}


function validateContactsContainer(){

    let contactsContainer = document.getElementsByClassName("contacts-container")

    let validateMainContainer = true;
    let validContactsContainer = true;

    for( let x = 0; x < contactsContainer.length; x+=1 ){

        let contactExclamationMark = contactsContainer[x].children[1].children[2].children[2];
        let value = contactsContainer[x].children[1].children[2].children[1].value.trim();

        let iconSelection = contactsContainer[x].children[1].children[1].children[0].children[0].children[0].children[0].getAttribute("class").split(" ")[1];

        if(
            (
                iconSelection === "fa-envelope" && value !== "" && !validateEmail(value)
            )
                ||
            (
                iconSelection === "fa-link" && value !== "" && !validateUrl(value)
            )
                ||
            value === ""

        ){

            validateMainContainer = false;
            validContactsContainer = false;

            contactExclamationMark.classList.remove('hideVisibility');

        }else{

            contactExclamationMark.classList.add('hideVisibility');
        }


        if( !validContactsContainer ){

            // 2.
            contactsContainer[x].children[0].classList.add("red-border");


            validContactsContainer = true; // reset it for next container used

        }else{

            // 2.
            contactsContainer[x].children[0].classList.remove("red-border");

        }
    }

    if( contactsContainer.length >= 1  ){

        if( !validateMainContainer ){

            // 2.
            contactsContainer[0].closest('.section-container').children[0].classList.add("red-border");

        }else{

            // 2.
            contactsContainer[0].closest('.section-container').children[0].classList.remove("red-border");

        }
    }

    return validateMainContainer && validContactsContainer;
}

function validateResumeInput(){

    let resumeInput = document.getElementById("resume-input");

    let validateResumeContainer = true;
    // RESUME
    if( resumeInput.value.trim() === "" ){
        // show error icon
        resumeInput.parentElement.children[2].classList.remove("hideVisibility")

        resumeInput.closest(".section-container").children[0].classList.add("red-border");

        validateResumeContainer = false;

    } else {

        // hide error icon
        resumeInput.parentElement.children[2].classList.add("hideVisibility")

        resumeInput.closest(".section-container").children[0].classList.remove("red-border");

    }

    return validateResumeContainer;
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
