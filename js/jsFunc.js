// A $( document ).ready() block.
$( document ).ready(function() {
                    $('#btnLearn').addClass("animated fadeInUp");
                    $('.divider').fadeOut(0);
                    $('body').fadeOut(0);
                    });

window.onload = function(){
    // radial menu demo by http://creative-punch.net
    
    $('body').fadeIn(1000);
    
    var items = document.querySelectorAll('.circle a');
    
    for(var i = 0, l = items.length; i < l; i++)
    {
        items[i].style.left = (50 - 125*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
        
        items[i].style.top = (50 + 75*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
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