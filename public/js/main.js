import {GetTemplate} from "./GetTemplate.js";

let template = new GetTemplate();

/*

    1. find out why deleteButton in category has [ length - 1 ] and the others don't
*/

function newExperience() {

    const experienceNumber = document.getElementsByClassName("experiences-container").length;

    const experienceContainer = document.createElement("DIV");

    const experience = `
    
                            <div class="section-title" onclick="closeSection(this)">
                                <span>Experience ${experienceNumber + 1}</span>
                                <i class="fa-solid fa-angle-up"></i>
                            </div>


                            <div id="experience-info">

                                <!-- selections -->
                                <div class="section-icon-selector">
                                    <!--dropdown-->
                                    <div class="drop-down">
                                        <div class="drop-down-select-div" onclick="closeSection(this)">
                                          <span>
                                                <img class="drop-down-image" src="../images/icons/programmer.png" alt="programmer logo">
   
                                              <span>Icons</span>
                                          </span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                        <div class="drop-down-options-div hideVisibility">
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/programmer.png" alt="programmer logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/keyboard.png" alt="keyboard logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/window.png" alt="window logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/server.png" alt="server logo">
                                            </div>
                                       

                                        </div>
                                    </div>
                                    <!--allow custom icon selection-->

                                </div>
                                
                                <!-- hold inputs -->
                                <div>
                                
                                    <div class="title-to-border experience-input">
                                        <span>Job Title</span>
                                        <input type="text" class="title-to-border-element"/>
                                        <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                    </div>
                                    <div class="title-to-border experience-input">
                                        <span>Company Name</span>
                                        <input type="text" class="title-to-border-element"/>
                                        <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                    </div>
                                    <div class="title-to-border experience-input">
                                        <span>Location</span>
                                        <input type="text" class="title-to-border-element"/>
                                        <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                    </div>
                                    <div class="title-to-border experience-input">
                                        <span>Summary</span>
                                        <textarea class="title-to-border-element"></textarea>
                                        <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                    </div>
                                    <div class="title-to-border experience-input">                                    
                                            <span>Date</span>
                                            <input id="flatpickr" value="" class="title-to-border-element">
                                            <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>                                            
                                    </div>
                                
                                </div>



                                <div class="delete-section middle-width">
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <span>Delete Experience</span>
                                </div>

                            </div>
    `

    experienceContainer.innerHTML = experience;

    experienceContainer.setAttribute("class", "experiences-container tree-border")

    let experienceSection = document.getElementById("experiences");

    // we created an HTML element because INSERT BEFORE takes an element
    experienceSection.insertBefore(experienceContainer, experienceSection.lastElementChild);


    // document.getElementById(`Experience ${ experienceNumber + 1 }`).click();

    // window.location.href = `Experience ${ experienceNumber + 1 }`

    // let example = flatpickr('#flatpickr')

    $('input[id="flatpickr"]').daterangepicker();

    let datePicker = document.getElementById("flatpickr");
    datePicker.value = "";

    addEventListenerToElements();

    // add "delete" event to delete button

    let deleteButton = experienceContainer.children[1].lastElementChild;

    deleteButton.addEventListener("click", deleteSection)
}

