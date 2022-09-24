let thumbsUp = document.getElementById("thumbsUp")
let thumbsDown = document.getElementById("thumbsDown")

let thumbsUpCount = document.getElementById("thumbsUp-count")
let thumbsDownCount = document.getElementById("thumbsDown-count")

let likes = [];

let setLikeButtons = async ()=>{

    likes = await getLikes().then( data => data);


    thumbsUpCount.innerText = parseInt(thumbsUpCount.innerText) + likes[0]
    thumbsDownCount.innerText = parseInt(thumbsDownCount.innerText) + likes[1];

    // get user stored like decision
    if( localStorage.getItem("like") !== "none" ){

        if( localStorage.getItem("like") === "up" ){

            thumbsUp.click();

        }else if( localStorage.getItem("like") === "down" ){

            thumbsDown.click();
        }
    }
}

setLikeButtons();

let likeButton = async (e)=>{

    // check which button
    let element = e.currentTarget;

    // check which button clicked
    if( element.classList.contains("fa-thumbs-up") ){

        // check if colored
        if( element.classList.contains("thumbs-green")){

            // user removed a like or dislike
            localStorage.setItem("like", "none");

            element.classList.remove("thumbs-green");

            // or else it will be -1
            if( parseInt(thumbsUpCount.innerText) > 0 ){

                thumbsUpCount.innerText = parseInt(thumbsUpCount.innerText) - 1;

                await updateLikes(parseInt(thumbsUpCount.innerText))

            }


        }else{

            localStorage.setItem("like", "up");

            element.classList.add("thumbs-green");
            thumbsDown.classList.remove("thumbs-red");


                thumbsUpCount.innerText = parseInt(thumbsUpCount.innerText) + 1;

                await updateLikes(parseInt(thumbsUpCount.innerText))


            // remove 1 from thumbs down if it increased by 1
            if( parseInt(thumbsDownCount.innerText) > likes[1] ){

                thumbsDownCount.innerText = parseInt(thumbsDownCount.innerText) - 1

                await updateDislikes(parseInt(thumbsDownCount.innerText))

            }


        }

    }else if ( element.classList.contains("fa-thumbs-down") ) {

        // check if colored
        if( element.classList.contains("thumbs-red")){

            // user removed a like or dislike
            localStorage.setItem("like", "none");

            element.classList.remove("thumbs-red");


            // or else it will be -1
            if( parseInt(thumbsDownCount.innerText) > 0 ){

                thumbsDownCount.innerText = parseInt(thumbsDownCount.innerText) - 1

                await updateDislikes(parseInt(thumbsDownCount.innerText))

            }


        }else{

            localStorage.setItem("like", "down");

            element.classList.add("thumbs-red");
            thumbsUp.classList.remove("thumbs-green");

            thumbsDownCount.innerText = parseInt(thumbsDownCount.innerText) + 1

            await updateDislikes(parseInt(thumbsDownCount.innerText))

            // remove 1 from thumbs up if it increased by 1
            if( parseInt(thumbsUpCount.innerText) > likes[0] ){

                thumbsUpCount.innerText = parseInt(thumbsUpCount.innerText) - 1

                await updateLikes(parseInt(thumbsUpCount.innerText))

            }


        }
    }

}

thumbsUp.addEventListener("click", likeButton);
thumbsDown.addEventListener("click", likeButton);


