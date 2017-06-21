var cities = {
	"Oklahoma Average":{min:15.00, rate:5.45},
	ALVA:{min:10.0, rate:5.55},
	ADA:{min:10.35, rate:5.60},
	BIXBY:{min:10.85, rate:5.63}
};

var updateBill = function() {
    var gallons = calcData.total_household_month;
    var reduced_gallons = (0.9 * gallons);
    var cityname = $('#city option:selected').val();
    var bill = Math.max(cities[cityname].rate * gallons / 1000.0, cities[cityname].min);
    var reduced_bill = Math.max(cities[cityname].rate * reduced_gallons / 1000.0, cities[cityname].min);
    var savings = bill - reduced_bill;
    $('#monthly_bill').html('Estimated monthly bill: $'+bill.toFixed(2));
    $('#monthly_bill_reduced').html('With 10% reduction: $'+reduced_bill.toFixed(2));
    $('#monthly_savings').html('Savings: $'+savings.toFixed(2));
};

$(document).ready(function(){
    // Populate the city select list from the cities object
    $('#city').empty();
    $.each(Object.keys(cities), function(i, p){
        $('#city').append($('<option></option>').val(p).html(p));
    });

    // Update the bill estimates on various events
    $("form :input").change(function(){
        //console.log('Trying to write bill amount');
	updateBill();
    });
    $("form :input").keyup(function(){
        updateBill();
    });
    $('#city').change(function(){
        updateBill();
    });
});

