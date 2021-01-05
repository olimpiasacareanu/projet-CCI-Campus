'use strict';

function displaynavbar() {
	$('.mobileNav').toggle('show');
}

$(function(){
	$('.hamburger').on('click', displaynavbar);
});
