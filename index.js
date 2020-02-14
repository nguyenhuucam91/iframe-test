$(function() {
  
  //inject html 
  $("button[name='iframe-open']").on('click', function() {
    $("iframe.popup-content").attr('src', 'http://127.0.0.1:8080/popup.html')
  });



});