function newExperience(){

    const experienceNumber = document.getElementsByClassName("experience").length;

    const experienceDiv = document.createElement("DIV");

    const experience = `
    
<!--                      <div class="experience">-->

<!--                          <a id="Experience ${ experienceNumber + 1 }" href="#Experience ${ experienceNumber + 1 }" ></a>-->
                          <div class="experience-title" onclick="closeSection(this)">
                              <span>Experience ${ experienceNumber + 1 }</span>
                              <i class="fa-solid fa-angle-up"></i>
                          </div>


                          <div id="experience-info-div">

                              <!-- selections -->
                              <div class="section-icon-selector">
                                  <!--dropdown-->
                                  <div class="drop-down">
                                      <div class="drop-down-select-div" onclick="closeSection(this)">
                                          <span>Icons</span>
                                          <i class="fa-solid fa-angle-up"></i>
                                      </div>
                                      <div class="drop-down-options-div" class="hide">
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
                              <div class="delete-experience" onclick="deleteExperience(this)">
                                  <i class="fa-solid fa-circle-minus"></i>
                                  <span>Delete Experience</span>
                              </div>

                          </div>

<!--                      </div>-->
    `

    experienceDiv.innerHTML = experience;

    experienceDiv.setAttribute("class", "experience")

    let experienceSection = document.getElementById("experiences");

    experienceSection.insertBefore(experienceDiv, experienceSection.lastElementChild);


    // document.getElementById(`Experience ${ experienceNumber + 1 }`).click();

    // window.location.href = `Experience ${ experienceNumber + 1 }`
}

function newCategory(){

    const categoryNumber = document.getElementsByClassName("experience").length;

    const categoryDiv = document.createElement("DIV");

    const category = `

                          <div class="experience-title" onclick="closeSection(this)">
                              <span>Category 1</span>
                              <i class="fa-solid fa-angle-up"></i>
                          </div>


                          <div id="experience-info-div">

                              <!-- selections -->
                              <div class="section-icon-selector">
                                  <!--dropdown-->
                                  <div class="drop-down">
                                      <div class="drop-down-select-div" onclick="closeSection(this)">
                                          <span>Icons</span>
                                          <i class="fa-solid fa-angle-up"></i>
                                      </div>
                                      <div class="drop-down-options-div" class="hide">
                                          <i class="fa-solid fa-user options"></i>
                                          <i class="fa-solid fa-user options"></i>
                                          <i class="fa-solid fa-user options"></i>
                                          <i class="fa-solid fa-user options"></i>

                                      </div>
                                  </div>
                                  <!--allow custom icon selection-->

                              </div>

                              <div class="title-to-border experience-input">
                                  <span>Category</span>
                                  <input type="text" class="title-to-border-element"/>
                              </div>


                              <div class="skills">

                                  <!-- selections -->
                                  <div class="section-icon-selector">
                                      <!--dropdown-->
                                      <div class="drop-down">
                                          <div class="drop-down-select-div" onclick="closeSection(this)">
                                              <span>Icons</span>
                                              <i class="fa-solid fa-angle-up"></i>
                                          </div>
                                          <div class="drop-down-options-div" class="hide">
                                              <i class="fa-solid fa-user options"></i>
                                              <i class="fa-solid fa-user options"></i>
                                              <i class="fa-solid fa-user options"></i>
                                              <i class="fa-solid fa-user options"></i>

                                          </div>
                                      </div>
                                      <!--allow custom icon selection-->

                                  </div>

                                  <div class="title-to-border experience-input">
                                      <span>Skill 1</span>
                                      <input type="text" class="title-to-border-element"/>
                                  </div>


                                  <div class="delete-experience" onclick="deleteExperience(this)">
                                      <i class="fa-solid fa-circle-minus"></i>
                                      <span>Delete Skill</span>
                                  </div>

                              </div>



                              <div id="add-experience" onclick="newSkill()">
                                  <i class="fa-solid fa-circle-plus"></i>
                                  <span>Add Skill</span>
                              </div>
                              <div class="delete-experience" onclick="deleteExperience(this)">
                                  <i class="fa-solid fa-circle-minus"></i>
                                  <span>Delete Category</span>
                              </div>

                          </div>

    `

    categoryDiv.innerHTML = category;

    categoryDiv.setAttribute("class", "skill-category")

    let skillSection = document.getElementById("skills-category-container");

    skillSection.insertBefore(categoryDiv, skillSection.lastElementChild);


    // document.getElementById(`Experience ${ categoryNumber + 1 }`).click();

    // window.location.href = `Experience ${ experienceNumber + 1 }`

}


function deleteExperience(element) {


    // const length = parseInt( element.parentElement.parentElement.parentElement.children.length );
    // const numberAt = parseInt( element.parentElement.parentElement.parentElement.children[0].children[0].innerHTML.split(" ")[1] );

    const length = document.getElementsByClassName("experience").length;
    const numberAt = parseInt( element.parentElement.parentElement.children[0].children[0].innerHTML.split(" ")[1] );

    // alert(element.parentElement.parentElement.children[0].children[0].innerHTML.split(" ")[1] )
    for ( let x = numberAt; x < length; x+=1  ){

        let currentElement = document.getElementsByClassName("experience");

        currentElement[x].children[0].children[0].innerHTML = `Experience ${x}`

    }

    element.parentElement.parentElement.remove();
}