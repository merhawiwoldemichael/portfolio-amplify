;(function ($, window, document, undefined) {
    'use strict';

    $(document).ready(function () {

        /*------------------SERVICES SLIDER------------------*/
        if ($('.services-list').length) {
            $('.services-list').owlCarousel({
                loop: false,
                nav: true,
                dots: false,
                items: 3,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }

        /*------------------GALLERY SLIDER------------------*/
        if ($('.gallery-list').length) {
            $('.gallery-list').owlCarousel({
                loop: false,
                nav: true,
                dots: false,
                items: 3,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 4000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }

        /*------------------GALLERY SLIDER------------------*/
        if ($('.testimonials-slider').length) {
            $('.testimonials-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    768: {
                        items: 1
                    }
                }
            });
        }

        /*------------------SLIDESHOW------------------*/
        if ($('.background-slider').length) {
            $('.background-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                items: 1,
                margin: 0,
                autoplay: true,
                animateOut: 'fadeOut',
                smartSpeed: 1500,
                autoplayTimeout: 6000
            });
        }

        $(document).on('click', '.btn-subscribe', function () {
            $('#footer').addClass('open');
            return false;
        }).on('click', '.close-subscribe', function () {
            $('#footer').removeClass('open');
            return false;
        }).on('click', '.navbar-toggle', function () {
            $('.navbar-collapse').slideToggle(300);
            return false;
        }).on('click', '.navigation-menu > li > a', function () {
            $('.navbar-collapse').slideUp(300);
        }).on('click', '.next-section', function () {
            fullpage_api.moveSectionDown();
        });

        $('.facts-row').on('inview', function (event, isInView) {
            $('.count-number').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
                setTimeout(function () {
                    $('.count-number').removeClass('count-number').addClass('counted');
                }, 1000);
            });
        });
        $('.skills-row').on('inview', function (event, isInView) {
            $(this).addClass('view');
        });


        /*------------------CONTACT FORM------------------*/
        // Get the form.
        var form = $('#ajax-contact');

        // Get the messages div.
        var formMessages = $('#form-messages');

        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('bg-danger');
                    $(formMessages).addClass('bg-success');

                    // Set the message text.
                    $(formMessages).text('Your message successfully sent');

                    // Clear the form.
                    $('#name, #email, #message').val('');
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('bg-success');
                    $(formMessages).addClass('bg-danger');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });

        });

        /*------------------PRELOADER & ANIMATIONS JS------------------*/
        $(window).on('load', function () {
            $('.preloader').fadeOut();
            $('.animated-row').each(function () {
                var $this = $(this);
                $this.find('.animate').each(function (i) {
                    var $item = $(this);
                    var animation = $item.data('animate');
                    $item.on('inview', function (event, isInView) {
                        if (isInView) {
                            setTimeout(function () {
                                $item.addClass('animated ' + animation).removeClass('animate');
                            }, i * 50);
                        }
                        else if (!screencheck(767)) {
                            $item.removeClass('animated ' + animation).addClass('animate');
                        }
                    });
                });
            });
        });

        /*------------------FULLPAGE SCROLL FUNCTION------------------*/
        if ($('.fullpage-default').length) {
            var myFullpage = new fullpage('.fullpage-default', {
                licenseKey: ' C7F41B00-5E824594-9A5EFB99-B556A3D5',
                anchors: ['slide01', 'slide02', 'slide03', 'slide04', 'slide05', 'slide06', 'slide07'],
                menu: '#nav',
                lazyLoad: true,
                navigation: true,
                navigationPosition: 'right',
                scrollOverflow: true,
                responsiveWidth: 768,
                responsiveHeight: 600,
                responsiveSlides: true
            });
        }

        /*------------------SIDEMENU------------------*/
        $(document).on('click', '.menu-trigger', function () {
            $('body').toggleClass('sidemenu-open');
        }).on('click', '.side-menu .navbar-nav li a', function () {
            $('body').removeClass('sidemenu-open');
        });


    });
})(jQuery, window, document);

/*------------------FUNCTIONS------------------*/
var $winW = function () {
    return $(window).width();
};
var $winH = function () {
    return $(window).height();
};
var $screensize = function (element) {
    $(element).width($winW()).height($winH());
};

var screencheck = function (mediasize) {
    if (typeof window.matchMedia !== "undefined") {
        var screensize = window.matchMedia("(max-width:" + mediasize + "px)");
        if (screensize.matches) {
            return true;
        } else {
            return false;
        }
    } else {
        if ($winW() <= mediasize) {
            return true;
        } else {
            return false;
        }
    }
};