function newCategory() {

    const categoryNumber = document.getElementsByClassName("category-container").length;
    const skillNumber = document.getElementsByClassName("skills-container").length;

    const categoryDiv = document.createElement("DIV");

    const category = `
    
                                <!-- SKILLS DROPDOWN -->
                            <div class="section-title" onclick="closeSection(this)">
                                <span>Category ${categoryNumber + 1}</span>
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
                                                <img class="drop-down-image" src="../images/icons/programming.png" alt="flutter logo">
                                              <span>Icons</span>
                                          </span> 
                                          <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                        <div class="drop-down-options-div hideVisibility">
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/programming.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/framework.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/toolbox.png" alt="flutter logo">
                                            </div>
                                        </div>
                                    </div>
                                    <!--allow custom icon selection-->

                                </div>

                                <div class="title-to-border experience-input">
                                    <span>Category Name</span>
                                    <input type="text" class="title-to-border-element"/>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                </div>


                                <!-- INDIVIDUAL SKILLS -->
                                <div class="middle-width skill">

                                    <div class="skill-container tree-border">

                                        <!-- SKILLS DROPDOWN -->
                                        <div class="section-title" onclick="closeSection(this)">
                                            <span>Skill ${skillNumber + 1}</span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>

                                        <div class="skill-info">

                                            <!-- SELECTIONS -->
                                            <div class="section-icon-selector">
                                                <!--dropdown-->
                                                <div class="drop-down">
                                                    <div class="drop-down-select-div" onclick="closeSection(this)">
                                                      <span>
                                                <img class="drop-down-image" src="../images/icons/flag.png" alt="flutter logo">
                                                        <span>Icons</span>
                                                    </span>
                                                        <i class="fa-solid fa-angle-down"></i>
                                                    </div>
                                                    <div class="drop-down-options-div hideVisibility">
                                                                                                       
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/flag.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/bootstrap.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/browser.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/c-.png" alt="c++ logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/c-sharp.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/react.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/git.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/github.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/heroku.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/java.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/js.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/nodejs.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/postman.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/python.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/linux.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/mongoose.png" alt="flutter logo">
                                            </div>

                                                    </div>
                                                </div>
                                                <!--allow custom icon selection-->

                                            </div>


                                            <div class="title-to-border experience-input">
                                                <span>Skill Name</span>
                                                <input type="text" class="title-to-border-element"/>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                            </div>


                                            <div class="delete-section middle-width">
                                                <i class="fa-solid fa-circle-minus"></i>
                                                <span>Delete Skill</span>
                                            </div>

                                        </div>

                                    </div>


                                    <!-- ADD SKILL -->
                                    <div class="add-section">
                                        <i class="fa-solid fa-circle-plus"></i>
                                        <span>Add Skill</span>
                                    </div>

                                </div>


                                <!-- DELETE CATEGORY -->
                                <div id="delete-section" class="delete-section middle-width">
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <span>Delete Category</span>
                                </div>

                            </div>
                          
                          
    `

    categoryDiv.innerHTML = category;

    categoryDiv.setAttribute("class", "category-container tree-border")

    let experienceSection = document.getElementById("category");

    // we created an HTML element because INSERT BEFORE takes an element
    experienceSection.insertBefore(categoryDiv, experienceSection.lastElementChild);


    // document.getElementById(`Experience ${ categoryNumber + 1 }`).click();

    // window.location.href = `Experience ${ experienceNumber + 1 }`

    addEventListenerToElements();

    // add "add"event add button
    let categoryContainer = document.getElementsByClassName("category-container");

    let skillAddButton = categoryContainer[categoryContainer.length - 1].children[1].children[2].lastElementChild;

    skillAddButton.addEventListener("click", newSkill)

    let skillDeleteButton = categoryContainer[categoryContainer.length - 1].children[1].children[2].children[0].children[1].lastElementChild;


    // dont add a delete button for the first skill category
    if (skillNumber + 1 === 1) {

        skillDeleteButton.remove();
    } else {

        // add "delete" event to delete button
        skillDeleteButton.addEventListener("click", deleteSection)
        skillDeleteButton.addEventListener("click", refreshIframe)

    }


    // add "delete" event to delete button

    let deleteButton = categoryContainer[categoryContainer.length - 1].children[1].lastElementChild;

    deleteButton.addEventListener("click", deleteSection)
    deleteButton.addEventListener("click", refreshIframe)


}


