function newExperience(){

    const experienceNumber = document.getElementsByClassName("experiences-container").length;

    const experienceDiv = document.createElement("DIV");

    const experience = `
    
                            <div class="section-title" onclick="closeSection(this)">
                                <span>Experience ${ experienceNumber + 1 }</span>
                                <i class="fa-solid fa-angle-up"></i>
                            </div>


                            <div id="experience-info">

                                <!-- selections -->
                                <div class="section-icon-selector">
                                    <!--dropdown-->
                                    <div class="drop-down">
                                        <div class="drop-down-select-div" onclick="closeSection(this)">
                                          <span>
                                              <i class="fa-solid fa-briefcase"></i>
                                              <span>Icons</span>
                                          </span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                        <div class="drop-down-options-div hideVisibility">
                                            <div onclick="iconSelect(this)">
                                                <i class="fa-solid fa-briefcase"></i>
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <i class="fa-regular fa-person-digging"></i>
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <i class="fa-solid fa-computer"></i>
                                            </div>

                                        </div>
                                    </div>
                                    <!--allow custom icon selection-->

                                </div>

                                <div class="title-to-border experience-input">
                                    <span>Job Title</span>
                                    <input type="text" class="title-to-border-element" onkeyup="iframe()"/>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                </div>
                                <div class="title-to-border experience-input">
                                    <span>Company Name</span>
                                    <input type="text" class="title-to-border-element" onkeyup="iframe()"/>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                </div>
                                <div class="title-to-border experience-input">
                                    <span>Location</span>
                                    <input type="text" class="title-to-border-element" onkeyup="iframe()"/>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                </div>
                                <div class="title-to-border experience-input">
                                    <span>Summary</span>
                                    <textarea class="title-to-border-element"></textarea>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                </div>
<!--                                <div class="title-to-border experience-input">
                                  
                                        <span>Date</span>
                                        <input id="flatpickr">
                                        <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                        
                                </div>-->

                                <div class="delete-section middle-width" onclick="deleteSection(this); iframe()">
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <span>Delete Experience</span>
                                </div>

                            </div>
    `

    experienceDiv.innerHTML = experience;

    experienceDiv.setAttribute("class", "experiences-container")

    let experienceSection = document.getElementById("experiences");

    // we created an HTML element because INSERT BEFORE takes an element
    experienceSection.insertBefore(experienceDiv, experienceSection.lastElementChild);


    // document.getElementById(`Experience ${ experienceNumber + 1 }`).click();

    // window.location.href = `Experience ${ experienceNumber + 1 }`

    // let example = flatpickr('#flatpickr')

    $('input[id="flatpickr"]').daterangepicker();
}

