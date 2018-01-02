function random(){
	return Math.floor((Math.random() * 899) + 100);
}
$(document).ready(function(){
$('#splashscreen').hide();
$('#home').hide();
$('#SignUp').hide();
$('#verPage').hide();
$('#accountPage').hide();
$('#successful').hide();
//$('body').css({'background-color': 'linear-gradient(to left bottom, #76278F, #2B1E66)', 'background-size': 'cover'});
$('#splashscreen').show();
$('#splashscreen').fadeOut(3000).hide(1000);
setTimeout(function(){
    $('#home').delay(2000).fadeIn(1000);
}, 2000)

//ir a ventana SignUp
$('#sign-up-btn').click(function(){
	$('#home').hide();
	$('#verPage').hide();
	$('#SignUp').show();
	$('#accountPage').hide();
	$('#successful').hide();
});
//ir a ventana home
$('#go-home').click(function(){
	$('#home').show();
	$('#verPage').hide();
	$('#SignUp').hide();
	$('#accountPage').hide();
	$('#successful').hide();
});
//ir a ventana sign up
$('#go-sign-up').click(function(){
	$('#home').hide();
	$('#verPage').hide();
	$('#SignUp').show();
	$('#phoneNumber').val('');
	$('#accountPage').hide();
	$('#successful').hide();
});
//ir a ventana verification
$('#go-verification').click(function(){
	$('#home').hide();
	$('#verPage').show();
	$('#SignUp').hide();
	$('#accountPage').hide();
	$('#verNumber').val('');
	$('#successful').hide();
})

//validar campo numero telefono
$('#phoneNumber').keyup(function(){
	if($(this).val().length == 10){
		console.log('remueve disabled');
		$("#nextButton").removeAttr("disabled");
		$('#nextButton').addClass('btn-primary');
		}else{
			$('#nextButton').removeClass('btn-primary');
			$("#nextButton").attr("disabled", true);
			console.log('anade disabled');
		}
})

//agregando evento a boton next
$('.codeButton').click(function(){
	var code = random();
	alert('Tu codigo es: Lab-'+code);
	$('#verNumber').val('');
	$('#home').hide();
	 $('#SignUp').hide();
	 $('#verPage').show();

//agrega evento a boton next de ventana validacion
$('#verNumber').on('keyup', function(){
	console.log('se desactiva boton');
	$('#verButton').removeClass('btn-primary');
	$("#verButton").attr("disabled", true);
	if($('#verNumber').val() == code){
			$("#verButton").removeAttr("disabled");
		$('#verButton').addClass('btn-primary');
		console.log('se activa boton');
	}
})

//Ir a formulario registro datos
$('#verButton').click(function(){
	$('#home').hide();
	$('#SignUp').hide();
	$('#verPage').hide();
	$('#accountPage').show();
	$('#successful').hide();
})

})
//ir a ventana registro exitoso
$('.form-signin').submit(function(){
	$('#splashscreen').hide();
	$('#home').hide();
	$('#verPage').hide();
	$('#SignUp').hide();
	$('#accountPage').hide();
	$('#verNumber').val('');
	$('#successful').show();
	$('#successful').delay(5000);
})


})