function newSkill(element) {

    const skillNumber = element.currentTarget.parentElement.children.length - 1; // so we don't get the 'add skill' element that's at the end

    const skillDiv = document.createElement("DIV");

    const skill = `
    

                                      <!-- SKILLS DROPDOWN -->
                                      <div class="section-title" onclick="closeSection(this)">
                                          <span>Skill ${skillNumber + 1}</span>
                                          <i class="fa-solid fa-angle-up"></i>
                                      </div>

                                        <div class="skill-info">

                                            <!-- SELECTIONS -->
                                            <div class="section-icon-selector">
                                                <!--dropdown-->
                                                <div class="drop-down">
                                                    <div class="drop-down-select-div" onclick="closeSection(this)">
                                                 <span>
                                                <img class="drop-down-image" src="../images/icons/flag.png" alt="flutter logo">
                                                    <span>Icons</span>
                                                </span> 
                                          <i class="fa-solid fa-angle-down"></i>
                                                    </div>
                                                    <div class="drop-down-options-div hideVisibility">
                                                                                                       
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/flag.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/bootstrap.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/browser.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/c-.png" alt="c++ logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/c-sharp.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/react.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/git.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/github.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/heroku.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/java.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/js.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/nodejs.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/postman.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/python.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/linux.png" alt="flutter logo">
                                            </div>
                                            <div onclick="iconSelect(this)">
                                                <img class="drop-down-image" src="../images/icons/mongoose.png" alt="flutter logo">
                                            </div>

                                                    </div>
                                                </div>
                                                <!--allow custom icon selection-->

                                            </div>


                                            <div class="title-to-border experience-input">
                                                <span>Skill Name</span>
                                                <input type="text" class="title-to-border-element"/>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                            </div>


                                            <div class="delete-section middle-width">
                                                <i class="fa-solid fa-circle-minus"></i>
                                                <span>Delete Skill</span>
                                            </div>

                                        </div>
                          
    `

    skillDiv.innerHTML = skill;

    skillDiv.setAttribute("class", "skill-container tree-border");


    // let skillSection = document.getElementById("skill");
    let skillSection = element.currentTarget.parentElement;

    // we created an HTML element because INSERT BEFORE takes an element
    skillSection.insertBefore(skillDiv, skillSection.lastElementChild);


    // document.getElementById(`Experience ${ skillNumber + 1 }`).click();

    // window.location.href = `Experience ${ experienceNumber + 1 }`

    addEventListenerToElements();


    // add "delete" event to delete button

    let skillDeleteButton = skillDiv.children[1].lastElementChild;

    skillDeleteButton.addEventListener("click", deleteSection)
    skillDeleteButton.addEventListener("click", refreshIframe)


}


let projectImagesArray = []; // to store all the images
function newProject(element) {

    const projectNumber = document.getElementsByClassName("project-container").length;

    const projectContainer = document.createElement("DIV");

    const project = `
                            <!-- SKILLS DROPDOWN -->
                            <div class="section-title" onclick="closeSection(this)">
                                <span>Project ${projectNumber + 1}</span>
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
                                        <header>Drag & Drop to Upload Image</header>
                                        <span>OR</span>
                                        <button onclick="initValues(this)">Browse File</button>
                                        <input class="project-file-input" type="file" hidden>
                                    </div>
                                </div>

                                <div>
                                    <div class="title-to-border experience-input">
                                        <span>Project Title</span>
                                        <input type="text" class="title-to-border-element"/>
                                        <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                    </div>
                                    <div class="title-to-border experience-input">
                                        <span>Project Link</span>
                                        <input id="project-link" type="text" class="title-to-border-element" placeholder="https://"/>
                                        <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                    </div>
                                    <div class="title-to-border experience-input">
                                        <span>Project Summary</span>
                                        <textarea class="title-to-border-element"></textarea>
                                        <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                    </div>
                               </div>


                                <!-- DELETE CATEGORY -->
                                <div class="delete-section middle-width">
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <span>Delete Project</span>
                                </div>

                            </div>

    `

    projectContainer.innerHTML = project;

    projectContainer.setAttribute("class", "project-container tree-border")

    // let skillSection = document.getElementById("skill");
    let projectSection = element.currentTarget.parentElement;

    // we created an HTML element because INSERT BEFORE takes an element
    projectSection.insertBefore(projectContainer, projectSection.lastElementChild);


    let deleteButton = projectContainer.children[1].lastElementChild;
    deleteButton.addEventListener("click", deleteSection)
    deleteButton.addEventListener("click", refreshIframe)

    // document.getElementById(`Experience ${ projectNumber + 1 }`).click();

    // window.location.href = `Experience ${ experienceNumber + 1 }`


    const projectImageInputFile = document.getElementsByClassName('project-file-input');

    let image;
    // add the event listener for the last/newly inserted project container section
    // w do project - 1 because the newly added html will have that element be the last
    /*        projectImageInputFile[ projectImageInputFile.length - 1 ].addEventListener("change", async (element)=>{

                image = projectImageInputFile[ projectImageInputFile.length - 1 ].files[0];

                // to know which index to save the file to
                // ex. index 0 is for project 1

                let index = parseInt( element.currentTarget.parentElement.parentElement.parentElement.parentElement.children[0].children[0].innerHTML.split(" ")[1] ) - 1

                projectImagesArray[ index ] = image.name;

                // store it in local storage so we can save the name
                localStorage.setItem("projectImages", JSON.stringify(projectImagesArray))

                // store on server
                await sendProjectImages(image);

                // refresh to show the image
                refreshIframe();

            });// listens for when user adds pdf file*/


    addEventListenerToElements();


    // add event to selecting an image
    // projectContainer.children[1].children[0].children[0].children[3].addEventListener("click", initValues)

}


