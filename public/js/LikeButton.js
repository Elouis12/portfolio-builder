let likeButton = (e)=>{

    // check which button
    let element = e.currentTarget;

    let thumbsUp = document.getElementById("thumbsUp")
    let thumbsDown = document.getElementById("thumbsDown")

    let thumbsUpCount = document.getElementById("thumbsUp-count")
    let thumbsDownCount = document.getElementById("thumbsDown-count")


    // check which button clicked
    if( element.classList.contains("fa-thumbs-up") ){

        // check if colored
        if( element.classList.contains("thumbs-green")){

            element.classList.remove("thumbs-green");

            // or else it will be -1
            if( parseInt(thumbsUpCount.innerText) > 0 ){

                thumbsUpCount.innerText = parseInt(thumbsUpCount.innerText) - 1
            }


        }else{

            localStorage.setItem("like", "up");

            element.classList.add("thumbs-green");
            thumbsDown.classList.remove("thumbs-red");

            thumbsUpCount.innerText = parseInt(thumbsUpCount.innerText) + 1;

            // remove 1 from thumbs down
            if( parseInt(thumbsDownCount.innerText) > 0 ){

                thumbsDownCount.innerText = parseInt(thumbsDownCount.innerText) - 1
            }


        }

    }else if ( element.classList.contains("fa-thumbs-down") ) {

        // check if colored
        if( element.classList.contains("thumbs-red")){

            element.classList.remove("thumbs-red");


            // or else it will be -1
            if( parseInt(thumbsDownCount.innerText) > 0 ){

                thumbsDownCount.innerText = parseInt(thumbsDownCount.innerText) - 1
            }


        }else{

            localStorage.setItem("like", "down");

            element.classList.add("thumbs-red");
            thumbsUp.classList.remove("thumbs-green");

            thumbsDownCount.innerText = parseInt(thumbsDownCount.innerText) + 1

            // remove 1 from thumbs up
            if( parseInt(thumbsUpCount.innerText) > 0 ){

                thumbsUpCount.innerText = parseInt(thumbsUpCount.innerText) - 1
            }


        }
    }

}

let thumbsUp = document.getElementById("thumbsUp")
let thumbsDown = document.getElementById("thumbsDown")


thumbsUp.addEventListener("click", likeButton);
thumbsDown.addEventListener("click", likeButton);


// store user like decision
if( localStorage.getItem("like") ){

    if( localStorage.getItem("like") === "up" ){

        thumbsUp.click();

    }else if( localStorage.getItem("like") === "down" ){

        thumbsDown.click();
    }
}