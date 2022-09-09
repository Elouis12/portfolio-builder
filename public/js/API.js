async function sendResume(){

    let resumeFile = document.getElementById("resume-input")
    let form = new FormData();

    // form.append('resume', JSON.stringify( localStorage.getItem("resume") )[0] );
    form.append('resume', /*file*/resumeFile.files[0]);

    await fetch(

        `/upload-resume`,
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

        `/upload-project-images`,
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

        `/remove-image/${imageName}`,
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

async function downloadPortfolio(){


/*    await fetch(

        `/template-zip-folder`,
        {

            method: 'GET',
        }
    ).then(

        (resp) => {

            return resp.json();
        }

    ).then(

        (data) => {
            console.log(data);
        }
    ).catch(
        (e)=> e
    );*/

    window.open("/template-zip-folder")


}


async function htmlContent(content){

    // alert("getting content")

        await fetch(

        `/html-content`,
        {
            headers: { // this made us not get the file
                "Content-Type": "application/json"
            },

            method: 'POST',
            body: JSON.stringify({html: content})
        }
    ).then(

        (resp) => {

            return resp.json();
        }

    ).then(

        (data) => {

            if( data.success === "yes" ){

                // alert("finished getting content")
                // hide the overlay again
            }
        }
    ).catch(
        (e)=> e
    );

}


async function removeFiles(){


    // there's an issue where to download, it refreshes the page
    // BUT refreshing the page means removing stuff rom the server to not clog it
    // so when it does that, the pdf and image files get deleted before they even download


    // so as long as did not click the download button
    // we can remove from server
    // download already takes care f that as well
    // if( !localStorage.getItem("downloadTemplate") ){

        await fetch(

            `/remove-files`,
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
    // }



    localStorage.removeItem("portfolio")
    localStorage.removeItem("navigationBar")
    localStorage.removeItem("about")
    localStorage.removeItem("experiences");
    localStorage.removeItem("skills");
    localStorage.removeItem("projects")
    localStorage.removeItem("contacts")
    localStorage.removeItem("resumeName")

    localStorage.removeItem("projectImages")
    localStorage.removeItem("portfolioTitle");
    localStorage.removeItem("portfolioImage");
    localStorage.removeItem("sections");

}