function newContact(element) {

    // so we know the user created a section

    if (!localStorage.getItem("contactCreated")) {

        localStorage.setItem("contactCreated", JSON.stringify(true));

    }


    const contactNumber = document.getElementsByClassName("contacts-container").length;

    const contactDiv = document.createElement("DIV");

    const contact = `
                            <div class="section-title" onclick="closeSection(this)">
                                <span>Contact ${contactNumber + 1}</span>
                                <i class="fa-solid fa-angle-up"></i>
                            </div>

                            <div id="contacts-info">

                                <!-- SELECTIONS -->
                                <div class="section-icon-selector">
                                    <!--dropdown-->
                                    <div class="drop-down">
                                        <div class="drop-down-select-div" onclick="closeSection(this)">
                                          <span>
                                                                                                                                      <img class="drop-down-image" src="../images/icons/linkedin.png" alt="URL logo">

<!--                                            <i class="fa-brands fa-linkedin"></i>-->
                                              <span>Icons</span>
                                          </span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                        <div class="drop-down-options-div hideVisibility">
                                            <div  onclick="iconSelect(this)">
                                                                                            <img class="drop-down-image" src="../images/icons/linkedin.png" alt="URL logo">

<!--                                                <i class="fa-brands fa-linkedin"></i>-->
                                            </div>
                                            <div  onclick="iconSelect(this)">
                                                                                            <img class="drop-down-image" src="../images/icons/github.png" alt="URL logo">

<!--                                                <i class="fa-brands fa-github"></i>-->
                                            </div>
<!--                                            <div  onclick="iconSelect(this)">-->
<!--                                                <i class="fa-solid fa-phone"></i>-->
<!--                                            </div>-->
                                            <div  onclick="iconSelect(this)">
                                                                                            <img class="drop-down-image" src="../images/icons/email.png" alt="URL logo">

<!--                                                <i class="fa-solid fa-envelope"></i>-->
                                            </div>
                                                                                        
                                            <div  onclick="iconSelect(this)">
                                                                                            <img class="drop-down-image" src="../images/icons/link.png" alt="url logo">

<!--                                                <i class="fa-solid fa-envelope"></i>-->
                                            </div>

                                        </div>
                                    </div>
                                    <!--allow custom icon selection-->

                                </div>

                                <!-- SELECTIONS -->
<!--                                <div class="section-icon-selector">
                                    &lt;!&ndash;dropdown&ndash;&gt;
                                    <div class="drop-down">
                                        <div class="drop-down-select-div" onclick="closeSection(this)">
                                          <span>
                                          
                                              <img class="drop-down-image email-selection" src="../images/icons/email.png" alt="email logo">

&lt;!&ndash;                                              <i class="fa-solid fa-envelope"></i>&ndash;&gt;
                                              <span>Contact Type</span>
                                          </span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                        <div class="drop-down-options-div hideVisibility">
                                            <div class="contact-type"  onclick="iconSelect(this)">
                                               <img class="drop-down-image email-selection" src="../images/icons/email.png" alt="email logo">

&lt;!&ndash;                                                <i class="fa-solid fa-envelope"></i>&ndash;&gt;
                                                <span>Email</span>
                                            </div>
                                            <div class="contact-type" onclick="iconSelect(this)">
                                                <img class="drop-down-image url-selection" src="../images/icons/link.png" alt="url logo">

&lt;!&ndash;                                                <i class="fa-solid fa-link"></i>&ndash;&gt;
                                                <span>Url</span>
                                            </div>
                                        </div>
                                    </div>
                                    &lt;!&ndash;allow custom icon selection&ndash;&gt;

                                </div>-->

                                <div class="title-to-border experience-input">
                                    <span>Contact</span>
                                    <input type="text" class="title-to-border-element" placeholder="https:// OR @domain.com OR 111-111"/>
                                    <i class="fa fa-exclamation-circle hideVisibility" aria-hidden="true"></i>
                                </div>

                                <!-- DELETE CATEGORY -->
                                <div class="delete-section middle-width">
                                    <i class="fa-solid fa-circle-minus"></i>
                                    <span>Delete Contact</span>
                                </div>

                            </div>
    `

    contactDiv.innerHTML = contact;

    contactDiv.setAttribute("class", "contacts-container tree-border")

    // let skillSection = document.getElementById("skill");
    let contactSection = element.currentTarget.parentElement;

    // we created an HTML element because INSERT BEFORE takes an element
    contactSection.insertBefore(contactDiv, contactSection.lastElementChild);


    // document.getElementById(`Experience ${ projectNumber + 1 }`).click();

    // window.location.href = `Experience ${ experienceNumber + 1 }`

    addEventListenerToElements();


    // add "delete" event to delete button

    let deleteButton = contactDiv.children[1].lastElementChild;

    // makes sure there's only 1 contact by default
    if (document.getElementsByClassName("contacts-container").length === 1) {

        deleteButton.remove();
    } else {

        deleteButton.addEventListener("click", deleteSection)
        deleteButton.addEventListener("click", refreshIframe)
    }


}


