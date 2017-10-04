// JavaScript Document
$(document).ready(function() {
	"use strict";
	console.log('navItem Found?');
	var navItem = $('li.nav-item')[0];
	var navStyle = window.getComputedStyle(navItem, null);
	var lastShown = $('#selector-overlay-0');
	
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	var clickable = true;
	
	console.log(navItem);
	console.log(navStyle.height + " " + navStyle.width);

	console.log($('#selector-overlay-0'));

    $('#selector-overlay-0').css('height', navStyle.height);
	$('#selector-overlay-0').css('width', navStyle.width);
	$('#selector-overlay-1').css('height', navStyle.height);
	$('#selector-overlay-1').css('width', navStyle.width);
	$('#selector-overlay-2').css('height', navStyle.height);
	$('#selector-overlay-2').css('width', navStyle.width);
	$('#selector-overlay-3').css('height', navStyle.height);
	$('#selector-overlay-3').css('width', navStyle.width);
	
	$('.overlay').on('click', function() {
		console.log($(this));
		console.log($(this).attr('id'));
		switch($(this).attr('id')) {
            case 'ol-rnr':    
                window.open('https://github.com/ReachAndRelief/Reach-And-Relief-iOS-App');
                break;
			case 'ol-langua':
				window.open('https://github.com/Langua/Langua', '_blank');
				break;
			case 'ol-senate':
				window.open('https://github.com/SHurtado91112/SGSenate', '_blank');
				break;
			case 'ol-chirpi':
				window.open('https://github.com/SHurtado91112/Chirpi', '_blank');
				break;
			case 'ol-fiesta':
				window.open('https://github.com/SHurtado91112/Fiestagram', '_blank');
				break;
			case 'ol-foodda':
				window.open('https://github.com/SHurtado91112/Foodda', '_blank');
				break;
			case 'ol-salon':
				window.open('https://github.com/SHurtado91112/Salon-Invoice-Application', '_blank');
				break;
			case 'ol-debug':
				window.open('https://github.com/SHurtado91112/Mission-Debug', '_blank');
				break;
			case 'ol-photag':
				window.open('https://github.com/SHurtado91112/Photag', '_blank');
				break;
			case 'ol-agora':
				window.open('http://agoraorg.com/', '_blank');
				break;
			case 'ol-wahi':
				window.open('http://www.wahiride.com/', '_blank');
				break;
			case 'ol-idtech':
				window.open('https://www.idtech.com/', '_blank');
				break;
			default:
				break;
		}
	});
	
	$('#collapsingNavbar').on('show.bs.collapse', function () {
        $('#selector-overlay-0').hide();
		$('#selector-overlay-1').hide();
		$('#selector-overlay-2').hide();
		$('#selector-overlay-3').hide();
	});
	
	$('#collapsingNavbar').on('shown.bs.collapse', function () {
		var navItem = $('li.nav-item')[0];
		var navStyle = window.getComputedStyle(navItem, null);
		$('#selector-overlay-0').css('height', navStyle.height);
        $('#selector-overlay-0').css('width', navStyle.width);
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
	
	//hide appropriate lists
    $('#recent').show();
	$('#portfolio').hide();
	$('#experience').hide();
	$('#resume').hide();
	
	$(window).resize(function() {
		console.log("Handler for resize()");
		var navItem = $('li.nav-item')[0];
		var navStyle = window.getComputedStyle(navItem, null);
		$('#selector-overlay-0').css('height', navStyle.height);
		$('#selector-overlay-0').css('width', navStyle.width);
        $('#selector-overlay-1').css('height', navStyle.height);
		$('#selector-overlay-1').css('width', navStyle.width);
		$('#selector-overlay-2').css('height', navStyle.height);
		$('#selector-overlay-2').css('width', navStyle.width);
		$('#selector-overlay-3').css('height', navStyle.height);
		$('#selector-overlay-3').css('width', navStyle.width);
	});

	$('#selector-overlay-0').show();
    $('#selector-overlay-1').hide();
	$('#selector-overlay-2').hide();
	$('#selector-overlay-3').hide();
	
    var navLink0 = document.getElementById('navLink0');
	var navLink1 = document.getElementById('navLink1');
	var navLink2 = document.getElementById('navLink2');
	var navLink3 = document.getElementById('last-nav-link');
	
	navLink0.addEventListener('click', function() {
		
		if(clickable)
		{
			clickable = false;
			
			var selected = document.getElementsByClassName('selected');
			console.log(selected);
			for(var i = 0; i < selected.length; i++) {
				selected[i].classList.remove('selected');
			}

			navLink0.classList.add('selected');
			$('#selector-overlay-0').show();

			if(lastShown.attr('id') !== 'selector-overlay-0')
			{	
				$('#selector-overlay-0').addClass('animated fadeInRight').one(animationEnd, function() {
						$('#selector-overlay-0').removeClass('animated fadeInRight');
						clickable = true;
					});

                if(lastShown.attr('id') === 'selector-overlay-1') {
					$('#portfolio').addClass('animated fadeOut').one(animationEnd, function() {
						$('#portfolio').removeClass('animated fadeOut');
						$('#portfolio').hide();
						
						$('#recent').show();
						$('#recent').addClass('animated fadeIn').one(animationEnd, function() {
							$('#recent').removeClass('animated fadeIn');
							clickable = true;
						});
					});
					
					$('#selector-overlay-1').addClass('animated fadeOutLeft').one(animationEnd, function() {
						$('#selector-overlay-1').removeClass('animated fadeOutLeft');
						$('#selector-overlay-1').hide();
						$('#selector-overlay-1').css("display","none");
						$('#selector-overlay-2').css("display","none");
                        $('#selector-overlay-3').css("display","none");
						
						clickable = true;	
					});
                }
                else if(lastShown.attr('id') === 'selector-overlay-2') {
					$('#experience').addClass('animated fadeOut').one(animationEnd, function() {
						$('#experience').removeClass('animated fadeOut');
						$('#experience').hide();
						
						$('#recent').show();
						$('#recent').addClass('animated fadeIn').one(animationEnd, function() {
							$('#recent').removeClass('animated fadeIn');
							clickable = true;
						});
					});
					
					$('#selector-overlay-2').addClass('animated fadeOut').one(animationEnd, function() {
						$('#selector-overlay-2').removeClass('animated fadeOut');
						$('#selector-overlay-2').hide();
						$('#selector-overlay-1').css("display","none");
                        $('#selector-overlay-2').css("display","none");
						$('#selector-overlay-3').css("display","none");
						
						clickable = true;	
					});
				}
				else {
					$('#resume').addClass('animated fadeOut').one(animationEnd, function() {
						$('#resume').removeClass('animated fadeOut');
						$('#resume').hide();
						
						$('#recent').show();
						$('#recent').addClass('animated fadeIn').one(animationEnd, function() {
							$('#recent').removeClass('animated fadeIn');
							clickable = true;
						});
					});
					
					$('#selector-overlay-3').addClass('animated fadeOut').one(animationEnd, function() {
						$('#selector-overlay-3').removeClass('animated fadeOut');
						$('#selector-overlay-3').hide();
						$('#selector-overlay-1').css("display","none");
                        $('#selector-overlay-2').css("display","none");
						$('#selector-overlay-3').css("display","none");
						
						clickable = true;
					});
				}
			}

			console.log(lastShown);

            clickable = true;
			lastShown = $('#selector-overlay-0');
		}
	}, false);
    
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

			if(lastShown.attr('id') !== 'selector-overlay-1' && lastShown.attr('id') !== 'selector-overlay-0')
			{	
				$('#selector-overlay-1').addClass('animated fadeInRight').one(animationEnd, function() {
						$('#selector-overlay-1').removeClass('animated fadeInRight');
						clickable = true;
					});

				if(lastShown.attr('id') === 'selector-overlay-2') {
					$('#experience').addClass('animated fadeOut').one(animationEnd, function() {
						$('#experience').removeClass('animated fadeOut');
						$('#experience').hide();
						
						$('#portfolio').show();
						$('#portfolio').addClass('animated fadeIn').one(animationEnd, function() {
							$('#portfolio').removeClass('animated fadeIn');
							clickable = true;
						});
					});
					
					$('#selector-overlay-2').addClass('animated fadeOutLeft').one(animationEnd, function() {
						$('#selector-overlay-2').removeClass('animated fadeOutLeft');
						$('#selector-overlay-2').hide();
						$('#selector-overlay-2').css("display","none");
						$('#selector-overlay-3').css("display","none");
						
						clickable = true;	
					});
				}
				else {
					$('#resume').addClass('animated fadeOut').one(animationEnd, function() {
						$('#resume').removeClass('animated fadeOut');
						$('#resume').hide();
						
						$('#portfolio').show();
						$('#portfolio').addClass('animated fadeIn').one(animationEnd, function() {
							$('#portfolio').removeClass('animated fadeIn');
							clickable = true;
						});
					});
					
					$('#selector-overlay-3').addClass('animated fadeOut').one(animationEnd, function() {
						$('#selector-overlay-3').removeClass('animated fadeOut');
						$('#selector-overlay-3').hide();
						$('#selector-overlay-2').css("display","none");
						$('#selector-overlay-3').css("display","none");
						
						clickable = true;
					});
				}
			}
            else if(lastShown.attr('id') === 'selector-overlay-0')
            {
                  $('#selector-overlay-1').addClass('animated fadeInLeft').one(animationEnd, function() {
                        $('#selector-overlay-1').removeClass('animated fadeInLeft');
                        clickable = true;
                    });

                $('#recent').addClass('animated fadeOut').one(animationEnd, function() {
						$('#recent').removeClass('animated fadeOut');
						$('#recent').hide();
						
						$('#portfolio').show();
						$('#portfolio').addClass('animated fadeIn').one(animationEnd, function() {
							$('#portfolio').removeClass('animated fadeIn');
							clickable = true;
						});
					});
					
					$('#selector-overlay-0').addClass('animated fadeOutRight').one(animationEnd, function() {
						$('#selector-overlay-0').removeClass('animated fadeOutRight');
						$('#selector-overlay-0').hide();
						$('#selector-overlay-0').css("display","none");
						$('#selector-overlay-0').css("display","none");
						
						clickable = true;	
					});
            }

			console.log(lastShown);
            clickable = true;
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
					
					$('#resume').addClass('animated fadeOut').one(animationEnd, function() {
						$('#resume').removeClass('animated fadeOut');
						$('#resume').hide();
						
						$('#experience').show();
						$('#experience').addClass('animated fadeIn').one(animationEnd, function() {
							$('#experience').removeClass('animated fadeIn');
							clickable = true;
						});
					});
					
					$('#selector-overlay-3').addClass('animated fadeOutLeft').one(animationEnd, function() {
						$('#selector-overlay-3').removeClass('animated fadeOutLeft');
						$('#selector-overlay-3').hide();
						$('#selector-overlay-1').css("display","none");
						$('#selector-overlay-3').css("display","none");
                        $('#selector-overlay-0').css("display","none");
						clickable = true;
					});
				}
				else {
					$('#selector-overlay-2').addClass('animated fadeInLeft').one(animationEnd, function() {
						$('#selector-overlay-2').removeClass('animated fadeInLeft');
					});
					
                    if(lastShown.attr('id') === 'selector-overlay-1')
                    {
                        $('#portfolio').addClass('animated fadeOut').one(animationEnd, function() {
                            $('#portfolio').removeClass('animated fadeOut');
                            $('#portfolio').hide();

                            $('#experience').show();
                            $('#experience').addClass('animated fadeIn').one(animationEnd, function() {
                                $('#experience').removeClass('animated fadeIn');
                                clickable = true;
                            });
                        });

                        $('#selector-overlay-1').addClass('animated fadeOutRight').one(animationEnd, function() {
                            $('#selector-overlay-1').removeClass('animated fadeOutRight');
                            $('#selector-overlay-1').hide();
                            $('#selector-overlay-3').css("display","none");
                            $('#selector-overlay-1').css("display","none");
                            $('#selector-overlay-0').css("display","none");
                            clickable = true;
                        });
                    }
                    else
                    {
                        $('#recent').addClass('animated fadeOut').one(animationEnd, function() {
                                $('#recent').removeClass('animated fadeOut');
                                $('#recent').hide();

                                $('#experience').show();
                                $('#experience').addClass('animated fadeIn').one(animationEnd, function() {
                                    $('#experience').removeClass('animated fadeIn');
                                    clickable = true;
                                });
                            });

                            $('#selector-overlay-0').addClass('animated fadeOut').one(animationEnd, function() {
                                $('#selector-overlay-0').removeClass('animated fadeOut');
                                $('#selector-overlay-0').hide();
                                $('#selector-overlay-3').css("display","none");
                                $('#selector-overlay-1').css("display","none");
                                $('#selector-overlay-0').css("display","none");
                                clickable = true;
                            });
                    }
					
				}
			}

			console.log(lastShown);
            clickable = true;
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
					$('#portfolio').addClass('animated fadeOut').one(animationEnd, function() {
						$('#portfolio').removeClass('animated fadeOut');
						$('#portfolio').hide();
						
						$('#resume').show();
						$('#resume').addClass('animated fadeIn').one(animationEnd, function() {
							$('#resume').removeClass('animated fadeIn');
							clickable = true;
						});
					});
					
					$('#selector-overlay-1').addClass('animated fadeOut').one(animationEnd, function() {
						$('#selector-overlay-1').removeClass('animated fadeOut');
						$('#selector-overlay-1').hide();
						$('#selector-overlay-2').css("display","none");
						$('#selector-overlay-1').css("display","none");

						clickable = true;
					});
				}
				else if (lastShown.attr('id') === 'selector-overlay-2'){
					$('#experience').addClass('animated fadeOut').one(animationEnd, function() {
						$('#experience').removeClass('animated fadeOut');
						$('#experience').hide();
						
						$('#resume').show();
						$('#resume').addClass('animated fadeIn').one(animationEnd, function() {
							$('#resume').removeClass('animated fadeIn');
							clickable = true;
						});
					});
					
					$('#selector-overlay-2').addClass('animated fadeOutRight').one(animationEnd, function() {
						$('#selector-overlay-2').removeClass('animated fadeOutRight');
						$('#selector-overlay-2').hide();
						$('#selector-overlay-1').css("display","none");
						$('#selector-overlay-2').css("display","none");

						clickable = true;
					});
				}
                else {
					$('#recent').addClass('animated fadeOut').one(animationEnd, function() {
						$('#recent').removeClass('animated fadeOut');
						$('#recent').hide();
						
						$('#resume').show();
						$('#resume').addClass('animated fadeIn').one(animationEnd, function() {
							$('#resume').removeClass('animated fadeIn');
							clickable = true;
						});
					});
					
					$('#selector-overlay-0').addClass('animated fadeOut').one(animationEnd, function() {
						$('#selector-overlay-0').removeClass('animated fadeOut');
						$('#selector-overlay-0').hide();
						$('#selector-overlay-1').css("display","none");
						$('#selector-overlay-2').css("display","none");
                        $('#selector-overlay-0').css("display","none");

						clickable = true;
					});
				}
			}

			console.log(lastShown);
            clickable = true;
			lastShown = $('#selector-overlay-3');
		}
	}, false);
});