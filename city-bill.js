var cities = {
	ALVA:{min:10.0, rate:5.55},
	ADA:{min:10.35, rate:5.60},
	BIXBY:{min:10.85, rate:5.63}
};

$(document).ready(function(){
    $('#city').empty();
    $.each(Object.keys(cities), function(i, p){
        $('#city').append($('<option></option>').val(p).html(p));
    });
});
