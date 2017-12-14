$(document).ready(function(){
$('#splashscreen').hide();
$('#home').hide();
$('body').css({'background-color': 'linear-gradient(to left bottom, #76278F, #2B1E66)', 'background-size': 'cover'});
$('#splashscreen').show();
$('#splashscreen').fadeOut(2000).hide(1000);
setTimeout(function(){
    $('#home').delay(500).fadeIn(500);
    $('body').css({'background-color': 'transparent'});
}, 3000)

$('#sign-up-btn').click(function(){
    $('#modal1').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
});

})

