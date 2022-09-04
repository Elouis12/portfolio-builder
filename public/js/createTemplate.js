class CreateTemplate{

    // when we load the actual html page it will set thee values to the portfolio html file
    constructor(){

        this.#setNavigationBarName();
        this.#setAboutMe();
        this.#setExperiences();
        this.#setSkills();
        this.#setProjects();
        this.#setResume();
        this.#setContact();

        this.#removeUnusedSections();

        // clear local storage

        // this.#clearLocalStorage()

    }


    #setNavigationBarName(){

        let logo = document.getElementById("logo");
        let name =  JSON.parse(localStorage.getItem("navigationBar"));
        logo.insertAdjacentHTML("beforeend",name[0].navTitle)
    }

    #setAboutMe(){

        let aboutMe = document.getElementById("about-summary");

        let summary =  JSON.parse(localStorage.getItem("about"));
        aboutMe.insertAdjacentHTML("beforebegin",summary[0].aboutMeSummary)
    }

    #setExperiences(){


        let experienceContainer = `
            
        <div class="container darker-card">

        <i  class="fa-solid fa-arrows-spin themeIcon experience-icon"></i>
        <!--    <i class="fa-solid fa-user themeIcon"></i>-->

        <div class="section-info" >
            <div class="title-and-date experience-title-container">
                
            </div>
            <div class="company-name-and-location experience-title-container">

            </div>
            <p class="job-summary">

            </p>

        </div>
    </div>
        
        `
        let experiences = JSON.parse( localStorage.getItem("experiences") );

        let experienceDiv = document.getElementById("experiences");

        for( let x = 0; x < experiences.length; x+=1 ){

            // insert into the HTML
            experienceDiv.insertAdjacentHTML("beforeend", experienceContainer);



// add relevant info to the HTML container

            // ICON
            let experienceIcon = document.getElementsByClassName("experience-icon")
            experienceIcon[ experienceIcon.length - 1 ].setAttribute("class", `${experiences[x].icon} themeIcon icon`)


            // JOB TITLE AND DATE
            let titleAndDate = document.getElementsByClassName("title-and-date");


            titleAndDate[ titleAndDate.length - 1 ].insertAdjacentHTML("beforeend", `<h4>${experiences[x].jobTitle}</h4>`)
            titleAndDate[ titleAndDate.length - 1 ].insertAdjacentHTML("beforeend", `<h4>${experiences[x].date}</h4>`)

            // NAME AND LOCATION
            let nameAndLocation = document.getElementsByClassName("company-name-and-location");

            nameAndLocation[ nameAndLocation.length - 1 ].insertAdjacentHTML("beforeend", `<h5>${experiences[x].companyName}</h5>`)
            nameAndLocation[ nameAndLocation.length - 1 ].insertAdjacentHTML("beforeend", `<h5>${experiences[x].location}</h5>`)


            // JOB SUMMARY
            let jobSummary = document.getElementsByClassName("job-summary");
            jobSummary[ jobSummary.length - 1 ].innerText = experiences[x].summary;
        }

    }

    #setSkills() {


        let skillsCard = `
        
            <div class="programming-container darker-card" >

                <div class="programming-section">
                    <i class="fa-solid fa-language themeIcon"></i>
                </div>
    
                <div class="languages-container">

                </div>

        </div>
        
        `

        // the fields to fill into the elements
        let skills = JSON.parse(localStorage.getItem("skills"));

        let skillsContainer = document.getElementById("skills-container");

        for (let x = 0; x < skills.length; x += 1) {

            // add card
            skillsContainer.insertAdjacentHTML("beforeend", skillsCard)

            // add category name once we add the element for it
            let categoryName = document.getElementsByClassName("programming-section");
            categoryName[ categoryName.length - 1 ].insertAdjacentHTML("beforeend", `<h3>${skills[x].categoryName}</h3>`)


            // add individual skills to the language container
            let languagesContainer = document.getElementsByClassName("languages-container");
            for( let y = 0; y < skills[x].skills.length; y+=1 ){

                languagesContainer[ languagesContainer.length - 1 ].insertAdjacentHTML("beforeend", `
                
                    <div>
                        <i class="fa-brands fa-html5 themeIcon"></i>
                        <h3>${ skills[x].skills[y] }</h3>
                    </div>

                `)
            }

        }
    }


    #setProjects(){


        let projectCard = `
        
            <div style="
                            background-image: url('../portfolio/images/default.jpeg
                            background-size: cover;"
           
                 class="card">
                <div class="card-content">
                    <h2 class="card-title">
                    </h2>
                    <p class="card-body">
                     </p>
                    <a class="card-button" href="#">Learn More</a>
                </div>
            </div>
        
        `

        let projects = JSON.parse(localStorage.getItem("projects"));

        let projectCardContainer = document.getElementById("card-container");


        /*
            classListVariable - 1 means we're accessing the newly created container
        */
        for( let x = 0; x < projects.length; x+=1 ){

            projectCardContainer.insertAdjacentHTML("beforeend", projectCard)

            let projectImage = document.getElementsByClassName("card");


            // if user gave an image
            if( JSON.parse(localStorage.getItem("projectImages"))[x] ){

                projectImage[ projectImage.length - 1 ].setAttribute("style",

                    `
                            background-image: url('./images/${JSON.parse(localStorage.getItem("projectImages"))[x] }');
                            background-size: cover;"
                    `
                )
            }


            let projectTitle = document.getElementsByClassName("card-title");
            projectTitle[ projectTitle.length - 1 ].insertAdjacentHTML("beforeend", `${projects[x].projectTitle}`)


            let projectSummary = document.getElementsByClassName("card-body");
            projectSummary[ projectSummary.length - 1 ].insertAdjacentHTML("beforeend", `${projects[x].projectSummary}`)


            let projectLink = document.getElementsByClassName("card-button");

            // if user gave no link hide the button
            if( projects[x].projectLink === "" ){

                projectLink[ projectLink.length - 1 ].classList.add("hideVisibility")

            }else{

                projectLink[ projectLink.length - 1 ].setAttribute("href", `${projects[x].projectLink}`)

            }

        }
    }


    #setResume(){

        let resumeEmbed = document.getElementById("resume-embed");

        // resumeEmbed.setAttribute("src", JSON.parse(localStorage.getItem("resume")));
    }


    #setContact(){

        let contactContainer = document.getElementById("contact-container");


        let contacts = JSON.parse(localStorage.getItem("contacts"));

        for( let x = 0; x < contacts.length; x+=1 ){

            let href;

            if( contacts[x].contactType === "fa-solid fa-envelope" ){

                href = `mailto:${contacts[x].contact}`
            }else{

                href = contacts[x].contact;
            }

            contactContainer.insertAdjacentHTML("beforeend",

                `
                     <a title='${contacts[x].contact}' href="${href}"><i class='${contacts[x].icon}'></i></a>
                  `
            )
        }

    }


    #removeUnusedSections(){

        let sectionsNotAdded = JSON.parse(localStorage.getItem("sections"))

        let navLinks;

        for( const section in sectionsNotAdded ){


            if( section === "experiences"/* && sectionsNotAdded[section] === false*/  ){

                document.getElementById(section).remove();

                navLinks = document.getElementsByClassName(section);

                for( let x = 0; x < navLinks.length; x+= 1){

                    navLinks[x].remove();
                }

            }else if( section === "skills" /*&& sectionsNotAdded[section] === false*/ ){


                document.getElementById(section).remove();

                navLinks = document.getElementsByClassName(section);

                for( let x = 0; x < navLinks.length; x+= 1){

                    navLinks[x].remove();
                }

            }else if( section === "projects"/* && sectionsNotAdded[section] === false*/ ){


                document.getElementById(section).remove();

                navLinks = document.getElementsByClassName(section);

                for( let x = 0; x < navLinks.length; x+= 1){

                    navLinks[x].remove();
                }

            }else if( section === "contacts" /*&& sectionsNotAdded[section] === false*/ ){


                document.getElementById(section).remove();

                navLinks = document.getElementsByClassName(section);

                for( let x = 0; x < navLinks.length; x+= 1){

                    navLinks[x].remove();
                }

            }
        }

    }
}



function main(){

    let createTemplate = new CreateTemplate();
}

main();