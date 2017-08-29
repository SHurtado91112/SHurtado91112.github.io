// JavaScript Document
$(document).ready(function() {
	"use strict";
	console.log('navItem Found?');
	var navItem = $('li.nav-item')[0];
	var navStyle = window.getComputedStyle(navItem, null);
	var lastShown = $('#selector-overlay-1');
	
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	var clickable = true;
	
	console.log(navItem);
	console.log(navStyle.height + " " + navStyle.width);

	console.log($('#selector-overlay-1'));

	$('#selector-overlay-1').css('height', navStyle.height);
	$('#selector-overlay-1').css('width', navStyle.width);
	$('#selector-overlay-2').css('height', navStyle.height);
	$('#selector-overlay-2').css('width', navStyle.width);
	$('#selector-overlay-3').css('height', navStyle.height);
	$('#selector-overlay-3').css('width', navStyle.width);
	
	$('#collapsingNavbar').on('show.bs.collapse', function () {
		$('#selector-overlay-1').hide();
		$('#selector-overlay-2').hide();
		$('#selector-overlay-3').hide();
	});
	
	$('#collapsingNavbar').on('shown.bs.collapse', function () {
		var navItem = $('li.nav-item')[0];
		var navStyle = window.getComputedStyle(navItem, null);
		
		$('#selector-overlay-1').css('height', navStyle.height);
		$('#selector-overlay-1').css('width', navStyle.width);
		$('#selector-overlay-2').css('height', navStyle.height);
		$('#selector-overlay-2').css('width', navStyle.width);
		$('#selector-overlay-3').css('height', navStyle.height);
		$('#selector-overlay-3').css('width', navStyle.width);
		
		lastShown.show();
		lastShown.addClass('animated fadeIn').one(animationEnd, function() {
			lastShown.removeClass('animated fadeIn');
		});
	});
	
	$(window).resize(function() {
		console.log("Handler for resize()");
		var navItem = $('li.nav-item')[0];
		var navStyle = window.getComputedStyle(navItem, null);
		$('#selector-overlay-1').css('height', navStyle.height);
		$('#selector-overlay-1').css('width', navStyle.width);
		$('#selector-overlay-2').css('height', navStyle.height);
		$('#selector-overlay-2').css('width', navStyle.width);
		$('#selector-overlay-3').css('height', navStyle.height);
		$('#selector-overlay-3').css('width', navStyle.width);
	});

	$('#selector-overlay-1').show();
	$('#selector-overlay-2').hide();
	$('#selector-overlay-3').hide();
	
	var navLink1 = document.getElementById('navLink1');
	var navLink2 = document.getElementById('navLink2');
	var navLink3 = document.getElementById('last-nav-link');
	
	navLink1.addEventListener('click', function() {
		
		if(clickable)
		{
			clickable = false;
			
			var selected = document.getElementsByClassName('selected');
			console.log(selected);
			for(var i = 0; i < selected.length; i++) {
				selected[i].classList.remove('selected');
			}

			navLink1.classList.add('selected');
			$('#selector-overlay-1').show();

			if(lastShown.attr('id') !== 'selector-overlay-1')
			{
				$('#selector-overlay-1').addClass('animated fadeInRight').one(animationEnd, function() {
						$('#selector-overlay-1').removeClass('animated fadeInRight');
						clickable = true;
					});

				if(lastShown.attr('id') === 'selector-overlay-2') {
					$('#selector-overlay-2').addClass('animated fadeOutLeft').one(animationEnd, function() {
						$('#selector-overlay-2').removeClass('animated fadeOutLeft');
						$('#selector-overlay-2').hide();
						$('#selector-overlay-2').css("display","none");
						$('#selector-overlay-3').css("display","none");
						
						clickable = true;	
					});
				}
				else {
					$('#selector-overlay-3').addClass('animated fadeOut').one(animationEnd, function() {
						$('#selector-overlay-3').removeClass('animated fadeOut');
						$('#selector-overlay-3').hide();
						$('#selector-overlay-2').css("display","none");
						$('#selector-overlay-3').css("display","none");
						
						clickable = true;
					});
				}
			}

			console.log(lastShown);

			lastShown = $('#selector-overlay-1');
		}
	}, false);
	
	navLink2.addEventListener('click', function() {
		
		if(clickable)
		{
			clickable = false;
			var selected = document.getElementsByClassName('selected');
			console.log(selected);
			for(var i = 0; i < selected.length; i++) {
				console.log(selected[i]);
				selected[i].classList.remove('selected');
			}

			navLink2.classList.add('selected');

			$('#selector-overlay-2').show();

			if(lastShown.attr('id') !== 'selector-overlay-2')
			{	
				console.log(lastShown.attr('id'));
				if(lastShown.attr('id') === 'selector-overlay-3') {
					$('#selector-overlay-2').addClass('animated fadeInRight').one(animationEnd, function() {
						$('#selector-overlay-2').removeClass('animated fadeInRight');
						clickable = true;
					});
					$('#selector-overlay-3').addClass('animated fadeOutLeft').one(animationEnd, function() {
						$('#selector-overlay-3').removeClass('animated fadeOutLeft');
						$('#selector-overlay-3').hide();
						$('#selector-overlay-1').css("display","none");
						$('#selector-overlay-3').css("display","none");

						clickable = true;
					});
				}
				else {
					$('#selector-overlay-2').addClass('animated fadeInLeft').one(animationEnd, function() {
						$('#selector-overlay-2').removeClass('animated fadeInLeft');
					});
					$('#selector-overlay-1').addClass('animated fadeOutRight').one(animationEnd, function() {
						$('#selector-overlay-1').removeClass('animated fadeOutRight');
						$('#selector-overlay-1').hide();
						$('#selector-overlay-3').css("display","none");
						$('#selector-overlay-1').css("display","none");

						clickable = true;
					});
				}
			}

			console.log(lastShown);

			lastShown = $('#selector-overlay-2');
		}
	}, false);
	
	navLink3.addEventListener('click', function() {
		
		if(clickable) 
		{
			clickable = false;
			var selected = document.getElementsByClassName('selected');
			console.log(selected);
			for(var i = 0; i < selected.length; i++) {
				selected[i].classList.remove('selected');
			}

			navLink3.classList.add('selected');

			$('#selector-overlay-3').show();

			if(lastShown.attr('id') !== 'selector-overlay-3')
			{	
				$('#selector-overlay-3').addClass('animated fadeInLeft').one(animationEnd, function() {
						$('#selector-overlay-3').removeClass('animated fadeInLeft');
						clickable = true;
					});
				if(lastShown.attr('id') === 'selector-overlay-1') {
					$('#selector-overlay-1').addClass('animated fadeOut').one(animationEnd, function() {
						$('#selector-overlay-1').removeClass('animated fadeOut');
						$('#selector-overlay-1').hide();
						$('#selector-overlay-2').css("display","none");
						$('#selector-overlay-1').css("display","none");

						clickable = true;
					});
				}
				else {
					$('#selector-overlay-2').addClass('animated fadeOutRight').one(animationEnd, function() {
						$('#selector-overlay-2').removeClass('animated fadeOutRight');
						$('#selector-overlay-2').hide();
						$('#selector-overlay-1').css("display","none");
						$('#selector-overlay-2').css("display","none");

						clickable = true;
					});
				}
			}

			console.log(lastShown);

			lastShown = $('#selector-overlay-3');
		}
	}, false);
	
//	$('.navbar-toggler').bind('display:none', function (e) {
//		$('.navbar-nav').addClass('justify-content-end');
//		$('.navbar-nav').removeClass('justify-content-around');
//		console.log("OI");
//		e.stopPropagation();
//	});
////
//	$('.navbar-toggler').bind('display:inline-block', function (e) {
//		$('.navbar-nav').addClass('justify-content-around');
//		$('.navbar-nav').removeClass('justify-content-end');
//				console.log("IO");
//		e.stopPropagation();
//	});
});