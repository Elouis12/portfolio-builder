export class Template{

    #_about; // elements to insert for about
    #_experiences; // elements to insert for experiences
    #_skills; // elements to insert for skills
    #_projects; // elements to insert for projects
    #_contact; // elements to insert for contact
    #_resume; // elements to insert for resume

    #_navigationBar;

    #_projectImages = [];


    constructor() {

        // WHEN THE USER CLICK THE CREATE BUTTON
        document.getElementById("create-button").addEventListener('click', async ()=>{

            // arrow function allows for scoping / level access of private variables

            if( validateFields() /*true*/ ){ // if all field are entered then get the fields

                this.getFields();

                // 1. make request to download zip file
                await downloadPortfolio();

                // 2. clear local storage
                // localStorage.removeItem("resume")
                // localStorage.removeItem("contacts")
                // localStorage.removeItem("projects")
                // localStorage.removeItem("about")
                // localStorage.removeItem("navigationBar")
                // localStorage.removeItem("experiences")

                // 3. send request to server to delete all files from /images and /media


            }else{

                // just update the iframe but don't send the zip folder
                this.getFields();

            }

        });


        const resumeFile = document.getElementById('resume-input');

        let resume;
        const handleFiles = async () => {

            resume = [...resumeFile.files];
            this.#_resume = resume;
            await sendResume();

            console.log(resume);
            localStorage.setItem( "resume", JSON.stringify(this.#_resume ));

            iframe();
        };
        resumeFile.addEventListener("change", handleFiles);// listens for when user adds pdf file

    }

    #getNavigationBar(){


        let navArray = [];

        let navObject = {};

        let navName = document.getElementById("nav-name");

        // navObject.Icon = navMeIcon;
        navObject.navTitle = navName.value;

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

        const aboutMeIcon = document.getElementById("about-me-drop-down");
        const aboutMeSummary = document.getElementById("about-me-summary");

        // aboutObject.Icon = aboutMeIcon;
        aboutObject.aboutMeSummary = aboutMeSummary.value;

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

            experienceObject.icon = experiences[x].children[1].children[0].children[0].children[0].children[0].children[0].getAttribute("class"); // store the class
            experienceObject.jobTitle = experiences[x].children[1].children[1].children[1].value;
            experienceObject.companyName = experiences[x].children[1].children[2].children[1].value;
            experienceObject.location = experiences[x].children[1].children[3].children[1].value;
            experienceObject.summary = experiences[x].children[1].children[4].children[1].value;
            experienceObject.date = experiences[x].children[1].children[5].children[1].value;

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

            categoryObject.categoryName = categories[x].children[1].children[1].children[1].value;

            let skillDiv = categories[x].children[1].children[2]; // id = "skill"

            let skillsArray = []; // to add skills
            for( let y = 0; y < skillDiv.children.length - 1; y+=1 ){ // - 1 so we don't get the add skill button


                // each individual skill
                let skill = skillDiv.children[y].children[1].children[1].children[1].value;

                skillsArray.push( skill );

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

        // make each experience an object
        for( let x = 0; x < projects.length; x += 1 ) {

            let projectObject = {};

            projectObject.projectImage = this.#_projectImages[x];
            projectObject.projectTitle = projects[x].children[1].children[1].children[1].value;
            projectObject.projectLink = projects[x].children[1].children[2].children[1].value;
            projectObject.projectSummary = projects[x].children[1].children[3].children[1].value;

            projectsArray.push( projectObject );
        }

        this.#_projects = projectsArray;


        localStorage.setItem( "projects", JSON.stringify(this.#_projects ));

        return this.#_projects;
    }


    #getResume() {

        const resumeFile = document.getElementById('resume-input');

        let resume;
        const handleFiles = () => {

            resume = [...resumeFile.files];
            this.#_resume = resume;
        };
        resumeFile.addEventListener("change", handleFiles);// listens for when user adds pdf file


        localStorage.setItem( "resume", JSON.stringify(this.#_resume ));

        return this.#_resume;
    }

    #getContact() {

        let contactArray = [];

        let contacts = document.getElementsByClassName("contacts-container");

        for( let x = 0; x < contacts.length; x += 1 ) {

            let contactObject = {};

            let contact = contacts[x].children[1].children[2].children[1].value;

            contactObject.icon = contacts[x].children[1].children[0].children[0].children[0].children[0].children[0].getAttribute("class")

            contactObject.contact = contact;

            contactObject.contactType = contacts[x].children[1].children[1].children[0].children[0].children[0].children[0].getAttribute("class");

            contactArray.push( contactObject );
        }

        this.#_contact = contactArray;

        localStorage.setItem( "contacts", JSON.stringify(this.#_contact) );

        return this.#_contact;

    }

    getFields(){

        this.#getNavigationBar();
        this.#getAbout();
        this.#getExperiences();
        this.#getSkills();
        this.#getProjects();
        this.#getResume();
        this.#getContact();

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


}

function main(){

    let template = new Template();

}

main();