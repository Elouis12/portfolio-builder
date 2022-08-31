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
                                          <span>Icons</span>
                                          <i class="fa-solid fa-angle-down"></i>
                                      </div>
                                      <div class="drop-down-options-div hideVisibility">
                                          <i class="fa-solid fa-user options"></i>
                                          <i class="fa-solid fa-user options"></i>
                                          <i class="fa-solid fa-user options"></i>
                                          <i class="fa-solid fa-user options"></i>

                                      </div>
                                  </div>
                                  <!--allow custom icon selection-->

                              </div>

                              <div class="title-to-border experience-input">
                                  <span>Job Title</span>
                                  <input type="text" class="title-to-border-element"/>
                              </div>
                              <div class="title-to-border experience-input">
                                  <span>Company Name</span>
                                  <input type="text" class="title-to-border-element"/>
                              </div>
                              <div class="title-to-border experience-input">
                                  <span>Location</span>
                                  <input type="text" class="title-to-border-element"/>
                              </div>
                              <div class="title-to-border experience-input">
                                  <span>Summary</span>
                                  <textarea class="title-to-border-element"></textarea>
                              </div>

                              <div class="delete-section middle-width" onclick="deleteSection(this)">
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

}

function newCategory(){

    const categoryNumber = document.getElementsByClassName("category-container").length;

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
                                          <span>Icons</span>
                                          <i class="fa-solid fa-angle-down"></i>
                                      </div>
                                      <div class="drop-down-options-div hideVisibility">
                                          <i class="fa-solid fa-user options"></i>
                                          <i class="fa-solid fa-user options"></i>
                                          <i class="fa-solid fa-user options"></i>
                                          <i class="fa-solid fa-user options"></i>

                                      </div>
                                  </div>
                                  <!--allow custom icon selection-->

                              </div>

                              <div class="title-to-border experience-input">
                                  <span>Category Name</span>
                                  <input type="text" class="title-to-border-element"/>
                              </div>


                              <!-- INDIVIDUAL SKILLS -->
                              <div id="skill" class="middle-width">

                                  <div class="skill-container">

                                      <!-- SKILLS DROPDOWN -->
                                      <div class="section-title" onclick="closeSection(this)">
                                          <span>Skill 1</span>
                                          <i class="fa-solid fa-angle-up"></i>
                                      </div>

                                      <div id="skill-info">

                                          <!-- SELECTIONS -->
                                          <div class="section-icon-selector">
                                              <!--dropdown-->
                                              <div class="drop-down">
                                                  <div class="drop-down-select-div" onclick="closeSection(this)">
                                                      <span>Icons</span>
                                                      <i class="fa-solid fa-angle-down"></i>
                                                  </div>
                                                  <div class="drop-down-options-div hideVisibility">
                                                      <i class="fa-solid fa-user options"></i>
                                                      <i class="fa-solid fa-user options"></i>
                                                      <i class="fa-solid fa-user options"></i>
                                                      <i class="fa-solid fa-user options"></i>

                                                  </div>
                                              </div>
                                              <!--allow custom icon selection-->

                                          </div>


                                          <div class="title-to-border experience-input">
                                              <span>Skill Name</span>
                                              <input type="text" class="title-to-border-element"/>
                                          </div>

                                          <div class="delete-section middle-width" onclick="deleteSection(this)">
                                              <i class="fa-solid fa-circle-minus"></i>
                                              <span>Delete Skill</span>
                                          </div>
                                      
                                      </div>

                                  </div>

                                  <!-- ADD SKILL -->
                                  <div class="add-section" onclick="newSkill(this)">
                                      <i class="fa-solid fa-circle-plus"></i>
                                      <span>Add Skill</span>
                                  </div>
                              
                              </div>


                              <!-- DELETE CATEGORY -->
                              <div class="delete-section middle-width" onclick="deleteSection(this)">
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
                                                      <span>Icons</span>
                                                      <i class="fa-solid fa-angle-down"></i>
                                                  </div>
                                                  <div class="drop-down-options-div hideVisibility">
                                                      <i class="fa-solid fa-user options"></i>
                                                      <i class="fa-solid fa-user options"></i>
                                                      <i class="fa-solid fa-user options"></i>
                                                      <i class="fa-solid fa-user options"></i>

                                                  </div>
                                              </div>
                                              <!--allow custom icon selection-->

                                          </div>


                                          <div class="title-to-border experience-input">
                                              <span>Skill Name</span>
                                              <input type="text" class="title-to-border-element"/>
                                          </div>


                                          <div class="delete-section middle-width" onclick="deleteSection(this)">
                                              <i class="fa-solid fa-circle-minus"></i>
                                              <span>Delete Skill</span>
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


function newProject(element){

    const projectNumber = document.getElementsByClassName("project-container").length;

    const projectDiv = document.createElement("DIV");

    const project = `

                          <!-- SKILLS DROPDOWN -->
                          <div class="section-title" onclick="closeSection(this)">
                              <span>Project ${ projectNumber + 1 }</span>
                              <i class="fa-solid fa-angle-up"></i>
                          </div>


                          <!-- HOLD ALL INFO FOR CATEGORY SO WE CAN HIDE ALL AT ONCE -->
                          <div id="project-info">

                              <!-- DRAG AND DROP -->
                              <div class="drag-container title-to-border experience-input">
                                  <div id="drag-area" class="drag-area">
                                      <div class="icon">
                                          <i class="fas fa-cloud-upload-alt"></i>
                                      </div>
                                      <header>Drag & Drop to Upload File</header>
                                      <span>OR</span>
                                      <button onclick="initValues(this)">Browse File</button>
                                      <input type="file" hidden>
                                  </div>
                              </div>

                              <div class="title-to-border experience-input">
                                  <span>Project Title</span>
                                  <input type="text" class="title-to-border-element"/>
                              </div>
                              <div class="title-to-border experience-input">
                                  <span>Project Link</span>
                                  <input type="text" class="title-to-border-element"/>
                              </div>
                              <div class="title-to-border experience-input">
                                  <span>Project Summary</span>
                                  <textarea class="title-to-border-element"></textarea>
                              </div>


                              <!-- DELETE CATEGORY -->
                              <div class="delete-section middle-width" onclick="deleteSection(this)">
                                  <i class="fa-solid fa-circle-minus"></i>
                                  <span>Delete Project</span>
                              </div>

                          </div>

    `

    projectDiv.innerHTML = project;

    projectDiv.setAttribute("class", "project-container")

    // let skillSection = document.getElementById("skill");
    let projectSection = element.parentElement;

    // we created an HTML element because INSERT BEFORE takes an element
    projectSection.insertBefore (projectDiv, projectSection.lastElementChild);


    // document.getElementById(`Experience ${ projectNumber + 1 }`).click();

    // window.location.href = `Experience ${ experienceNumber + 1 }`

}




function newContact(element){

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
                                              <span>Icons</span>
                                              <i class="fa-solid fa-angle-down"></i>
                                          </div>
                                          <div class="drop-down-options-div hideVisibility">
                                              <i class="fa-solid fa-user options"></i>
                                              <i class="fa-solid fa-user options"></i>
                                              <i class="fa-solid fa-user options"></i>
                                              <i class="fa-solid fa-user options"></i>

                                          </div>
                                      </div>
                                      <!--allow custom icon selection-->

                                  </div>

                                  <!-- SELECTIONS -->
                                  <div class="section-icon-selector">
                                      <!--dropdown-->
                                      <div class="drop-down">
                                          <div class="drop-down-select-div" onclick="closeSection(this)">
                                              <span>Contact Type</span>
                                              <i class="fa-solid fa-angle-up"></i>
                                          </div>
                                          <div class="drop-down-options-div hideVisibility">
                                              <div>Email</div>
                                              <div>Url</div>
                                              <div>Person</div>
                                          </div>
                                      </div>
                                      <!--allow custom icon selection-->

                                  </div>

                                  <div class="title-to-border experience-input">
                                      <span>Contact Title</span>
                                      <input type="url" class="title-to-border-element"/>
                                  </div>

                                  <!-- DELETE CATEGORY -->
                                  <div class="delete-section middle-width" onclick="deleteSection(this)">
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


function deleteSection(element) {

    const lengthOfContainers = element.parentElement.parentElement.parentElement.children.length-1;     // n-1 because item n is the "add button" and we want all the "containers"
    const numberAt = parseInt( element.parentElement.parentElement.children[0].children[0].innerHTML.split(" ")[1] );


    // go all the way to n-1 because item n is the "add button" and we want all the "containers"
    for ( let x = numberAt; x < lengthOfContainers; x+=1  ){

        let currentContainer = element.parentElement.parentElement.parentElement;

        // splits the content into array so we can resuse to properly update
        // ex. "experience 1" -> [ "experience", "1" ]
        let spanContent = currentContainer.children[x].children[0].children[0].innerHTML.split(" ");

        // update the count in the span of that container
        currentContainer.children[x].children[0].children[0].innerHTML = `${spanContent[0]} ${x}`

    }

    element.parentElement.parentElement.remove();
}


function uploadResume(element){

    element.parentElement.children[1].click();

}