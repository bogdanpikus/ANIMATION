alert('HELLO WORLD!');

foo ="Mykhailo";
 bar = foo;
alert(bar);



$(document).ready(function () {
    alert(jQuery.fn.jquery);
});

$(document).ready(function () {

    $('h3 span').click(function () {
        $(this).parent().next().slideToggle(300);
    });
    
});

///$(function () {
 //   $('nav li').hover(function () {
    //    $(this).children('ul').stop(false, true).fadeIn(300);
  //  }), (function () {
  //      $(this).children('ul').stop(false, true).fadeIn(300);
  //  });
//});