async function deleteSection(element) {


    let currentElement = element.currentTarget;

    let modalContainer = document.getElementById("modal-height");

    let modalText = document.getElementById("modal-text");

    modalText.innerHTML = "Are you sure you want to delete this section?"

    modalContainer.classList.remove("hide");

    // add event listener to yes button so when user clicks

    let yesButton = document.getElementById("yes-button");
    let noButton = document.getElementById("no-button");

    yesButton.addEventListener("click", async () => {

        const lengthOfContainers = currentElement.parentElement.parentElement.parentElement.children.length - 1;     // n-1 because item n is the "add button" and we want all the "containers"
        const numberAt = parseInt(currentElement.parentElement.parentElement.children[0].children[0].innerHTML.split(" ")[1]);


// IF SKILLS IS LESS THAN 1 ADD 1 BECAUSE USER SHOULD HAVE AT MIN 1 SKILL

        let skillInfo = currentElement.parentElement;
        let skillsContainer = currentElement.parentElement.parentElement.parentElement;

        if (
            skillInfo.getAttribute("class") === "skill-info" &&
            skillsContainer.children.length <= 2 // if more than 4 then we've added a skill diff
        ) {

            return; // do nothing
        }

// CHECKS TO REMOVE BORDER FROM EMPTY SECTION AFTER USER REMOVES LAST ONE
        removeRedBorderFromUnfilledSection();

// UPDATE PROJECT IMAGES ARRAY

        if (currentElement.parentElement.parentElement.getAttribute("class") === "project-container") {

            // find the project number
            let index = parseInt(currentElement.parentElement.parentElement.children[0].children[0].innerHTML.split(" ")[1]) - 1;

            // if the image exists and is not undefined then remove it from server
            if (projectImagesArray[index]) {

                await removeImage(projectImagesArray[index]);

            }

            // 'remove it'
            projectImagesArray[index] = null;

            // filter out the null images and return new array
            projectImagesArray = projectImagesArray.filter((images) => {

                return images != null
            })

            // save it to local storage
            localStorage.setItem("projectImages", JSON.stringify(projectImagesArray));


        }

// UPDATE NUMBERS

        // go all the way to n-1 because item n is the "add button" and we want all the "containers" before it
        for (let x = numberAt; x < lengthOfContainers; x += 1) {

            let currentContainer = currentElement.parentElement.parentElement.parentElement;

            // splits the content into array so we can reuse to properly update
            // ex. "experience 1" -> [ "experience", "1" ]
            let spanContent = currentContainer.children[x].children[0].children[0].innerHTML.split(" ");

            // update the count in the span of that container
            currentContainer.children[x].children[0].children[0].innerHTML = `${spanContent[0]} ${x}`

        }

        // alert(element.getAttribute("class"))
        // remove the element
        currentElement.parentElement.parentElement.remove();


        // hide the modal
        modalContainer.classList.add("hide");

        // refresh the contents
        refreshIframe();

    });

    noButton.addEventListener("click", () => {

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


function refreshIframe() {


    template.getFields();
    document.getElementById('embed').src += '';

}

function removeRedBorderFromUnfilledSection() {

    let addButtons = document.getElementsByClassName("add-section");

    for (let x = 0; x < addButtons.length; x += 1) {

        let sectionContainers = addButtons[x].closest(".section-container");

        // 2 because of the current container we're going to delete and the add button otherwise it would be 1
        if (sectionContainers.children[1].children.length === 2 && sectionContainers.children[0].classList.contains('red-border')) { // has section title AND add button only then we didn't add to the section

            sectionContainers.children[0].classList.remove('red-border')
        }
    }

}

/*  color picker  */

$(document).ready(function () {
    $('.color-picker').spectrum({
        type: "component"
    });
});

/* remove the borders */

let colorBoxes = document.getElementsByClassName("sp-colorize");

/*colorBoxes.forEach((boxes)=>{

    boxes.classList.add("no-border")
});*/


function sectionTypedIn(e) {

    let element = e.currentTarget;

    // make sure to always get the last or index 1 class value because that's where it will be saved
    let section = element.closest('.section-container').getAttribute("class").split(" ")[1];

    localStorage.setItem("section", section);

}

function addEventListenerToElements() {

    // WHEN THE USER CLICK AN INPUT
    let inputs = document.getElementsByClassName("title-to-border-element");

    for (let x = 0; x < inputs.length; x += 1) {

        // already added
        if (inputs[x].getAttribute("keyup")) {

            continue;
        }
        inputs[x].addEventListener("keyup", refreshIframe)
        inputs[x].addEventListener("keyup", sectionTypedIn)
        // inputs[x].addEventListener("change", sectionTypedIn)
    }

    // RESUME

    let resume = document.getElementById("resume-input");

    resume.addEventListener("change", sectionTypedIn)

    // WHEN USER CLICKS ON DROP DOWN SELECTION
    let dropdown = document.getElementsByClassName("drop-down-options-div");

    for (let x = 0; x < dropdown.length; x += 1) {

        let item = dropdown[x];
        for (let y = 0; y < item.children.length; y += 1) {

            // already added
            /*if( item.children[y].getAttribute("c") ){

                continue;
            }*/
            item.children[y].addEventListener("click", refreshIframe);
        }
    }

    // WINDOW EVENT


    window.addEventListener("load", removeFiles)
    window.addEventListener("unload", removeFiles)
    window.addEventListener("beforeunload", beforeUnload)
}

function addEventListenerAddButtons() {

    // experience
    let experienceAddButton = document.getElementById("experiences").children[0];

    experienceAddButton.addEventListener("click", newExperience);


    // category
    let categoryAddButton = document.getElementById("category").children[0];

    categoryAddButton.addEventListener("click", newCategory);


    // project
    let projectAddButton = document.getElementById("project").children[0];

    projectAddButton.addEventListener("click", newProject);


    // contact
    let contactAddButton = document.getElementById("contacts").children[0];

    contactAddButton.addEventListener("click", newContact);


}


addEventListenerAddButtons();


// make sure the user has at least 1 contact
document.getElementById('add-contact').click()

function beforeUnload(e) {

    removeLocalStorage();

    e.preventDefault();

    /*        let modalContainer = document.getElementById("modal-height");

            let modalText = document.getElementById("modal-text");

            modalText.innerHTML = "Are you sure you want to leave? <br> Leaving will remove all inputs!"

            modalContainer.classList.remove("hide");

            // add event listener to yes button so when user clicks

            let yesButton = document.getElementById("yes-button");
            let noButton = document.getElementById("no-button");

            yesButton.addEventListener("click", async ()=>{


            });

            noButton.addEventListener("click", ()=>{

                e.preventDefault();

                // remove event from yes and no

                // hide modal

                modalContainer.classList.add("hide")

            })*/
    /* FIX ISSUE WHERE CLICKING ON CONTAINER STILL REMOVE THE ENTIRE MODAL */
    /*    modalContainer.addEventListener("click", ()=>{

            // remove event from yes and no

            // hide modal

            modalContainer.classList.add("hide")

        })*/
}
