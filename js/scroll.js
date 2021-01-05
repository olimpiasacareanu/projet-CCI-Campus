var btn = $('#button');  // récupérer le bouton dans une variable btn

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show'); // ajouter la classe .show
  } else {
    btn.removeClass('show'); // enlever la classe .show
  }
});



btn.on('click', function(e) {
  e.preventDefault(); // empêche l'action par défaut d'un élément de se produire
  $('html, body').animate({scrollTop:0}, '500'); // utilisée pour créer des animations personnalisées et définir le nombre de pixels dont le contenu de l'élément a défilé vers le haut.
});

