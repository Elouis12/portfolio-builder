window.addEventListener('scroll',function() {
    //When scroll change, you save it on localStorage.
    localStorage.setItem('scrollPosition',window.scrollY);
},false);


window.addEventListener('load',function() {
    if(localStorage.getItem('scrollPosition') !== null)
        window.scrollTo(0, localStorage.getItem('scrollPosition'));
},false);




function scrollToPosition(){

    let $root = $('html, body');

    $('a[href^="#"]').click(function() {
        let href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function() {
            window.location.hash = href;
        });
        return false;
    });
}
