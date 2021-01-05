$(document).ready(function(){

	$('.projects .autoplay').slick({
	  slidesToShow: 3, // 3 slides à afficher
	  slidesToScroll: 1, 
	  autoplay: true,
	  autoplaySpeed: 2000, // la durée

	  responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2, // 2 slides à afficher pour la tablette
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1, // 1 slide à afficher pour le mobile
                slidesToScroll: 1,
            }
        }

  ]

	});

});
	