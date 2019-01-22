$('.loading').hide();
$(document).ready(function () {
    setTimeout(function () {
        $('.loading-button').remove();
    }, 500);
    $('.loading').fadeIn(1000);


    // 1. Sticky fixed header
    var stickyOffset = $('.stickyEnd').offset().top; //  The distance from the last element which has class "stickyEnd" of header to top 
    $(window).scroll(function () {

        var sticky = $('.sticky'),
            scroll = $(window).scrollTop(); // The distance from the current position to top 
        if (scroll >= stickyOffset) {
            sticky.addClass('fixed');
        }
        else sticky.removeClass('fixed');
    });

    // 2. Slide gallery
    var imgIndex = 0;
    var imgStart = parseInt($(".gallery img:first").attr("imgIndex"));
    var imgEnd = parseInt($(".gallery img:last").attr("imgIndex"));
    $(".gallery img").each(function () {
        if ($(this).is(':visible'))
            imgIndex = $(this).attr("imgIndex");
    });
    $("#gallery-next").click(function () {
        if (imgIndex == imgEnd) {
            imgIndex = imgStart - 1;
        }
        imgNext = ++imgIndex;
        $(".gallery img").hide();
        $(".gallery img").eq(imgNext).show();
    });
    $("#gallery-prev").click(function () {
        if (imgIndex == imgStart) {
            imgIndex = imgEnd + 1;
        }
        imgPrev = --imgIndex;
        $(".gallery img").hide();
        $(".gallery img").eq(imgPrev).show();
    });
    setInterval(function () {
        $('#gallery-next').click();
    }, 2000);

    // 3. Horizontal-slide
    $('#slide-next').click(function () {
        $('.slide-holder').stop();
        $('.slide-holder').animate({ left: -303 }, 1500, function () { // moving the element which has .slide-holder to the left a 318px distance 
            $('.slide:first').addClass('moveThis'); // Find the first element of 6 slides
            $('.moveThis').insertAfter('.slide:last-child'); // Moving the first slide after the last element
            $('.slide-holder').css("left", "0px"); // Reset the left value to 0px
            $('.moveThis').removeClass('moveThis'); // Reset the first element by removing the class "moveThis"
        });
    });
    
    $('#slide-prev').click(function (a) {
        $('.slide-holder').stop();
        $('.slide:last-child').addClass('moveThis'); // Find the first element of 6 slides
        $('.moveThis').insertBefore('.slide:first'); // Moving the first slide after the last element
        $('.slide-holder').css("left", "-303px"); // Reset the left value to 0px


        $('.slide-holder').animate({ left: 0 }, 1500, function () { // moving the element which has .slide-holder to the left a 318px distance 

            $('.moveThis').removeClass('moveThis'); // Reset the first element by removing the class "partnerMove"
        });
    });

    setInterval(function () {
        $('#slide-next').click();

    }, 4000);

    // 4. Overlay Fade
    $(".overlay").mouseenter(function () {
        $(this).addClass('overlay-on');
    });
    $(".overlay").mouseleave(function () {
        $(this).removeClass('overlay-on');
    });

    // 5. Overlay Zoom
    $(".border-circle").mouseenter(function () {
        $(this).addClass('scale-up');
    });
    $(".border-circle").mouseleave(function () {
        $(this).removeClass('scale-up');
    });

    // 6. Horizontal-slide- PartnerLogo
    var windowWidth = $(window).width();
    if (windowWidth < 1110) {
        $('#partner-next').click(function () {
            $('.partner-holder').animate({ left: -170 }, 1500, function () { // moving the element which has .slide-holder to the left a 318px distance 
                $('.partner-logo:first').addClass('partnerMove'); // Find the first element of 6 slides
                $('.partnerMove').insertAfter('.partner-logo:last-child'); // Moving the first slide after the last element
                $('.partner-holder').css("left", "0px"); // Reset the left value to 0px
                $('.partnerMove').removeClass('partnerMove'); // Reset the first element by removing the class "partnerMove"
            });
        });
        $('#partner-prev').click(function (a) {
            $('.partner-holder').stop();
            $('.partner-logo:last-child').addClass('partnerMove'); // Find the first element of 6 slides
            $('.partnerMove').insertBefore('.partner-logo:first'); // Moving the first slide after the last element
            $('.partner-holder').css("left", "-170px"); // Reset the left value to 0px


            $('.partner-holder').animate({ left: 0 }, 1500, function () { // moving the element which has .slide-holder to the left a 318px distance 

                $('.partnerMove').removeClass('partnerMove'); // Reset the first element by removing the class "partnerMove"
            });
        });

        setInterval(function () {
            $('#partner-next').click();
        }, 4000);
    }

    // 7. scroll to top

    $(".scrollTop").click(function () {
        $("body").animate({ scrollTop: 0 }, 1000);
    });

   
});