function newCategory(){

    const categoryNumber = document.getElementsByClassName("category-container").length;
    const skillNumber = document.getElementsByClassName("skills-container").length;

    const categoryDiv = document.createElement("DIV");

    const category = `
    
                                <!-- SKILLS DROPDOWN -->
                            <div class="section-title" onclick="closeSection(this)">
                                <span>Category ${ categoryNumber + 1 }</span>
                                <i class="fa-solid fa-angle-up"></i>
                            </div>


                            <!-- HOLD ALL INFO FOR CATEGORY SO WE CAN HIDE ALL AT ONCE -->
                            <div id="category-info">

                                <!-- SELECTIONS -->
                                <div class="section-icon-selector">
                                    <!--dropdown-->
                                    <div class="drop-down">
                                        <div class="drop-down-select-div" onclick="closeSection(this)">
                                          <span>
                                          <i class="fa-solid fa-language"></i>
                                              <span>Icons</span>
                                          </span> <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                        <div class="drop-down-options-div hideVisibility">
                                            <div onclick="iconSelect(this)">
                                                <i class="fa-solid fa-language"></i>
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <i class="fa-solid fa-money-bill"></i>
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <i class="fa-solid fa-microchip"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <!--allow custom icon selection-->

                                </div>

                                <div class="title-to-border experience-input">
                                    <span>Category Name</span>
                                    <input type="text" class="title-to-border-element" onkeyup="iframe()"/>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                </div>


                                <!-- INDIVIDUAL SKILLS -->
                                <div id="skill" class="middle-width">

                                    <div class="skill-container">

                                        <!-- SKILLS DROPDOWN -->
                                        <div class="section-title" onclick="closeSection(this)">
                                            <span>Skill ${ skillNumber + 1 }</span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>

                                        <div id="skill-info">

                                            <!-- SELECTIONS -->
                                            <div class="section-icon-selector">
                                                <!--dropdown-->
                                                <div class="drop-down">
                                                    <div class="drop-down-select-div" onclick="closeSection(this)">
                                          <span>
                                                      <i class="fa-brands fa-html5"></i>
                                              <span>Icons</span>
                                          </span> <i class="fa-solid fa-angle-down"></i>
                                                    </div>
                                                    <div class="drop-down-options-div hideVisibility">
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-html5" title="HTML"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-solid fa-database" title="database"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-solid fa-server" title="server"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-java" title="Java"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-js" title="JavaScript"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-node-js" title="NodeJs"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-python" title="Python"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-git" title="Git"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-solid fa-microchip-ai" title="AI"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-solid fa-desktop" title="Computer"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-php" title="PHP"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-css3" title="CSS"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-react" title="React"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-android" title="Android"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-solid fa-mobile-screen" title="Mobile"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-swift" title="Swift"></i>
                                                        </div>

                                                    </div>
                                                </div>
                                                <!--allow custom icon selection-->

                                            </div>


                                            <div class="title-to-border experience-input">
                                                <span>Skill Name</span>
                                                <input type="text" class="title-to-border-element" onkeyup="iframe()"/>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                            </div>


                                            <div class="delete-section middle-width" onclick="deleteSection(this); iframe()">
                                                <i class="fa-solid fa-circle-minus"></i>
                                                <span>Delete Skill</span>
                                            </div>

                                        </div>

                                    </div>


                                    <!-- ADD SKILL -->
                                    <div class="add-section" onclick="newSkill(this); iframe()">
                                        <i class="fa-solid fa-circle-plus"></i>
                                        <span>Add Skill</span>
                                    </div>

                                </div>


                                <!-- DELETE CATEGORY -->
                                <div class="delete-section middle-width" onclick="deleteSection(this); iframe()">
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <span>Delete Category</span>
                                </div>

                            </div>
                          
                          
    `

    categoryDiv.innerHTML = category;

    categoryDiv.setAttribute("class", "category-container")

    let experienceSection = document.getElementById("category");

    // we created an HTML element because INSERT BEFORE takes an element
    experienceSection.insertBefore(categoryDiv, experienceSection.lastElementChild);


    // document.getElementById(`Experience ${ categoryNumber + 1 }`).click();

    // window.location.href = `Experience ${ experienceNumber + 1 }`

}


function newSkill(element){

    const skillNumber = element.parentElement.children.length-1; // so we don't get the 'add skill' element that's at the end

    const skillDiv = document.createElement("DIV");

    const skill = `
    

                                      <!-- SKILLS DROPDOWN -->
                                      <div class="section-title" onclick="closeSection(this)">
                                          <span>Skill ${ skillNumber + 1 }</span>
                                          <i class="fa-solid fa-angle-up"></i>
                                      </div>

                                        <div id="skill-info">

                                            <!-- SELECTIONS -->
                                            <div class="section-icon-selector">
                                                <!--dropdown-->
                                                <div class="drop-down">
                                                    <div class="drop-down-select-div" onclick="closeSection(this)">
                                          <span>
                                                      <i class="fa-brands fa-html5"></i>
                                              <span>Icons</span>
                                          </span> <i class="fa-solid fa-angle-down"></i>
                                                    </div>
                                                    <div class="drop-down-options-div hideVisibility">
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-html5" title="HTML"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-solid fa-database" title="database"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-solid fa-server" title="server"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-java" title="Java"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-js" title="JavaScript"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-node-js" title="NodeJs"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-python" title="Python"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-git" title="Git"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-solid fa-microchip-ai" title="AI"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-solid fa-desktop" title="Computer"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-php" title="PHP"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-css3" title="CSS"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-react" title="React"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-android" title="Android"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-solid fa-mobile-screen" title="Mobile"></i>
                                                        </div>
                                                        <div onclick="iconSelect(this)">
                                                            <i class="fa-brands fa-swift" title="Swift"></i>
                                                        </div>

                                                    </div>
                                                </div>
                                                <!--allow custom icon selection-->

                                            </div>


                                            <div class="title-to-border experience-input">
                                                <span>Skill Name</span>
                                                <input type="text" class="title-to-border-element" onkeyup="iframe()"/>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                            </div>


                                            <div class="delete-section middle-width" onclick="deleteSection(this); iframe()">
                                                <i class="fa-solid fa-circle-minus"></i>
                                                <span>Delete Skill</span>
                                            </div>

                                        </div>
                          
    `

    skillDiv.innerHTML = skill;

    skillDiv.setAttribute("class", "skill-container");


    // let skillSection = document.getElementById("skill");
    let skillSection = element.parentElement;

    // we created an HTML element because INSERT BEFORE takes an element
    skillSection.insertBefore (skillDiv, skillSection.lastElementChild);


    // document.getElementById(`Experience ${ skillNumber + 1 }`).click();

    // window.location.href = `Experience ${ experienceNumber + 1 }`

}


