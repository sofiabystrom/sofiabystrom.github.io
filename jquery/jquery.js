// Run code when DOM is loaded
$(document).ready(function() { 

    // Fade in slogan, landing page
    $(".slogan h1").fadeIn(1000);

    // Formatting tables
    $("th").css("font-weight", "600");
    $(".cv_school tr:odd, .cv_work tr:odd").css("background", "#e7ba40");
  
    // Rotate logo when hover
    $(".logo").mouseenter(function() {
        $(this).css("transform", "rotate(-20deg)");
    }).mouseleave(function() {
        $(this).css("transform", "rotate(0deg)");
    })

    // Dark mode function, toggle CSS when button is clicked
    $(".mode_btn").click(function () {
        $("body").toggleClass("dark_mode");
        $("a").toggleClass("dark_link");
        $(this).toggleClass("mode_btn_dark");

        // For better readability, no toggle of classes below
        $(".column_landing").css("color", "#141414");
        $(".cv_school tr:odd, .cv_work tr:odd").css("color", "black");
    })

    // Add class when hover social media icons
    $(".social_media ul li").mouseenter(function() {
        $(this).addClass("sm_hover");
    })

    $(".social_media ul li").mouseleave(function() {
        $(this).removeClass("sm_hover");
    })

    // Back to top-button
    
    // Function for checking number of pixles scrolled
    $(window).scroll(function() {
        var showButton = 100;
            // Show button when minimum 100px is scrolled
            if ($(this).scrollTop() > showButton) { 
                $(".back").fadeIn();
                }
            });
            
        // Smooth back-to-top animation
        $(".back").click(function() {
        $("html").animate({scrollTop: 0}, 1000);
        });
})

