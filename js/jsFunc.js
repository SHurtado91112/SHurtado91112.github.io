//before completely loaded, these functions will be activated
$( document ).ready(function() {
                    $('#btnLearn').addClass("animated fadeInUp");
                    $('.divider').fadeOut(0);
                    $('body').fadeOut(0);
                    $('.hover-text').fadeOut(0);
                    $('#portfolio').hide();
                    $('#resume').hide();
                    $('#about').hide();
                    $('.hover-text').prop('disabled', false);
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
    
    $('body').fadeIn(1000);
    
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
                          function(){
                                if($('.hover-text').prop('disabled') == false)
                                {
                                    $('.hover-text').fadeToggle("fast");
                                }
                                $('.hover-text').html("Resume");
                                console.log("Resume");
                                
                           });
    $('a.fa-folder').hover(
                           function(){
                                if($('.hover-text').prop('disabled') == false)
                                {
                                    $('.hover-text').fadeToggle("fast");
                                }
                                $('.hover-text').html("Portfolio");
                                console.log("Portfolio");
                           });
    $('a.fa-linkedin').hover(
                           function(){
                                if($('.hover-text').prop('disabled') == false)
                                {
                                    $('.hover-text').fadeToggle("fast");
                                }
                                $('.hover-text').html("Linked In");
                                console.log("Linked In");
                           });
    $('a.fa-github').hover(
                           function(){
                                if($('.hover-text').prop('disabled') == false)
                                {
                                    $('.hover-text').fadeToggle("fast");
                                }
                                $('.hover-text').html("Github");
                                console.log("Github");
                           });
    $('a.fa-info').hover(
                           function(){
                                if($('.hover-text').prop('disabled') == false)
                                {
                                    $('.hover-text').fadeToggle("fast");
                                }
                                $('.hover-text').html("About Me");
                                console.log("About");
                           });
    
    document.querySelector('a.fa-folder').onclick = function(e)
    {
        $('.hover-text').fadeOut("fast", function(){
                                    $('.hover-text').prop('disabled', true);
                                 });
        $('.divider').fadeOut(400);
    
        $('#home').fadeOut(400, function()
        {
            $('#home').prop("disabled", true);
                           
            console.log($('#home').prop('disabled'));
                           
            if($('#home').prop('disabled'))
            {
                $('#portfolio').fadeIn(400);
            }
        });
        
        
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
        e.preventDefault(); document.querySelector('.divider').classList.toggle('darkenBack');
    }
    
    document.querySelector('a.fa-file-code-o').onclick = function(e)
    {
        $('.hover-text').fadeOut("fast", function(){
                                 $('.hover-text').prop('disabled', true);
                                 });
        $('.divider').fadeOut(400);
        
        $('#home').fadeOut(400, function()
                           {
                           $('#home').prop("disabled", true);
                           
                           console.log($('#home').prop('disabled'));
                           
                           if($('#home').prop('disabled'))
                           {
                           
                           $('#resume').fadeIn(400);
                           }
                           });
        
        
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
        e.preventDefault(); document.querySelector('.divider').classList.toggle('darkenBack');
    }
    
    document.querySelector('a.fa-info').onclick = function(e)
    {
        $('.hover-text').fadeOut("fast", function(){
                                 $('.hover-text').prop('disabled', true);
                                 });
        $('.divider').fadeOut(400);
        
        $('#home').fadeOut(400, function()
                           {
                           $('#home').prop("disabled", true);
                           
                           console.log($('#home').prop('disabled'));
                           
                           if($('#home').prop('disabled'))
                           {
                           
                           $('#about').fadeIn(400);
                           }
                           });
        
        
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
        e.preventDefault(); document.querySelector('.divider').classList.toggle('darkenBack');
    }

    document.querySelector('#back1').onclick = function(e)
    {
        $('#portfolio').fadeOut(400);
        
        $('.divider').fadeIn(400, function()
                           {
                           $('#home').prop("disabled", false);
                           $('.hover-text').prop('disabled', false);
                           console.log($('#home').prop('disabled'));
                           
                           if($('#home').prop('disabled') == false)
                           {
                                $('#home').fadeIn(400);
                           }
                           });
        
        
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
        e.preventDefault(); document.querySelector('.divider').classList.toggle('darkenBack');
    }
    
    document.querySelector('#back2').onclick = function(e)
    {
        $('#resume').fadeOut(400);
        
        $('.divider').fadeIn(400, function()
                             {
                             $('#home').prop("disabled", false);
                             $('.hover-text').prop('disabled', false);
                             console.log($('#home').prop('disabled'));
                             
                             if($('#home').prop('disabled') == false)
                             {
                                $('#home').fadeIn(400);
                             }
                             });
        
        
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
        e.preventDefault(); document.querySelector('.divider').classList.toggle('darkenBack');
    }
    
    document.querySelector('#back3').onclick = function(e)
    {
        $('#about').fadeOut(400);
        
        $('.divider').fadeIn(400, function()
                             {
                             $('#home').prop("disabled", false);
                             $('.hover-text').prop('disabled', false);
                             console.log($('#home').prop('disabled'));
                             
                             if($('#home').prop('disabled') == false)
                             {
                                $('#home').fadeIn(400);
                             }
                             });
        
        
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
        e.preventDefault(); document.querySelector('.divider').classList.toggle('darkenBack');
    }
    
    
    
    document.querySelector('a.fa-close').onclick = function(e)
    {
        $('.divider').fadeOut(400);
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
        e.preventDefault(); document.querySelector('.divider').classList.toggle('darkenBack');
    }
    
    document.querySelector('#btnLearn').onclick = function(e)
    {
        $('.divider').fadeIn(400);
        e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        e.preventDefault(); document.querySelector('.circle').classList.toggle('z-index');
        e.preventDefault(); document.querySelector('.divider').classList.toggle('darkenBack');
    }
}