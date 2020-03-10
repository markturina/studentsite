document.addEventListener('DOMContentLoaded', function() {

    // TOGGLE NAV 
    var mymenubutton = document.querySelector('.menu-button');
    var mytogglenav = document.querySelector('.toggle-nav');

    mymenubutton.addEventListener('click', function(){
        mytogglenav.classList.toggle('expanded');
    });
   
});