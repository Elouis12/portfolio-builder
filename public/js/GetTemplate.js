export class GetTemplate {

    #_about; // elements to insert for about
    #_experiences; // elements to insert for experiences
    #_skills; // elements to insert for skills
    #_projects; // elements to insert for projects
    #_contact; // elements to insert for contact
    #_resume; // elements to insert for resume

    #_navigationBar;

    #_projectImages = [];
    #_portfolio;
    #_footerName;


    #dateArray = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]



    constructor() {

    }


    addEventsToListeners(){

        // set event on change to input file
        this.#getResume();

        // WHEN THE USER CLICK AN INPUT
        let inputs = document.getElementsByClassName("title-to-border-element");

        for( let x = 0; x < inputs.length; x+=1 ){

            inputs[x].addEventListener("keyup", ()=>{

                this.getFields();
                document.getElementById('embed').src += '';

            })
        }

        // WHEN USER CLICKS ON DROP DOWN SELECTION
        let dropdown = document.getElementsByClassName("drop-down-options-div");

        for( let x = 0; x < dropdown.length; x+=1 ){

            let item = dropdown[x];
            for( let y = 0; y < item.children.length; y+=1  ){

                item.children[y].addEventListener("click", ()=>{

                    this.getFields();
                    document.getElementById('embed').src += '';

                })
            }
        }

        // WHEN THE USER CLICK THE CREATE BUTTON
        document.getElementById("create-button").addEventListener('click', async (e)=>{

            // arrow function allows for scoping / level access of private variables

            if( validateFields() ){ // if all field are entered then get the fields


                let modalContainer = document.getElementById("modal-height");

                let modalText = document.getElementById("modal-text");

                modalText.innerHTML = "Are you sure you want to create your portfolio?"

                modalContainer.classList.remove("hide");

                // add event listener to yes button so when user clicks

                let yesButton = document.getElementById("yes-button");
                let noButton = document.getElementById("no-button");

                yesButton.addEventListener("click", ()=>{

                    // prevent user from clicking more than once
                    let createButton = document.getElementById("create-button");
                    createButton.disabled = true;
                    createButton.classList.remove('create-button');
                    createButton.classList.add('disabled-button');

                    this.getFields(); // saves to local storage to update page

                    localStorage.setItem("templateDownload", true);

                    // refresh embed one last time so html we get latest version
                    // and so we can see the 'templateDownload local storage'
                    document.getElementById('embed').src += '';



                    // it's sending the HTML before we can remove the scripts from the other file
                    // so a quick way around is to set a time out
                    // we need to remove the scripts because of localstorage and just functionalities


                    setTimeout(async ()=>{

                        // 1. send to html to be written to the template file
                        await htmlContent(

                            `
                        <!DOCTYPE html>
                        <html lang="en" id="html">
                            ${localStorage.getItem("htmlContent")}
                        </html>
                    `

                        );

                        // 2. let teh browser know we don't want to remove files on refresh or unload while downloading file
                        // localStorage.setItem("downloadTemplate");

                        // 3. make request to download zip file
                        await downloadPortfolio();


                        // 4. clear local storage
                        removeLocalStorage();

                        // localStorage.removeItem("downloadTemplate");

                        // 5. refresh the current page and reset input fields (firefox keeps them)
                        // window.location.reload();
                        /*                let inputs = document.getElementsByClassName("inputs");

                                        for( let x= 0; x < inputs.length; x+=1 ){

                                            inputs[x].reset();
                                        }*/


                        // 6. remove files created from server
                        // await removeFiles();
                    }, 500)

                    // hide the modal
                    modalContainer.classList.add("hide");

                    // send user to page to show how to host it
                    // seems like i have to wait for it to download and then I can go to the page
                    setTimeout(()=>{

                        window.location.href = "/#host";
                    }, 1000)


                })

                noButton.addEventListener("click", ()=>{

                    // remove event from yes and no

                    // hide modal

                    modalContainer.classList.add("hide")

                })

                /* FIX ISSUE WHERE CLICKING ON CONTAINER STILL REMOVE THE ENTIRE MODAL */
                /*    modalContainer.addEventListener("click", ()=>{

                        // remove event from yes and no

                        // hide modal

                        modalContainer.classList.add("hide")

                    })*/

            }

        });

    }


    #getPortfolio(){


        let portfolioObject = {};

        let portfolioName = document.getElementById("portfolio-name");

        portfolioObject.portfolioTitle = portfolioName.value.trim();

        this.#_portfolio = portfolioObject;

        localStorage.setItem( "portfolioTitle", JSON.stringify(this.#_portfolio ));

        return this.#_portfolio;


    }

    #getNavigationBar(){


        let navArray = [];

        let navObject = {};

        let navName = document.getElementById("nav-name");

        // navObject.Icon = navMeIcon;
        navObject.navTitle = navName.value.trim();

        navArray.push( navObject );

        this.#_navigationBar = navArray;

        localStorage.setItem( "navigationBar", JSON.stringify(this.#_navigationBar ));

        return this.#_navigationBar;

        // check what topics the user chose to add
        // ex. user enter a skill, then add a skill button to navbar

    }

    #getAbout() {

        let aboutArray = [];

        let aboutObject = {};

        const aboutMeIc = document.getElementById("about-me-drop-down").children[0].children[0].children[0];
        const aboutMeSummary = document.getElementById("about-me-summary");

        aboutObject.aboutMeIcon = aboutMeIc.getAttribute("src");


        aboutObject.aboutMeSummary = aboutMeSummary.value.trim();

        aboutArray.push( aboutObject );

        this.#_about = aboutArray;

        localStorage.setItem( "about", JSON.stringify(this.#_about ));

        return this.#_about;
    }

    // GRAB ALL INFO ABOUT USER'S EXPERIENCE
    #getExperiences() {

        let experienceArray = [];

        let experiences = document.getElementsByClassName("experiences-container");

        // make each experience an object
        for( let x = 0; x < experiences.length; x += 1 ){

            let experienceObject = {};

            experienceObject.icon = experiences[x].children[1].children[0].children[0].children[0].children[0].children[0].getAttribute("src").slice(1); // store the class
            experienceObject.jobTitle = experiences[x].children[1].children[1].children[0].children[1].value.trim();
            experienceObject.companyName = experiences[x].children[1].children[1].children[1].children[1].value.trim();
            experienceObject.location = experiences[x].children[1].children[1].children[2].children[1].value.trim();
            experienceObject.summary = experiences[x].children[1].children[1].children[3].children[1].value.trim();

            let date = experiences[x].children[1].children[1].children[4].children[1].value.trim();

            let convertedDate = this.#convertDate(date);

            experienceObject.date = convertedDate;

            experienceArray.push( experienceObject );
        }

        this.#_experiences = experienceArray;

        localStorage.setItem( "experiences", JSON.stringify(this.#_experiences ));

        return this.#_experiences;
    }

    #getSkills() {

        let categoriesArray = [];


        let categories = document.getElementsByClassName("category-container");

        for( let x = 0; x < categories.length; x+=1 ){

            let categoryObject = {};

            categoryObject.categoryName = categories[x].children[1].children[1].children[1].value.trim();
            categoryObject.categoryIcon = categories[x].children[1].children[0].children[0].children[0].children[0].children[0].getAttribute("src").slice(1)

            let skillDiv = categories[x].children[1].children[2]; // id = "skill"

            let skillsArray = []; // to add skills
            for( let y = 0; y < skillDiv.children.length - 1; y+=1 ){ // - 1 so we don't get the add skill button


                let skillAndIcon = [];

                // each icon for that skill selected
                let skillIcon = skillDiv.children[y].children[1].children[0].children[0].children[0].children[0].children[0].getAttribute("src").slice(1); // slice starting index 1 to remove extra . in ../images/icons


                // each individual skill
                let skill = skillDiv.children[y].children[1].children[1].children[1].value.trim();

                skillAndIcon.push( skillIcon )
                skillAndIcon.push( skill )

                skillsArray.push( skillAndIcon );

            }
            categoryObject["skills"] = skillsArray;

            categoriesArray.push( categoryObject );

        }

        this.#_skills = categoriesArray;

        localStorage.setItem( "skills", JSON.stringify(this.#_skills ));

        return this.#_skills;

    }

    #getProjects() {

        let projectsArray = [];

        let projects = document.getElementsByClassName("project-container");

        // make each project an object
        for( let x = 0; x < projects.length; x += 1 ) {

            let projectObject = {};

            projectObject.projectImage = this.#_projectImages[x];
            projectObject.projectTitle = projects[x].children[1].children[1].children[0].children[1].value.trim();
            projectObject.projectLink = projects[x].children[1].children[1].children[1].children[1].value.trim();
            projectObject.projectSummary = projects[x].children[1].children[1].children[2].children[1].value.trim();

            projectsArray.push( projectObject );
        }

        this.#_projects = projectsArray;


        localStorage.setItem( "projects", JSON.stringify(this.#_projects ));

        return this.#_projects;
    }


    #getResume() {


        // RESUME SELECT BUTTON
        let resumeUploadButton = document.getElementById("resume-button")
        const uploadResume = (element) => {

            element.currentTarget.parentElement.children[1].click();
        }

        resumeUploadButton.addEventListener("click", uploadResume)



        // RESUME INPUT FILE BUTTON
        const resumeInputFile = document.getElementById('resume-input');

        let resume;
        const handleFiles = async (element) => {

            resume = [...element.currentTarget.files];

            // validate file is pdf
            let file = element.currentTarget
            let filePath = file.value; //getting selected file type


            let filePathArray = filePath.split("."); //getting selected file type
            let fileType = filePathArray[ filePathArray.length - 1 ]; //getting selected file type
            let validExtensions = "pdf"; //adding some valid pdf extension
            if ( fileType !== validExtensions ) { //if user selected file is an image file

                alert("This is not a PDF File!");
                file.value = ''; // displays 'No file selected.'

            }else{

                // send the resume to be uploaded
                await sendResume();

                // save the resume to variable
                this.#_resume = resume;
            }

            // refresh embed iframe
            document.getElementById('embed').src += '';

            localStorage.setItem( "resumeName", file.value/*JSON.stringify(this.#_resume )*/);

        };
        resumeInputFile.addEventListener("change", handleFiles);// listens for when user adds pdf file

        return this.#_resume;
    }

    #getContact() {

        let contactArray = [];

        let contacts = document.getElementsByClassName("contacts-container");

        for( let x = 0; x < contacts.length; x += 1 ) {

            let contactObject = {};

            let contact = contacts[x].children[1].children[1].children[1].value.trim();

            contactObject.icon = contacts[x].children[1].children[0].children[0].children[0].children[0].children[0].getAttribute("src").slice(1);

            contactObject.contact = contact;

            // get contact type

            let contactType = "";
            if( validateUrl(contact) ){

                contactType = "url"

            }else if( validateEmail(contact) ){

                contactType = "email"
            }

            contactObject.contactType = contactType;

            contactArray.push( contactObject );
        }

        this.#_contact = contactArray;

        localStorage.setItem( "contacts", JSON.stringify(this.#_contact) );

        return this.#_contact;

    }

    #getFooter(){

        let footerName = document.getElementById("footer-name");

        this.#_footerName = footerName.value.trim();

        localStorage.setItem( "footerName", JSON.stringify(this.#_footerName) );

    }

    getFields(){

        this.#getPortfolio();
        this.#getNavigationBar();
        this.#getAbout();
        this.#getExperiences();
        this.#getSkills();
        this.#getProjects();
        // this.#getResume();
        this.#getContact();
        this.#getFooter();

        this.#getSectionsFilled();
    }

    #getSectionsFilled(){


        // for experiences, skills, and projects
        let addButtons = document.getElementsByClassName("add-section");

        let sectionsNotAdded = {};

        for( let x = 0; x < addButtons.length; x+=1 ){

            let sectionContainers = addButtons[x].closest(".section-container");


            if( sectionContainers.children[1].children.length === 1  ){ // has section title AND add button only then we didn't add to the section

                let name = sectionContainers.children[0].children[0].children[1].innerHTML.toLowerCase();

                sectionsNotAdded[ name ] = false;
            }
        }
        // add it to local storage so later we can check which sections were added
        localStorage.setItem( "sections", JSON.stringify(sectionsNotAdded) )

    }


    #convertDate(date){

        if( date !== ""){

            let splitDate = date.split("-")
            let firstDate = splitDate[0];
            let secondDate = splitDate[1];

            let firstDateMonth = this.#dateArray[ parseInt(firstDate.split("/")[0]) - 1 ]; // ex. 10 -> october
            let firstDateDay = firstDate.split("/")[1];
            let firstDateYear = firstDate.split("/")[2];

            let secondDateMonth = this.#dateArray[ parseInt(secondDate.split("/")[0]) - 1 ];
            let secondDateDay = secondDate.split("/")[1];
            let secondDateYear = secondDate.split("/")[2];


            return `${firstDateMonth} ${firstDateDay} ${firstDateYear/*.slice(2)*/} - ${secondDateMonth} ${secondDateDay} ${secondDateYear/*.slice(2)*/}`

        }

        return "";

    }


}

function main(){

    let template = new GetTemplate();

    template.addEventsToListeners();

}

main();