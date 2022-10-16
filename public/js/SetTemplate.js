class SetTemplate {

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
        this.#setFooter();
        this.#goToSection();


        this.#removeUnusedSections();

        let html = document.getElementById("html");

        let scripts = document.getElementsByClassName("scripts");

        let templateReadyToDownload = localStorage.getItem("templateDownload");


        html.removeAttribute("id");

        localStorage.setItem("htmlContent", html.innerHTML)


        if( templateReadyToDownload ){

            // remove scripts
            while( scripts.length > 0 ){

                scripts[0].remove();
            }


            localStorage.setItem("htmlContent", html.innerHTML)

            localStorage.removeItem("templateDownload");

        }


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

            aboutMeIcon[0].children[0].children[0].setAttribute("src", summary[0].aboutMeIcon);
            aboutMe.children[1].innerHTML = summary[0].aboutMeSummary;

        }

    }

    #setExperiences(){


        let experienceBody = `
            
        <div class="experience-section-container-card">


            <div class="experience-section-container-body">

                <div class="experience-section-container-body-icon icon-banner">
                    <img class="themeIcon icon-image" src="" alt="skill-icon">
                </div>


                <div class="experience-section-container-body-title">

                </div>
                <div class="experience-section-container-body-title">

                </div>
                <p  class="experience-section-container-body-summary">

                    <span class="special">description: </span>
                    <span class="project-over-view-text"></span>
               
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
                let experienceIcon = newlyAddedBody[ newlyAddedBody.length - 1 ].children[0].children[0];
                experienceIcon.setAttribute("src", `${experiences[x].icon}`)


                // JOB TITLE AND DATE
                let titleAndDate = newlyAddedBody[ newlyAddedBody.length - 1 ].children[1];


                titleAndDate.insertAdjacentHTML("beforeend", `<h4>${experiences[x].jobTitle}</h4>`)
                titleAndDate.insertAdjacentHTML("beforeend", `<h4>${experiences[x].date}</h4>`)

                // NAME AND LOCATION
                let nameAndLocation = newlyAddedBody[ newlyAddedBody.length - 1 ].children[2];

                nameAndLocation.insertAdjacentHTML("beforeend", `<h5>${experiences[x].companyName}</h5>`)
                nameAndLocation.insertAdjacentHTML("beforeend", `<h5>${experiences[x].location}</h5>`)


                // JOB SUMMARY
                let jobSummary = newlyAddedBody[ newlyAddedBody.length - 1 ].children[3].children[1];
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

                <div class="skills-category-container-title icon-banner">
                    <img class="themeIcon icon-image" src="" alt="skill-icon">
                    
                </div>

                <div class="skills-category-container-body-skills p-margin">

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

                let categoryIcon = newlyAddedBody[ newlyAddedBody.length - 1 ].children[0].children[0].children[0];
                categoryIcon.setAttribute("src", skills[x].categoryIcon)

                // add individual skills to the language container
                let languagesContainer =  newlyAddedBody[ newlyAddedBody.length - 1 ].children[0].children[1];

                for( let y = 0; y < skills[x].skills.length; y+=1 ){

                    languagesContainer.insertAdjacentHTML("beforeend", `
                
                    <div>
                        <img class="themeIcon icon-image" src="${skills[x].skills[y][0]}">
                        <h3 class="skill-name">${ skills[x].skills[y][1] }</h3>
                    </div>

                `)
                }

            }
        }

    }


    #setProjects(){



    let projectCard = `
        <div class="project-section-container-card project">

            <div class="project-image">
                <div class="image-cover"></div>
            </div>


            <h3 class="project-title"></h3>
            
<!--            <div class="project-tool-list">
                <img src="./images/icons/css.bmp" alt="React.js logo">
                <img src="./images/icons/mysql.bmp" alt="React.js logo">
            </div>-->
            
            <p class="project-overview p-margin">
                <span class="special">overview: </span>
                <span class="project-over-view-text"></span>
            </p>


            <div class="project-links">
                <a href="#" target="_blank" onclick="return false">
                    <i class="fas fa-link fa-3x" aria-hidden="true"></i>
                </a>
                
