//selecting all required elements
// let dropArea = document.getElementById("drag-area");

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



  input.addEventListener("change", function(){
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = this.files[0];
    dropArea.classList.add("active");
    showFile(); //calling function
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
  dropArea.addEventListener("drop", (event)=>{
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    showFile(); //calling function
  });



}

function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png", "pdf"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{

      hideElements();
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img class="img" src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      // dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
      dropArea.insertAdjacentHTML("beforeend", imgTag); //adding that created img tag inside dropArea container
      dropArea.insertAdjacentHTML("beforeend", '<button class="delete-button" onclick="deleteFile()">delete</button>')
    }
    fileReader.readAsDataURL(file);

  }else{

    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}

function hideElements(){

  let length = dropArea.children.length;

  // hide everything
  for( let x = 0; x < length; x+=1 ){

    dropArea.children[x].classList.add("hide");

  }

}

function deleteFile(){

  let length = dropArea.children.length;

  // show everything but the last 2
  for( let x = 0; x < length-2; x+=1 ){

    dropArea.children[x].classList.remove("hide");

  }

  // remove the last 2 ( image and delete button )
  dropArea.children[ dropArea.children.length - 1 ].remove();
  dropArea.children[ dropArea.children.length - 1 ].remove();



}