let projectImagesArray = []; // to store all the images
function newProject(element){

    // so we know the user created a section

    if( !localStorage.getItem("projectCreated" ) ){

        localStorage.setItem("projectCreated", JSON.stringify(true) );

    }

    const projectNumber = document.getElementsByClassName("project-container").length;

    const projectContainer = document.createElement("DIV");

    const project = `
                            <!-- SKILLS DROPDOWN -->
                            <div class="section-title" onclick="closeSection(this)">
                                <span>Project ${ projectNumber + 1 }</span>
                                <i class="fa-solid fa-angle-up"></i>
                            </div>


                            <!-- HOLD ALL INFO FOR CATEGORY SO WE CAN HIDE ALL AT ONCE -->
                            <div id="project-info">

                                <!-- DRAG AND DROP -->
                                <div class="drag-container">
                                    <div id="drag-area" class="drag-area">
                                        <div class="icon">
                                            <i class="fas fa-cloud-upload-alt"></i>
                                        </div>
                                        <header>Drag & Drop to Upload File</header>
                                        <span>OR</span>
                                        <button onclick="initValues(this)">Browse File</button>
                                        <input class="project-file-input" type="file" hidden>
                                    </div>
                                </div>

                                <div class="title-to-border experience-input">
                                    <span>Project Title</span>
                                    <input type="text" class="title-to-border-element" onkeyup="iframe()"/>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                </div>
                                <div class="title-to-border experience-input">
                                    <span>Project Link</span>
                                    <input type="text" class="title-to-border-element" onkeyup="iframe()"/>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                </div>
                                <div class="title-to-border experience-input">
                                    <span>Project Summary</span>
                                    <textarea class="title-to-border-element"></textarea>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                </div>

                                <!-- DELETE CATEGORY -->
                                <div class="delete-section middle-width" onclick="deleteSection(this); iframe()">
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <span>Delete Project</span>
                                </div>

                            </div>

    `

    projectContainer.innerHTML = project;

    projectContainer.setAttribute("class", "project-container")

    // let skillSection = document.getElementById("skill");
    let projectSection = element.parentElement;

    // we created an HTML element because INSERT BEFORE takes an element
    projectSection.insertBefore (projectContainer, projectSection.lastElementChild);


    // document.getElementById(`Experience ${ projectNumber + 1 }`).click();

    // window.location.href = `Experience ${ experienceNumber + 1 }`


    const projectImageInputFile = document.getElementsByClassName('project-file-input');

    let image;
    // add the event listener for the last/newly inserted project container section
    // w do project - 1 because the newly added html will have that element be the last
        projectImageInputFile[ projectImageInputFile.length - 1 ].addEventListener("change", async (element)=>{

            image = projectImageInputFile[ projectImageInputFile.length - 1 ].files[0];

            // to know which index to save the file to
            // ex. index 0 is for project 1

            let index = parseInt( element.target.parentElement.parentElement.parentElement.parentElement.children[0].children[0].innerHTML.split(" ")[1] ) - 1

            projectImagesArray[ index ] = image.name;

            // store it in local storage so we can save the name
            localStorage.setItem("projectImages", JSON.stringify(projectImagesArray))

            // store on server
            await sendProjectImages(image);

            iframe();


        });// listens for when user adds pdf file


}




