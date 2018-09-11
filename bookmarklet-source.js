
//---------------------------------------------------------------------
// it is souce code used in bookmarklet.js
//---------------------------------------------------------------------

(function(){

    // get title from HTML tag 
    //var t = document.getElementById('pw_title').innerText.split('/')[0];

    // get title from URL
    var t = document.location.href.split('/').pop().replace('.html','').replace(/-/g,' ');
    // or similar method 
    //var t = document.location.href.split('/').slice(-1).replace('.html','').replace(/-/g,' ');

    // open in new window/tab 
    var w = window.open('https://www.filmweb.pl/search?q=' + t, '_blank');

})()

(function(){

    // get title from HTML tag 
    //var t = document.getElementById('pw_title').innerText.split('/')[0];

    // get title from URL
    var t = document.location.href.split('/').pop().replace('.html','').replace(/-/g,' ');
    // or similar method 
    //var t = document.location.href.split('/').slice(-1).replace('.html','').replace(/-/g,' ');

    // open in the same window/tab 
    location.href='https://www.filmweb.pl/search?q=' + t;

})()
