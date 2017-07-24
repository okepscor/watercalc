var cities = {
	//"Oklahoma Average":{min:15.00, rate:5.45},
	//ALVA:{min:10.0, rate:5.55},
	//ADA:{min:10.35, rate:5.60},
	//BIXBY:{min:10.85, rate:5.63}
	"Oklahoma Average":{rate5k:3.304000, rate10k:4.710000, rate50k:4.820300, rate200k:4.842300, min:17.190000},
	"AVANT":{rate5k:7.800000, rate10k:9.000000, rate50k:9.000000, rate200k:9.000000, min:17.500000},
	"BESSIE":{rate5k:3.200000, rate10k:2.750000, rate50k:3.250000, rate200k:3.250000, min:12.750000},
	"BROKEN BOW":{rate5k:1.500000, rate10k:2.186000, rate50k:2.039300, rate200k:2.200000, min:10.000000},
	"BUTLER":{rate5k:4.476000, rate10k:7.462000, rate50k:7.459800, rate200k:7.460000, min:21.420000},
	"BYARS":{rate5k:2.300000, rate10k:4.000000, rate50k:4.000000, rate200k:4.000000, min:15.000000},
	"CARMEN":{rate5k:1.200000, rate10k:3.000000, rate50k:3.000000, rate200k:3.000000, min:20.430000},
	"CASHION":{rate5k:4.800000, rate10k:6.000000, rate50k:4.750000, rate200k:5.000000, min:23.000000},
	"CHICKASHA":{rate5k:1.650000, rate10k:2.750000, rate50k:2.906300, rate200k:3.825000, min:11.150000},
	"COPAN":{rate5k:2.400000, rate10k:3.090000, rate50k:3.198800, rate200k:3.200000, min:18.000000},
	"CYRIL":{rate5k:3.000000, rate10k:4.280000, rate50k:5.490000, rate200k:5.500000, min:20.250000},
	"DRUMRIGHT":{rate5k:3.330000, rate10k:5.600000, rate50k:5.600000, rate200k:5.600000, min:21.000000},
	"EDMOND":{rate5k:4.656000, rate10k:5.820000, rate50k:6.693300, rate200k:6.490000, min:7.100000},
	"ELDORADO":{rate5k:2.682000, rate10k:4.470000, rate50k:4.470000, rate200k:4.470000, min:15.000000},
	"ENID":{rate5k:3.576000, rate10k:4.470000, rate50k:4.309800, rate200k:4.470000, min:10.880000},
	"EUFAULA":{rate5k:2.400000, rate10k:5.000000, rate50k:6.512500, rate200k:6.500000, min:9.500000},
	"FAIRFAX":{rate5k:3.280000, rate10k:4.300000, rate50k:4.500000, rate200k:4.548000, min:17.000000},
	"FOSS":{rate5k:2.700000, rate10k:4.500000, rate50k:4.500000, rate200k:4.500000, min:9.000000},
	"GEARY":{rate5k:2.720000, rate10k:3.400000, rate50k:3.400000, rate200k:3.400000, min:20.000000},
	"GLENCOE":{rate5k:15.000000, rate10k:15.000000, rate50k:15.000000, rate200k:15.000000, min:10.000000},
	"GOTEBO":{rate5k:4.200000, rate10k:7.000000, rate50k:7.350000, rate200k:7.000000, min:22.000000},
	"HEADRICK":{rate5k:5.600000, rate10k:7.000000, rate50k:7.000000, rate200k:7.000000, min:32.000000},
	"HOBART":{rate5k:3.738000, rate10k:6.314000, rate50k:6.475000, rate200k:6.490000, min:24.220000},
	"HOLLIS":{rate5k:2.400000, rate10k:4.000000, rate50k:4.050000, rate200k:4.000000, min:22.500000},
	"HUGO":{rate5k:3.680000, rate10k:4.600000, rate50k:4.522500, rate200k:4.650000, min:16.950000},
	"HYDRO":{rate5k:1.460000, rate10k:3.000000, rate50k:2.992500, rate200k:3.104000, min:21.600000},
	"JET":{rate5k:2.070000, rate10k:3.850000, rate50k:3.950000, rate200k:3.950000, min:21.500000},
	"JONES":{rate5k:1.812000, rate10k:2.406000, rate50k:3.856800, rate200k:3.856800, min:13.070000},
	"KAW CITY":{rate5k:2.400000, rate10k:3.120000, rate50k:3.772500, rate200k:3.990000, min:21.000000},
	"KREBS":{rate5k:3.800000, rate10k:5.500000, rate50k:6.193800, rate200k:6.000000, min:17.250000},
	"LAVERNE":{rate5k:0.712000, rate10k:1.780000, rate50k:1.945000, rate200k:2.000000, min:45.000000},
	"LEEDEY":{rate5k:4.800000, rate10k:6.000000, rate50k:6.000000, rate200k:6.000000, min:13.750000},
	"MADILL":{rate5k:4.428000, rate10k:5.598000, rate50k:5.599800, rate200k:0.037300, min:8.970000},
	"MARLOW":{rate5k:1.200000, rate10k:2.000000, rate50k:2.097500, rate200k:0.746700, min:9.850000},
	"MAYSVILLE":{rate5k:5.450000, rate10k:5.500000, rate50k:6.050000, rate200k:6.335000, min:20.000000},
	"MCALESTER":{rate5k:3.198000, rate10k:5.330000, rate50k:5.330000, rate200k:5.330000, min:11.000000},
	"MEDFORD":{rate5k:1.230000, rate10k:2.050000, rate50k:2.162500, rate200k:2.796000, min:17.000000},
	"MINCO":{rate5k:4.200000, rate10k:7.500000, rate50k:9.712500, rate200k:10.000000, min:15.000000},
	"MORRIS":{rate5k:6.720000, rate10k:8.400000, rate50k:8.400000, rate200k:8.400000, min:16.400000},
	"MOUNTAIN PARK":{rate5k:0.130000, rate10k:8.070000, rate50k:8.070000, rate200k:8.070000, min:30.000000},
	"MULHALL":{rate5k:5.400000, rate10k:6.750000, rate50k:6.750000, rate200k:6.750000, min:9.000000},
	"NOBLE":{rate5k:2.220000, rate10k:3.050000, rate50k:3.346500, rate200k:3.346500, min:17.240000},
	"OKEENE":{rate5k:0.172000, rate10k:3.276000, rate50k:4.571000, rate200k:4.312000, min:15.520000},
	"PAULS VALLEY":{rate5k:2.400000, rate10k:2.740000, rate50k:3.000000, rate200k:3.000000, min:15.800000},
	"PERRY":{rate5k:1.730000, rate10k:2.278000, rate50k:2.444800, rate200k:3.555900, min:22.800000},
	"PIEDMONT":{rate5k:3.258000, rate10k:5.430000, rate50k:6.046300, rate200k:6.190000, min:24.280000},
	"PONCA CITY":{rate5k:2.344000, rate10k:2.286000, rate50k:2.778500, rate200k:2.286100, min:9.740000},
	"PORTER":{rate5k:5.640000, rate10k:7.350000, rate50k:7.350000, rate200k:7.350000, min:20.200000},
	"PRAGUE":{rate5k:2.500000, rate10k:2.500000, rate50k:2.500000, rate200k:2.500000, min:13.000000},
	"PRYOR CREEK":{rate5k:2.190000, rate10k:3.650000, rate50k:3.650000, rate200k:3.650000, min:7.300000},
	"QUAPAW":{rate5k:1.650000, rate10k:2.900000, rate50k:3.956300, rate200k:4.000000, min:19.000000},
	"REYDON":{rate5k:1.500000, rate10k:3.900000, rate50k:3.900000, rate200k:3.900000, min:24.000000},
	"RINGLING":{rate5k:4.130000, rate10k:7.810000, rate50k:6.322000, rate200k:6.286700, min:11.570000},
	"ROLAND":{rate5k:3.316000, rate10k:4.250000, rate50k:4.532800, rate200k:4.510000, min:18.310000},
	"SAPULPA":{rate5k:4.584000, rate10k:5.730000, rate50k:5.874500, rate200k:5.720200, min:12.740000},
	"SPIRO":{rate5k:1.512000, rate10k:2.568000, rate50k:2.660000, rate200k:2.730000, min:16.250000},
	"STROUD":{rate5k:6.500000, rate10k:4.640000, rate50k:2.522300, rate200k:3.000000, min:18.580000},
	"TECUMSEH":{rate5k:3.132000, rate10k:3.990000, rate50k:3.990000, rate200k:3.990000, min:20.700000},
	"TISHOMINGO":{rate5k:2.220000, rate10k:2.850000, rate50k:2.900000, rate200k:2.900000, min:24.020000},
	"WALTERS":{rate5k:2.100000, rate10k:4.500000, rate50k:4.500000, rate200k:4.250000, min:14.500000},
	"WAYNOKA":{rate5k:4.630000, rate10k:3.920000, rate50k:5.250000, rate200k:5.250000, min:21.500000},
	"WEATHERFORD":{rate5k:2.130000, rate10k:3.650000, rate50k:3.975000, rate200k:4.050000, min:12.000000},
	"WOODWARD":{rate5k:0.680000, rate10k:1.700000, rate50k:2.111300, rate200k:2.050000, min:13.750000},
	"WYNNEWOOD":{rate5k:1.440000, rate10k:2.500000, rate50k:2.500000, rate200k:0.750000, min:13.000000},
	"YALE":{rate5k:9.256000, rate10k:12.090000, rate50k:12.580000, rate200k:12.655400, min:20.660000},
	"YUKON":{rate5k:2.274000, rate10k:3.790000, rate50k:4.426500, rate200k:4.460000, min:13.500000},
};

function calculateBill(cityname, gallons) {
    /* Calculate portions of the water bill for each block rate  */
    // between 50,000 and 200,000 gallons (and we'll also apply this rate to anything higher)
    var bill200k = (cities[cityname].rate200k * Math.max(gallons - 50000, 0) / 1000)
    // between 10,000 and 50,000 gallons
    var bill50k = (cities[cityname].rate50k * Math.max(Math.min(gallons, 50000) - 10000, 0) / 1000)
    // between 5,000 and 10,000 gallons
    var bill10k = (cities[cityname].rate10k * Math.max(Math.min(gallons, 10000) - 5000, 0) / 1000)
    // up to 5,000 gallons
    var bill5k = (cities[cityname].rate5k * Math.min(gallons, 5000) / 1000)

    // The bill will be either the minimum bill or the sum of the stepped rates, whichever is greater.
    var bill = Math.max(cities[cityname].min, bill5k + bill10k + bill50k + bill200k)

    return bill;
}

var updateBill = function() {
    var gallons = calcData.total_household_month;
    var reduced_gallons = (0.9 * gallons);
    var cityname = $('#city option:selected').val();
    var bill = calculateBill(cityname, gallons);
    var reduced_bill = calculateBill(cityname, reduced_gallons)
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

