$('.slider_comments').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: '<button type="button" class="slick-btn slick-next bold"></button>',
  prevArrow: '<button type="button" class="slick-btn slick-prev bold"></button>',
  responsive: [
    {
      breakpoint: 1116,
      settings: {
      	arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 980,
      settings: {
      	arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 652,
      settings: {
      	arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider_partners').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-btn slick-next bold"></button>',
  prevArrow: '<button type="button" class="slick-btn slick-prev bold"></button>',
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1116,
      settings: {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 980,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 652,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider_prices').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 984,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 676,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slick-dots li button').empty();