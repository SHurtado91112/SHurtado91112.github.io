//before completely loaded, these functions will be activated
$( document ).ready(function() {
                    $('#btnLearn').addClass("animated fadeInUp");
                    $('.divider').fadeOut(0);
                    $('body').fadeOut(0);
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
                        
                            items[i].style.left = (50 - 25*x*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
                        
                            items[i].style.top = (50 + 15*y*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
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
        
        items[i].style.left = (50 - 25*x*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
        
        items[i].style.top = (50 + 15*y*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
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