<!--                <a href="https://github.com/RyanMcPherson7/six-degrees-of-spotify" target="_blank"><i class="fab fa-github fa-3x" aria-hidden="true"></i></a>-->
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

                let lastCard = newlyAddedBody[ newlyAddedBody.length - 1 ];


                // if user gave an image or not null or else it ill just keep the dealt
                if(
                    JSON.parse(localStorage.getItem("projectImages")) && // if even exists
                    JSON.parse(localStorage.getItem("projectImages"))[x]
                ){

                    lastCard.children[0].setAttribute("style",

                        `
                            background-image: url('./images/${ JSON.parse(localStorage.getItem("projectImages"))[x] }');
                            background-size: cover;"
                    `
                    )
                }


                let projectTitle = newlyAddedBody[ newlyAddedBody.length - 1 ].children[1];
                projectTitle.insertAdjacentHTML("beforeend", `${projects[x].projectTitle}`)


                /*
                    when uncommenting project-tools-list then children[2] becomes children[3]
                */
                let projectSummary = newlyAddedBody[ newlyAddedBody.length - 1 ].children[2].children[1];
                projectSummary.insertAdjacentHTML("beforeend", `${projects[x].projectSummary}`)


                /*
                    when uncommenting project-tools-list then children[4] becomes children[3]
                */

                let projectLink = newlyAddedBody[ newlyAddedBody.length - 1 ].children[3];

                // if user gave no link hide the button


                if( projects[x].projectLink === "" ){

                    projectLink.classList.add("hideVisibility")

                    // only if valid do we we attach the http url to it or else it will
                    // take user to mysite.com/typed-link
                }else if( this.#validateUrl(projects[x].projectLink)  ){

                    projectLink.children[0].setAttribute("href", `${projects[x].projectLink}`)

                    projectLink.children[0].removeAttribute("onclick")

                }else{

                    // add the onclick back
                    projectLink.children[0].setAttribute("onclick", `return false`)

                }

            }
        }


    }


    #setResume(){

        let resumeEmbed = document.getElementById("resume-embed");
        let downloadResume = document.getElementById("download-resume");
        let viewResumeLarge = document.getElementById("view-resume-larger");


        // resume was set with a path name
        /*
            find why when
            localStorage.getItem("resumeName") is null
            OR
            localStorage.getItem("resumeName") !== ""
            still get evaluated

            when localStorage.getItem("resumeName") does not exists
        */
        if( localStorage.getItem("resumeName") ){

            resumeEmbed.setAttribute("src", "./media/resume.pdf")
            viewResumeLarge.setAttribute("src", "./media/resume.pdf#zoom=Fit")
            downloadResume.setAttribute("href", "./media/resume.pdf");
            downloadResume.setAttribute("download", "");

        // user gave an invalid file( aka file input was "" )
        }else{


            resumeEmbed.removeAttribute("src");
            viewResumeLarge.removeAttribute("src");
            downloadResume.removeAttribute("href");
            downloadResume.removeAttribute("download");
        }
    }


    #setContact(){

        let contactBody = document.getElementsByClassName("socials");


        let contacts = JSON.parse(localStorage.getItem("contacts"));

        if( contacts ){

            for( let x = 0; x < contacts.length; x+=1 ){

                let href;

                if( contacts[x].contactType === "email" ){

                    href = `mailto:${contacts[x].contact}`

                }else{

                    href = contacts[x].contact;
                }

                contactBody[0].insertAdjacentHTML("beforeend",

                    `
                    <li title='${contacts[x].contact}'>
                         <a  href="${href}" target="_blank" onclick="return false">
                            <img class="drop-down-image icon-image-medium" src='${contacts[x].icon}' alt="contact logo">

                         </a>
                     </li>
                    `
/*
                    `
                     <a title='${contacts[x].contact}' href="${href}"><i class='${contacts[x].icon}'></i></a>
                  `*/
                )

                let lastAdded = contactBody[0].children[x].children[0]


                console.log(lastAdded)

             if( this.#validateEmail(contacts[x].contact) || this.#validateUrl(contacts[x].contact)  ){

                    lastAdded.removeAttribute("onclick")

             }else{

                    // add the onclick back
                    lastAdded.setAttribute("onclick", `return false`)

                }
            }
        }

    }


    #setFooter(){


        let footerNameElements = document.getElementsByClassName("footer-name");

        for( let x = 0; x < footerNameElements.length; x+=1 ){

            footerNameElements[x].innerHTML = JSON.parse(localStorage.getItem("footerName"))
        }
    }

    #goToSection(){

        let section =  localStorage.getItem("section");

        // issue where when resume is uploaded it will scroll to where the footer was
        // BEFORE THE RESUME IS ENTERED BECAUSE THE RESUME WILL PUSH THE FOOTER DOWN

        if( section !== null ){

            if( section === "contacts"){

                setTimeout(()=>{

                    window.scrollTo(0, document.body.scrollHeight);

                }, 100)

            }else{

                window.location.href = `#${section}`;

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

            }
        }

    }

    #validateEmail(email){

        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    #validateUrl(url){

        return String(url)
            .toLowerCase()
            .match(
                /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/);
    }

}



function main(){

    let createTemplate = new SetTemplate();
}

main();