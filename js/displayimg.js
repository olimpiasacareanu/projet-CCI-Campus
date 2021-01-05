
$(document).ready(function(){


    var close = $("#close")[0]; // récupérer le bouton dans une varible close


    // Cliquer sur un item de caroussel 

    $(".item div").click(function(){

            
        $('#myModal').css("display", "flex"); 
        $('.icons').css("display", "none"); // les icones ne s'affiche plus une fois la fênetre #myModal ouverte

     
        var image = $(this).children("div .project").attr("src"); // récupérer l'image avec la classe .project 
        $("#displayImg").attr("src", image); // attribuer l'image récuperée avant à l'id #displayImg 
    
        var caption = $(this).children("img").attr("alt"); // récuperer le texte attribué à l'image dans la variable caption
        $("#caption").html(caption); // attribuer la variable récupérée à l'id #caption
    
        var linkproject = $(this).children(".item .link").attr("href");
        var a_link = $("#linkzoom").attr("href", linkproject);
        $(" #linkzoom").html(linkproject);

        var description = $("p", this).text(); // récuperer la description avec l'élément p dans une variable description 
        $("#description").html(description); // attribuer l'image récupérée avant à l'id #displayImg 

    });

    // Fermer une fenêtre en cliquant sur un bouton

    $(".close-btn").click(function(){
        $('#myModal').css("display", "none"); // la fenêtre #myModal n'est plus visible 
        $('.icons').css("display", "block");  // les icones s'affiche du nouveau une fois la fenêtre #myModal fermée
    });
    
  });