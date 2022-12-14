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


    removeLocalStorage();
}


async function getLikes(){

    let likes = [0,0];

    await fetch(

        'https://myportfoly.herokuapp.com/get-likes',
        {
            method:'GET'
        }
    ).then(

        resp => resp.json()
    ).then(

        (data) => {

            // likes
            likes[0] = parseInt(data[0].likes)

            // dislikes
            likes[1] = parseInt(data[0].dislikes)

        }

    ).catch( (e)=>{

        console.log(e)
    } )

    return likes;
}

function updateDislikes(newDislike){

    fetch(
        '/update-dislikes',
        {
            headers: { // this made us not get an empty object
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify({newDislike:newDislike} )
        }
    ).then(

        resp => resp.json()
    ).then(

        data => data

    ).catch( (e)=>{

        console.log(e)
    } )

}

function updateLikes(newLike){

    fetch(
        '/update-likes',
        {
            headers: { // this made us not get an empty object
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify({newLike:newLike} )
        }
    ).then(

        resp => resp.json()
    ).then(

        data => data

    ).catch( (e)=>{

        console.log(e)
    } )

}


async function storeIconImage(imageSRC){


    // alert(imageSRC)

    await fetch(

        `/store-icon-image`,
        {
                        headers: { // this made us not get the file
                            "Content-Type": "application/json"
                        },
            method: 'POST',
            body: JSON.stringify({imageSRC:imageSRC})
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

function removeLocalStorage(){


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
    localStorage.removeItem("htmlContent")
    localStorage.removeItem("footerName")
    localStorage.removeItem("section")
}