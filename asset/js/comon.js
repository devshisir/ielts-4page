$(document).ready(function () {
    // global variable
    var ielts = $(window);
    var page = $('html, body');

    // sidebar toggle
    $('.menu_bar_toggle').on('click', function () {
        $('#sidebar_menu').addClass('show');
    })
    $('.close').on('click', function () {
        $('#sidebar_menu').removeClass('show');
    })
    // course toggle
    $('.courses').on('click', function () {
        $(this).toggleClass('active');
        $('.toggle_arrow').toggleClass('translate')
        $('.course_togle').toggleClass('show');
        return false;
    })
    // resource toggle
    $('.resourse').on('click', function () {
        $(this).toggleClass('active');
        $('.toggle_arrow_2').toggleClass('translate')
        $('.resourse_toggle').toggleClass('show');
        return false;
    })
    $('.mobile_contact').on('click', function () {
        $('#mobile_contact_popup').addClass('show');
        return false;
    })
    $('.mobile_contact_close').on('click', function () {
        $('#mobile_contact_popup').removeClass('show');
    })

    //header fix web
    ielts.on('scroll', function () {
        if (ielts.scrollTop() > 200) {
            $('#header_top').addClass('animated slideInDown fix')
        } else {
            $('#header_top').removeClass('animated slideInDown fix')
        }
    });


    //header fix mobile
    ielts.on('scroll', function () {
        if (ielts.scrollTop() > 50) {
            $('#mobile_header').addClass('animated slideInDown fix')
        } else {
            $('#mobile_header').removeClass('animated slideInDown fix')
        }
    })

















});