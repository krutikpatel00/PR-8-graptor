$(document).ready(function () {
      $(".schedule-content-box > a").click(function (e) {

            $(this).parent(".schedule-content-box").find("#show-hide").slideToggle();
            $(this).parent(".schedule-content-box").prevAll(".schedule-content-box").find("#show-hide").slideUp();
            $(this).parent(".schedule-content-box").nextAll(".schedule-content-box").find(".#show-hide").slideUp();
      });

});

$(document).ready(function () {
      $(".toggle-manu").click(function (e) {
            $("header nav").slideToggle();
      });
      $(".top-to-back").click(function (e) {
            $("html").animate({ "scrollTop": "0" })
      });
});

$(document).ready(function () {
      $('.owl-carousel-1').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1000: {
                        items: 3
                  }
            }
      })
});

// counter

var a = 0;
$(window).scroll(function () {

      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                  var $this = $(this),
                        countTo = $this.attr('data-count');
                  $({
                        countNum: $this.text()
                  }).animate({
                        countNum: countTo
                  },

                        {

                              duration: 2000,
                              easing: 'swing',
                              step: function () {
                                    $this.text(Math.floor(this.countNum));
                              },
                              complete: function () {
                                    $this.text(this.countNum);
                                    //alert('finished');
                              }

                        });
            });
            a = 1;
      }

});