function newContact(element){

    // so we know the user created a section

    if( !localStorage.getItem("contactCreated" ) ){

        localStorage.setItem("contactCreated", JSON.stringify(true) );

    }


    const contactNumber = document.getElementsByClassName("contacts-container").length;

    const contactDiv = document.createElement("DIV");

    const contact = `
                            <div class="section-title" onclick="closeSection(this)">
                                <span>Contact ${ contactNumber + 1 }</span>
                                <i class="fa-solid fa-angle-up"></i>
                            </div>

                            <div id="contacts-info">

                                <!-- SELECTIONS -->
                                <div class="section-icon-selector">
                                    <!--dropdown-->
                                    <div class="drop-down">
                                        <div class="drop-down-select-div" onclick="closeSection(this)">
                                          <span>
                                            <i class="fa-brands fa-linkedin"></i>
                                              <span>Icons</span>
                                          </span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                        <div class="drop-down-options-div hideVisibility">
                                            <div  onclick="iconSelect(this)">
                                                <i class="fa-brands fa-linkedin"></i>
                                            </div>
                                            <div  onclick="iconSelect(this)">
                                                <i class="fa-brands fa-github"></i>
                                            </div>
                                            <div  onclick="iconSelect(this)">
                                                <i class="fa-solid fa-phone"></i>
                                            </div>
                                            <div  onclick="iconSelect(this)">
                                                <i class="fa-solid fa-envelope"></i>
                                            </div>

                                        </div>
                                    </div>
                                    <!--allow custom icon selection-->

                                </div>

                                <!-- SELECTIONS -->
                                <div class="section-icon-selector">
                                    <!--dropdown-->
                                    <div class="drop-down">
                                        <div class="drop-down-select-div" onclick="closeSection(this)">
                                          <span>
                                              <i class="fa-solid fa-envelope"></i>
                                              <span>Contact Type</span>
                                          </span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                        <div class="drop-down-options-div hideVisibility">
                                            <div class="contact-type"  onclick="iconSelect(this)">
                                                <i class="fa-solid fa-envelope"></i>
                                                <span>Email</span>
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <i class="fa-solid fa-link"></i>
                                                <span>Url</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--allow custom icon selection-->

                                </div>

                                <div class="title-to-border experience-input">
                                    <span>Contact</span>
                                    <input type="text" class="title-to-border-element" onkeyup="iframe()"/>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                </div>

                                <!-- DELETE CATEGORY -->
                                <div class="delete-section middle-width" onclick="deleteSection(this); iframe()">
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <span>Delete Contact</span>
                                </div>

                            </div>
    `

    contactDiv.innerHTML = contact;

    contactDiv.setAttribute("class", "contacts-container")

    // let skillSection = document.getElementById("skill");
    let contactSection = element.parentElement;

    // we created an HTML element because INSERT BEFORE takes an element
    contactSection.insertBefore (contactDiv, contactSection.lastElementChild);


    // document.getElementById(`Experience ${ projectNumber + 1 }`).click();

    // window.location.href = `Experience ${ experienceNumber + 1 }`

}


async function deleteSection(element) {

    const lengthOfContainers = element.parentElement.parentElement.parentElement.children.length-1;     // n-1 because item n is the "add button" and we want all the "containers"
    const numberAt = parseInt( element.parentElement.parentElement.children[0].children[0].innerHTML.split(" ")[1] );


// UPDATE PROJECT IMAGES ARRAY

    if( element.parentElement.parentElement.getAttribute("class") === "project-container" ){

        // find the project number
        let index =  parseInt( element.parentElement.parentElement.children[0].children[0].innerHTML.split(" ")[1] ) - 1;

        await removeImage(projectImagesArray[index]);

        // 'remove it'
        projectImagesArray[index] = null;

        // filter out the null images and return new array
        projectImagesArray = projectImagesArray.filter( ( images )=>{

            return images != null
        } )

        // save it to local storage
        localStorage.setItem("projectImages", JSON.stringify(projectImagesArray) );


    }

// UPDATE NUMBERS

    // go all the way to n-1 because item n is the "add button" and we want all the "containers" before it
    for ( let x = numberAt; x < lengthOfContainers; x+=1  ){

        let currentContainer = element.parentElement.parentElement.parentElement;

        // splits the content into array so we can reuse to properly update
        // ex. "experience 1" -> [ "experience", "1" ]
        let spanContent = currentContainer.children[x].children[0].children[0].innerHTML.split(" ");

        // update the count in the span of that container
        currentContainer.children[x].children[0].children[0].innerHTML = `${spanContent[0]} ${x}`

    }

    // remove the element
    element.parentElement.parentElement.remove();



    // find which project was deleted so we can remove its picture from the projectImageArray
}


function uploadResume(element){

    element.parentElement.children[1].click();

}



function iframe(){


    // document.getElementById('resume-embed').src = document.getElementById('resume-embed').src

    document.getElementById("create-button").click();
    document.getElementById('resume-embed').src += '';
}