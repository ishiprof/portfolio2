$(() => {
  const checkScrollSlideUp = (scrollBottom) => {
    const scrollSlideUp = $('._scrollSlideUp')

    scrollSlideUp.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveSlideUp')
      } else {
        $(element).removeClass('_isActiveSlideUp')
      }
    })
  }

  const checkScrollSlideDown = (scrollBottom) => {
    const scrollSlideDown = $('._scrollSlideDown')

    scrollSlideDown.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveSlideDown')
      } else {
        $(element).removeClass('_isActiveSlideDown')
      }
    })
  }

  const checkScrollFadeIn = (scrollBottom) => {
    const scrollFadeIn = $('._scrollFadeIn')

    scrollFadeIn.each((index, element) => {
      const isActive =
        $(element).offset().top < scrollBottom /* true or false */

      if (isActive) {
        $(element).addClass('_isActiveFadeIn')
      } else {
        $(element).removeClass('_isActiveFadeIn')
      }
    })
  }

  $(window).scroll(() => {
    const scrollTop = $(this).scrollTop() /* どれだけスクロールしたか？ */
    const windowHeight = $(this).height() /* 画面の高さ */
    const scrollBottom = scrollTop + windowHeight

    checkScrollSlideUp(scrollBottom)
    checkScrollSlideDown(scrollBottom)
    checkScrollFadeIn(scrollBottom)
  })
})


// hero要素のスライド部分実装の為、slickをダウンロード

$('.c-slide').slick({
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
    responsive: [
      {
      breakpoint: 959,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });

  var beforePos = 0;

  function ScrollAnime() {
      var elemTop = $('.p-features').offset().top;
    var scroll = $(window).scrollTop();
      if(scroll == beforePos) {
      }else if(elemTop > scroll || 0 > scroll - beforePos){
      $('.l-header').removeClass('up');	
      $('.l-header').addClass('down');
      }else {
          $('.l-header').removeClass('down');
      $('.l-header').addClass('up');
      }
      
      beforePos = scroll;
  }

  $(window).scroll(function () {
    ScrollAnime();
  });
  
  $(window).on('load', function () {
    ScrollAnime();
  });

  $('#btn').on('click', function(){
    $('.l-sp__header-menu').toggleClass('menu-open');
    $('.p-dropdown').toggleClass('inview');
  });
