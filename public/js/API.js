async function sendResume(){

    let resumeFile = document.getElementById("resume-input")
    let form = new FormData();

    // form.append('resume', JSON.stringify( localStorage.getItem("resume") )[0] );
    form.append('resume', /*file*/resumeFile.files[0]);

    await fetch(

        `http://localhost:3000/upload-resume`,
        {
/*            headers: { // this made us not get the file
                "Content-Type": "application/pdf"
            },*/
            method: 'POST',
            body: /*resumeFile.files[0]*/ form
        }
    ).then(

        resp => resp.json()

    ).then(

        data => {
            console.log(data) }
    ).catch(
        (e)=> e
    );
}


async function sendProjectImages(image){

    // let projectImages = document.getElementsByClassName("project-file-input")
    let form = new FormData();


    // form.append('resume', JSON.stringify( localStorage.getItem("resume") )[0] );
    form.append('project-image', image);

    await fetch(

        `http://localhost:3000/upload-project-images`,
        {

            method: 'POST',
            body: form
        }
    ).then(

        resp => resp.json()

    ).then(

        data => { console.log(data) }
    ).catch(
        (e)=> e
    );
}

async function removeImage(imageName){


    await fetch(

        `http://localhost:3000/remove-image/${imageName}`,
        {

            method: 'DELETE',
        }
    ).then(

        resp => resp.json()

    ).then(

        data => { console.log(data) }
    ).catch(
        (e)=> e
    );

}