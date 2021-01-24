rtlCheck = false;


function initiateAnimation(){
    AOS.init({
        delay: 500, // values from 0 to 3000, with step 50ms
        duration: 1500, // values from 0 to 3000, with step 50ms
        easing: "ease-out-back" // default easing for AOS animations
    });

    if ($(window).width() < 560) {
        AOS.init({
          once: true
        });
    }
}


$(document).ready(function () {
    

    $('.dropdown-trigger').on('click', function(){
        $('.dropdown-list').not($(this).closest('.dropdown-blk').find('.dropdown-list')).slideUp();
        $(this).closest('.dropdown-blk').find('.dropdown-list').slideToggle();
    });

    $('body').on('click', function(e){
        if($(e.target).closest('.dropdown-blk').length == 0){
            $('.dropdown-list').slideUp();
        }
        if($(e.target).closest('.navbar-nav').length == 0 && $(e.target).closest('#navbar-toggler-lnk').length == 0){
            mobCloseMainMenu();
        }    
    });


    try {
        $('#datepicker').datepicker();
    }
    catch(err) {
        // NO DATE PICKER IN PAGE
    }
});