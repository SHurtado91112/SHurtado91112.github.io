
//before completely loaded, these functions will be activated
$( document ).ready(function() {
                    $('#btnLearn').addClass("animated fadeInUp");
                    $('body').fadeOut(0);
                    $('.hover-text').fadeOut(0);
                    $('#portfolio').hide();
                    $('#resume').hide();
                    $('#about').hide();
                    $('.hover-text').prop('disabled', false);
                    $('#myCarousel').carousel({
                                              interval: 1500, //changes the speed
                                              pause: null
                                              })
                    
                    });

//on-going listening for resize of window,
//will then change the size of the radial menu

window.addEventListener("resize", function(){
                        
                    var items = document.querySelectorAll('.circle a');
                        
                    for(var i = 0, l = items.length; i < l; i++)
                    {
                        var x; //affects radius of cos func
                        var y; //affects radius of sin func
                        
                    if ($(window).width() < 768)
                    {
                        
                        x = 3;
                        y = 3;
                    }
                    else if ($(window).width() >= 768)
                    {
                        x = 5;
                        y = 5;
                    }
                        
                    console.log("change logged: " + x + ", " + y);
                    
                    items[i].style.left = (50 - 25*x*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
                        
                    items[i].style.top = (50 + 16*y*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
                    }
                        
                        
                });

//initial js set up for when everything is loaded
window.onload = function(){
    // radial menu demo by http://creative-punch.net
    
    
    $('body').fadeIn(0);
    
    //background
    
    var items = document.querySelectorAll('.circle a');
    
    for(var i = 0, l = items.length; i < l; i++)
    {
        var x; //affects radius of cos func
        var y; //affects radius of sin func
        
        if ($(window).width() < 768)
        {
            x = 3;
            y = 3;
        }
        else if ($(window).width() >= 768)
        {
            x = 5;
            y = 5;
        }
        
        console.log("initial: " + x + ", " + y);
        
        items[i].style.left = (50 - 25*x*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
        
        items[i].style.top = (50 + 16*y*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
    }
    
    
    $('a.fa-file-code-o').hover(
                          function(event){
                                if($('.hover-text').prop('disabled') == false)
                                {
                                    $('.hover-text').fadeToggle("fast");
                                }
                                $('.hover-text').html("<h1>Resume</h1>");
                                console.log($('.hover-text').position());
                                
                           });
    $('a.fa-folder').hover(
                           function(){
                                if($('.hover-text').prop('disabled') == false)
                                {
                                    $('.hover-text').fadeToggle("fast");
                                }
                                $('.hover-text').html("<h1>Portfolio</h1>");
                                console.log();
                           });
    $('a.fa-linkedin').hover(
                           function(){
                                if($('.hover-text').prop('disabled') == false)
                                {
                                    $('.hover-text').fadeToggle("fast");
                                }
                                $('.hover-text').html("<h1>LinkedIn</h1>");
                                console.log("LinkedIn");
                           });
    $('a.fa-github').hover(
                           function(){
                                if($('.hover-text').prop('disabled') == false)
                                {
                                    $('.hover-text').fadeToggle("fast");
                                }
                                $('.hover-text').html("<h1>Github</h1>");
                                console.log("Github");
                           });
    $('a.fa-info').hover(
                           function(){
                                if($('.hover-text').prop('disabled') == false)
                                {
                                    $('.hover-text').fadeToggle("fast");
                                }
                                $('.hover-text').html("<h1>About Me</h1>");
                                console.log("About");
                           });

    
    document.querySelector('a.fa-folder').onclick = function(e)
    {
        $('.hover-text').prop('disabled', true);
        $('.hover-text').fadeOut("fast");
    
      
        $('#home').prop("disabled", true);
        
        console.log($('#home').prop('disabled'));
        
        if($('#home').prop('disabled'))
        {
            $('.hover-text').fadeOut(0);
            $('#portfolio').fadeIn(400);
        }
        
        
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
    }
    
    document.querySelector('a.fa-file-code-o').onclick = function(e)
    {
        $('.hover-text').prop('disabled', true);
        $('.hover-text').fadeOut("fast");

        
        $('#home').prop("disabled", true);
        
        console.log($('#home').prop('disabled'));
        
        if($('#home').prop('disabled'))
        {
            $('.hover-text').fadeOut(0);
            $('#resume').fadeIn(400);
        }
        
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
    }
    
    document.querySelector('a.fa-info').onclick = function(e)
    {
        $('.hover-text').prop('disabled', true);
        $('.hover-text').fadeOut("fast");

        
        $('#home').prop("disabled", true);
                           
        console.log($('#home').prop('disabled'));
                           
        if($('#home').prop('disabled'))
        {
            $('.hover-text').fadeOut(0);
            $('#about').fadeIn(400);
        }
        
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
    }

    document.querySelector('#back1').onclick = function(e)
    {
        $('#portfolio').fadeOut(400);
        
        $('.hover-text').prop('disabled', false);
        
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
    }
    
    document.querySelector('#back2').onclick = function(e)
    {
        $('#resume').fadeOut(400);
        
        $('.hover-text').prop('disabled', false);
        
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
    }
    
    document.querySelector('#back3').onclick = function(e)
    {
        $('#about').fadeOut(400);
    
        $('.hover-text').prop('disabled', false);
        
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
    }
    
    
    
    document.querySelector('a.fa-close').onclick = function(e)
    {
        $('#home').fadeIn(400);
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
    }
    
    document.querySelector('#btnLearn').onclick = function(e)
    {
        $('#home').fadeOut(400);
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
    }
}
