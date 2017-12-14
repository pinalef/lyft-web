$(document).ready(function(){
$('#splashscreen').hide();
$('#home').hide();
$('body').css({'background-color': 'linear-gradient(to left bottom, #76278F, #2B1E66)', 'background-size': 'cover'});
$('#splashscreen').show();
$('#splashscreen').fadeOut(3000).hide(1000);
setTimeout(function(){
    $('#home').delay(3000).fadeIn(1000);
    $('body').css({'background-color': 'transparent'});
    $('#home').css({'background-image' : 'url(https://media.giphy.com/media/a2QExYEHYCQJq/giphy_s.gif)', 'background-size':'cover'});
}, 3000)

$('#sign-up-btn').click(function(){
    $('#modal1').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
});

})

