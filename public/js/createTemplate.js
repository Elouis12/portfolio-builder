class CreateTemplate{

    // when we load the actual html page it will set thee values to the portfolio html file
    constructor(){

        this.#setPortfolio();
        this.#setNavigationBarName();
        this.#setAboutMe();
        this.#setExperiences();
        this.#setSkills();
        this.#setProjects();
        this.#setResume();
        this.#setContact();


        this.#removeUnusedSections();

        let html = document.getElementById("html");

        let scripts = document.getElementsByTagName("SCRIPT");

/*        while( scripts.length > 0 ){

            scripts[0].remove();
        }*/

        html.removeAttribute("id");

        localStorage.setItem("htmlContent", html.innerHTML)

    }

    #setPortfolio(){

        let portfolioName = document.getElementById("title");
        let favIcon = document.getElementById("fav-icon");

        let portfolioTitle = JSON.parse(localStorage.getItem("portfolioTitle"));
        let portfolioImage = JSON.parse(localStorage.getItem("portfolioImage"));

        if( portfolioTitle ){
            portfolioName.innerHTML = portfolioTitle.portfolioTitle;

        }

        if( portfolioImage ){
            favIcon.setAttribute("href", `./images/${portfolioImage}`)

        }

    }


    #setNavigationBarName(){

        let logo = document.getElementById("logo");
        let name =  JSON.parse(localStorage.getItem("navigationBar"));

        if(  name ){

            logo.insertAdjacentHTML("beforeend",name[0].navTitle)

        }
    }

    #setAboutMe(){

        let aboutMe = document.getElementById("about-summary");
        let aboutMeIcon = document.getElementsByClassName("about-section-container");

        let summary =  JSON.parse(localStorage.getItem("about"));


        if( summary ){

            aboutMeIcon[0].children[0].setAttribute("class", `${summary[0].aboutMeIcon} themeIcon`);
            aboutMe.insertAdjacentHTML("beforebegin",summary[0].aboutMeSummary);

        }

    }

    #setExperiences(){


        let experienceBody = `
            
        <div class="experience-section-container-card">


            <div id="experience-body" class="experience-section-container-body">

                <i class="fa-solid fa-user themeIcon themeIcon"></i>

                <div class="experience-section-container-body-title">

                </div>
                <div class="experience-section-container-body-title">

                </div>
                <p  class="experience-section-container-body-summary">

                </p>

            </div>

        </div>
        
        `
        let experiences = JSON.parse( localStorage.getItem("experiences") );

        let experienceContainer = document.getElementsByClassName("experience-section-container");


        if( experiences ){

            for( let x = 0; x < experiences.length; x+=1 ){

                // insert into the HTML
                experienceContainer[0].insertAdjacentHTML("beforeend", experienceBody);


                // grab the newly added body
                let newlyAddedBody = document.getElementsByClassName("experience-section-container-body");

// add relevant info to the HTML container

                // ICON
                let experienceIcon = newlyAddedBody[ newlyAddedBody.length - 1 ].children[0];
                experienceIcon.setAttribute("class", `${experiences[x].icon} themeIcon icon`)


                // JOB TITLE AND DATE
                let titleAndDate = newlyAddedBody[ newlyAddedBody.length - 1 ].children[1];


                titleAndDate.insertAdjacentHTML("beforeend", `<h4>${experiences[x].jobTitle}</h4>`)
                titleAndDate.insertAdjacentHTML("beforeend", `<h4>${experiences[x].date}</h4>`)

                // NAME AND LOCATION
                let nameAndLocation = newlyAddedBody[ newlyAddedBody.length - 1 ].children[2];

                nameAndLocation.insertAdjacentHTML("beforeend", `<h5>${experiences[x].companyName}</h5>`)
                nameAndLocation.insertAdjacentHTML("beforeend", `<h5>${experiences[x].location}</h5>`)


                // JOB SUMMARY
                let jobSummary = newlyAddedBody[ newlyAddedBody.length - 1 ].children[3];
                jobSummary.innerText = experiences[x].summary;
            }
        }


    }

    #setSkills() {


        let skillsBody = `
        
        <!-- CATEGORY CONTAINER -->
        <div class="skills-category-container" >

            <!-- CATEGORIES AND SKILLS -->
            <div class="skills-category-container-body">

                <div class="skills-category-container-title">
                    <i class="fa-solid fa-language themeIcon"></i>
                    
                </div>

                <div class="skills-category-container-body-skills">

                </div>

            </div>

        </div>
        
        `

        // the fields to fill into the elements
        let skills = JSON.parse(localStorage.getItem("skills"));

        let skillsContainer = document.getElementsByClassName("skills-section-container");

        if( skills ){
            for (let x = 0; x < skills.length; x += 1) {

                // add card
                skillsContainer[0].insertAdjacentHTML("beforeend", skillsBody)

                // grab card
                let newlyAddedBody = document.getElementsByClassName("skills-category-container");

                // add category name once we add the element for it
                let categoryName = newlyAddedBody[ newlyAddedBody.length - 1 ].children[0].children[0];
                categoryName.insertAdjacentHTML("beforeend", `<h3>${skills[x].categoryName}</h3>`)


                // add individual skills to the language container
                let languagesContainer =  newlyAddedBody[ newlyAddedBody.length - 1 ].children[0].children[1];

                for( let y = 0; y < skills[x].skills.length; y+=1 ){

                    languagesContainer.insertAdjacentHTML("beforeend", `
                
                    <div>
                        <i class="fa-brands fa-html5 themeIcon"></i>
                        <h3>${ skills[x].skills[y] }</h3>
                    </div>

                `)
                }

            }
        }

    }


    #setProjects(){


        let projectCard = `
                <div class="project-section-container-card"
             style="
          background-image: url('../portfolio/images/default.jpeg');
          background-size: cover;"
        >
            <div class="project-section-container-card-content">
                <h2 class="project-section-container-card-content-title">

                </h2>
                <p class="project-section-container-card-content-body">

                </p>
                <a class="button" href="https://github.com/Elouis12/where-on-earth-is-waldo">Learn More</a>
            </div>
        </div>
        
        `

        let projects = JSON.parse(localStorage.getItem("projects"));

        let projectCardContainer = document.getElementsByClassName("project-section-container");


        if( projects ){

            /*
    classListVariable - 1 means we're accessing the newly created container
*/
            for( let x = 0; x < projects.length; x+=1 ){

                projectCardContainer[0].insertAdjacentHTML("beforeend", projectCard)

                // grab card
                let newlyAddedBody = document.getElementsByClassName("project-section-container-card");

                let projectImage = newlyAddedBody[ newlyAddedBody.length - 1 ];


                // if user gave an image or not null or else it ill just keep the dealt
                if(
                    JSON.parse(localStorage.getItem("projectImages")) && // if even exists
                    JSON.parse(localStorage.getItem("projectImages"))[x]
                ){

                    projectImage.setAttribute("style",

                        `
                            background-image: url('./images/${ JSON.parse(localStorage.getItem("projectImages"))[x] }');
                            background-size: cover;"
                    `
                    )
                }


                let projectTitle = newlyAddedBody[ newlyAddedBody.length - 1 ].children[0].children[0];
                projectTitle.insertAdjacentHTML("beforeend", `${projects[x].projectTitle}`)


                let projectSummary = newlyAddedBody[ newlyAddedBody.length - 1 ].children[0].children[1];
                projectSummary.insertAdjacentHTML("beforeend", `${projects[x].projectSummary}`)


                let projectLink = newlyAddedBody[ newlyAddedBody.length - 1 ].children[0].children[2];

                // if user gave no link hide the button
                if( projects[x].projectLink === "" ){

                    projectLink.classList.add("hideVisibility")

                }else{

                    projectLink.setAttribute("href", `${projects[x].projectLink}`)

                }

            }
        }


    }


    #setResume(){

        let resumeEmbed = document.getElementById("resume-embed");
        let downloadResume = document.getElementById("download-resume");
        let viewResumeLarge = document.getElementById("view-resume-larger");

        // resume was set
        if( localStorage.getItem("resumeName") ){

            resumeEmbed.setAttribute("src", "./media/resume.pdf")
            viewResumeLarge.setAttribute("src", "media/resume.pdf#zoom=Fit")
            downloadResume.setAttribute("href", "./media/resume.pdf")
        }
    }


    #setContact(){

        let contactBody = document.getElementsByClassName("contact-section-container-body");


        let contacts = JSON.parse(localStorage.getItem("contacts"));

        if( contacts ){

            for( let x = 0; x < contacts.length; x+=1 ){

                let href;

                if( contacts[x].contactType === "fa-solid fa-envelope" ){

                    href = `mailto:${contacts[x].contact}`
                }else{

                    href = contacts[x].contact;
                }

                contactBody[0].insertAdjacentHTML("beforeend",

                    `
                     <a title='${contacts[x].contact}' href="${href}"><i class='${contacts[x].icon}'></i></a>
                  `
                )
            }
        }

    }


    #removeUnusedSections(){

        let sectionsNotAdded = JSON.parse(localStorage.getItem("sections"))

        let navLinks;

        for( const section in sectionsNotAdded ){


            if( section === "experiences"/* && sectionsNotAdded[section] === false*/  ){

                document.getElementById(section).remove();

                navLinks = document.getElementsByClassName(section);

                while( navLinks.length > 0 ){

                    navLinks[0].remove();
                }


            }else if( section === "skills" /*&& sectionsNotAdded[section] === false*/ ){


                document.getElementById(section).remove();

                navLinks = document.getElementsByClassName(section);

                while( navLinks.length > 0 ){

                    navLinks[0].remove();
                }

            }else if( section === "projects"/* && sectionsNotAdded[section] === false*/ ){


                document.getElementById(section).remove();

                navLinks = document.getElementsByClassName(section);

                while( navLinks.length > 0 ){

                    navLinks[0].remove();
                }

            }else if( section === "contacts" /*&& sectionsNotAdded[section] === false*/ ){


                document.getElementById(section).remove();

                navLinks = document.getElementsByClassName(section);

                while( navLinks.length > 0 ){

                    navLinks[0].remove();
                }

            }
        }

    }
}



function main(){

    let createTemplate = new CreateTemplate();
}

main();