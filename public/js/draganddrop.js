let dropArea;
let dragText;
let button;
let input;
let file; //this is a global variable and we'll use it inside multiple functions


function initValues(element){

  dropArea = element.parentElement;
  dragText = element.parentElement.children[1];
  button = element.parentElement.children[3];
  input = element.parentElement.children[4];

  input.click();



  input.addEventListener("change", async function(){
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = this.files[0];
    dropArea.classList.add("active");
    await showImage(); //calling function
  });


//If user Drag File Over DropArea
  dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
  });

//If user leave dragged File from DropArea
  dropArea.addEventListener("dragleave", ()=>{
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  });

//If user drop File on DropArea
  dropArea.addEventListener("drop", async (event)=>{
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    await showImage(); //calling function
  });



}


let projectImagesArray = [];
let portfolioImage;


async function showImage(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png", "pdf"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{

      hideElements();

      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img class="img" src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute

      let deleteButton = `<button class="delete-button" onclick="deleteFile(this)">delete</button>`

      dropArea.insertAdjacentHTML("beforeend", imgTag); //adding that created img tag inside dropArea container
      dropArea.insertAdjacentHTML("beforeend", deleteButton)

    }
    fileReader.readAsDataURL(file);

// update from front end

    // if a project image
    if( input.getAttribute("class").split(" ")[0] === "project-file-input"  ){ // we need to access it's first class

      // grab index of current image
      let index = parseInt( input.closest(".project-container").children[0].children[0].innerHTML.split(" ")[1] ) - 1;

      projectImagesArray[index] = file.name;

      localStorage.setItem("projectImages", JSON.stringify(projectImagesArray))

      // if portfolio image
    }else{

      localStorage.setItem("portfolioImage", JSON.stringify(file.name))

    }

    // send image to server
    await sendProjectImages(file);

    refreshIframe();

  }else{


    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }

}

function hideElements(){


  // on the first function call, image and button won't be there
  // and so we don't to accidentally delete another element
  if( dropArea.children[ dropArea.children.length - 1 ].getAttribute("class") === "delete-button" ){

    // remove image
    dropArea.children[ dropArea.children.length - 1 ].remove();

    // remove button
    dropArea.children[ dropArea.children.length - 1 ].remove();

  }


  // hide the rest of the elements
  for( let x = 0; x < dropArea.children.length; x+=1 ) {

    dropArea.children[x].classList.add("hide");

  }

}

async function deleteFile(element){


  // UPDATE IMAGES

  let projectContainer = element.closest(".project-container");


  // DELETING FROM PROJECT SECTION
  if( projectContainer ){


    // remove this once able to have projectImages actual array be global
    let projectImagesArray = JSON.parse(localStorage.getItem("projectImages"));
    // find the project number
    let index =  parseInt( projectContainer.children[0].children[0].innerHTML.split(" ")[1] ) - 1;

    await removeImage(projectImagesArray[index]);

    // 'remove it'
    projectImagesArray[index] = null;

    // filter out the null images and return new array
    projectImagesArray = projectImagesArray.filter( ( images )=>{

      return images != null
    } )

    // save it to local storage
    localStorage.setItem("projectImages", JSON.stringify(projectImagesArray) );

  // IT WAS THE PORTFOLIO IMAGE TO BE DELETED
  }else{

    let portfolioImage = JSON.parse(localStorage.getItem("portfolioImage"));

    await removeImage(portfolioImage);


  }


  // remove image
  dropArea.children[ dropArea.children.length - 1 ].remove();

  // remove button
  dropArea.children[ dropArea.children.length - 1 ].remove();



  // un hide the rest of the elements
  for( let x = 0; x < dropArea.children.length; x+=1 ) {

    dropArea.children[x].classList.remove("hide");

  }

  dropArea.classList.remove("active");

  input.value = ""

  // refresh the embedded file
  refreshIframe();


}


function refreshIframe(){

  // no need to do template.getFields() because the local storage for icon is done in here and not in Template.js
  document.getElementById('resume-embed').src += '';

}




