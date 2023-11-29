
  (function ($) {

  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        }
        if(!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*.5;
        $(MainTimelineContainer).find('.inner').css('height',MainTimelineContainerBottom+'px');
      }
      var timeline = $('#vertical-scrollable-timeline li');
      Array.from(timeline).forEach(isScrollIntoView);
    });

    const price = $(".price");
    const loading = $(".loading");
    const protectionValue = document.getElementById("protection-value");
    const contractValue = document.getElementById("contract-value");
    const monthlyPayment = document.getElementById("monthly-payment");
    const inputSlider = document.querySelector("input");
    inputSlider.oninput = () => {
      protectionValue.textContent = inputSlider.value;
    };

    inputSlider.onchange = () => {
      let value = inputSlider.value;

      price.each(function() {
        $(this).addClass("visually-hidden");
      });
      loading.each(function() {
        $(this).removeClass("visually-hidden");
      });

      contractValue.textContent = Math.round(parseInt(value) * 0.1 * 100).toString();

      let monthlyValue = Math.round(parseInt(value) * 0.035 * 100)
      monthlyValue = monthlyValue < 90 ? 90 : monthlyValue;
      monthlyValue = parseInt(value) < 50 ? monthlyValue : monthlyValue + 30;
      monthlyPayment.textContent = monthlyValue.toString();

      setInterval(function () {
        price.each(function() {
          $(this).removeClass("visually-hidden");
        });
        loading.each(function() {
          $(this).addClass("visually-hidden");
        });
      },7000)
    };

  })(window.jQuery);




