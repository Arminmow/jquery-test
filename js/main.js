
/*--------------------------------------------------------------
 Preloader
--------------------------------------------------------------*/
$(window).on('load', function() {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
            $(this).remove();
        });
    }
});

/*--------------------------------------------------------------
AOS init
--------------------------------------------------------------*/
$(window).on('load' , function (){
    AOS.init();
});

/*--------------------------------------------------------------
Back to top button
--------------------------------------------------------------*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.top').fadeIn('slow');
    } else {
        $('.top').fadeOut('slow');
    }
});

$('.top').click(function (){
    $('body , html').animate({
        scrollTop: 0
    }, 1000);
});

/*--------------------------------------------------------------
Smooth scrolling
--------------------------------------------------------------*/
$('.scroll').click(function (e){
    e.preventDefault();
    $('body , html').animate({
        scrollTop: $(this.hash).offset().top
    } , 1000)
})

// Active link switch
$(window).scroll(function (){
    var scrollBarLocation = $(this).scrollTop();
    //console.log(scrollBarLocation)
    $('.scroll').each(function (){

        var sectionOffset = $(this.hash).offset().top;
        console.log(this.hash)

        if (sectionOffset <= scrollBarLocation){
            $(this).addClass("nav-active");
        }
    })

})
















window.addEventListener('scroll' , function (){
    var header = document.getElementById("headerNav");
    if (window.scrollY > 0) {
        header.classList.add("sticky" );
    }
    else {
        header.classList.remove("sticky")
    }

})