var cities = {
	"Oklahoma Average":{rates:[{rate_k:3.304000, startgal:0, endgal:5000}, {rate_k:4.710000, startgal:5000, endgal:10000}, {rate_k:4.820300, startgal:10000, endgal:50000}, {rate_k:4.842300, startgal:50000, endgal:Infinity}], min:17.190000},
	"AVANT":{rates:[{rate_k:7.800000, startgal:0, endgal:5000}, {rate_k:9.000000, startgal:5000, endgal:10000}, {rate_k:9.000000, startgal:10000, endgal:50000}, {rate_k:9.000000, startgal:50000, endgal:Infinity}], min:17.500000},
	"BESSIE":{rates:[{rate_k:3.200000, startgal:0, endgal:5000}, {rate_k:2.750000, startgal:5000, endgal:10000}, {rate_k:3.250000, startgal:10000, endgal:50000}, {rate_k:3.250000, startgal:50000, endgal:Infinity}], min:12.750000},
	"BROKEN BOW":{rates:[{rate_k:1.500000, startgal:0, endgal:5000}, {rate_k:2.186000, startgal:5000, endgal:10000}, {rate_k:2.039300, startgal:10000, endgal:50000}, {rate_k:2.200000, startgal:50000, endgal:Infinity}], min:10.000000},
	"BUTLER":{rates:[{rate_k:4.476000, startgal:0, endgal:5000}, {rate_k:7.462000, startgal:5000, endgal:10000}, {rate_k:7.459800, startgal:10000, endgal:50000}, {rate_k:7.460000, startgal:50000, endgal:Infinity}], min:21.420000},
	"BYARS":{rates:[{rate_k:2.300000, startgal:0, endgal:5000}, {rate_k:4.000000, startgal:5000, endgal:10000}, {rate_k:4.000000, startgal:10000, endgal:50000}, {rate_k:4.000000, startgal:50000, endgal:Infinity}], min:15.000000},
	"CARMEN":{rates:[{rate_k:1.200000, startgal:0, endgal:5000}, {rate_k:3.000000, startgal:5000, endgal:10000}, {rate_k:3.000000, startgal:10000, endgal:50000}, {rate_k:3.000000, startgal:50000, endgal:Infinity}], min:20.430000},
	"CASHION":{rates:[{rate_k:4.800000, startgal:0, endgal:5000}, {rate_k:6.000000, startgal:5000, endgal:10000}, {rate_k:4.750000, startgal:10000, endgal:50000}, {rate_k:5.000000, startgal:50000, endgal:Infinity}], min:23.000000},
	"CHICKASHA":{rates:[{rate_k:1.650000, startgal:0, endgal:5000}, {rate_k:2.750000, startgal:5000, endgal:10000}, {rate_k:2.906300, startgal:10000, endgal:50000}, {rate_k:3.825000, startgal:50000, endgal:Infinity}], min:11.150000},
	"COPAN":{rates:[{rate_k:2.400000, startgal:0, endgal:5000}, {rate_k:3.090000, startgal:5000, endgal:10000}, {rate_k:3.198800, startgal:10000, endgal:50000}, {rate_k:3.200000, startgal:50000, endgal:Infinity}], min:18.000000},
	"CYRIL":{rates:[{rate_k:3.000000, startgal:0, endgal:5000}, {rate_k:4.280000, startgal:5000, endgal:10000}, {rate_k:5.490000, startgal:10000, endgal:50000}, {rate_k:5.500000, startgal:50000, endgal:Infinity}], min:20.250000},
	"DRUMRIGHT":{rates:[{rate_k:3.330000, startgal:0, endgal:5000}, {rate_k:5.600000, startgal:5000, endgal:10000}, {rate_k:5.600000, startgal:10000, endgal:50000}, {rate_k:5.600000, startgal:50000, endgal:Infinity}], min:21.000000},
	"EDMOND":{rates:[{rate_k:4.656000, startgal:0, endgal:5000}, {rate_k:5.820000, startgal:5000, endgal:10000}, {rate_k:6.693300, startgal:10000, endgal:50000}, {rate_k:6.490000, startgal:50000, endgal:Infinity}], min:7.100000},
	"ELDORADO":{rates:[{rate_k:2.682000, startgal:0, endgal:5000}, {rate_k:4.470000, startgal:5000, endgal:10000}, {rate_k:4.470000, startgal:10000, endgal:50000}, {rate_k:4.470000, startgal:50000, endgal:Infinity}], min:15.000000},
	"ENID":{rates:[{rate_k:3.576000, startgal:0, endgal:5000}, {rate_k:4.470000, startgal:5000, endgal:10000}, {rate_k:4.309800, startgal:10000, endgal:50000}, {rate_k:4.470000, startgal:50000, endgal:Infinity}], min:10.880000},
	"EUFAULA":{rates:[{rate_k:2.400000, startgal:0, endgal:5000}, {rate_k:5.000000, startgal:5000, endgal:10000}, {rate_k:6.512500, startgal:10000, endgal:50000}, {rate_k:6.500000, startgal:50000, endgal:Infinity}], min:9.500000},
	"FAIRFAX":{rates:[{rate_k:3.280000, startgal:0, endgal:5000}, {rate_k:4.300000, startgal:5000, endgal:10000}, {rate_k:4.500000, startgal:10000, endgal:50000}, {rate_k:4.548000, startgal:50000, endgal:Infinity}], min:17.000000},
	"FOSS":{rates:[{rate_k:2.700000, startgal:0, endgal:5000}, {rate_k:4.500000, startgal:5000, endgal:10000}, {rate_k:4.500000, startgal:10000, endgal:50000}, {rate_k:4.500000, startgal:50000, endgal:Infinity}], min:9.000000},
	"GEARY":{rates:[{rate_k:2.720000, startgal:0, endgal:5000}, {rate_k:3.400000, startgal:5000, endgal:10000}, {rate_k:3.400000, startgal:10000, endgal:50000}, {rate_k:3.400000, startgal:50000, endgal:Infinity}], min:20.000000},
	"GLENCOE":{rates:[{rate_k:15.000000, startgal:0, endgal:5000}, {rate_k:15.000000, startgal:5000, endgal:10000}, {rate_k:15.000000, startgal:10000, endgal:50000}, {rate_k:15.000000, startgal:50000, endgal:Infinity}], min:10.000000},
	"GOTEBO":{rates:[{rate_k:4.200000, startgal:0, endgal:5000}, {rate_k:7.000000, startgal:5000, endgal:10000}, {rate_k:7.350000, startgal:10000, endgal:50000}, {rate_k:7.000000, startgal:50000, endgal:Infinity}], min:22.000000},
	"HEADRICK":{rates:[{rate_k:5.600000, startgal:0, endgal:5000}, {rate_k:7.000000, startgal:5000, endgal:10000}, {rate_k:7.000000, startgal:10000, endgal:50000}, {rate_k:7.000000, startgal:50000, endgal:Infinity}], min:32.000000},
	"HOBART":{rates:[{rate_k:3.738000, startgal:0, endgal:5000}, {rate_k:6.314000, startgal:5000, endgal:10000}, {rate_k:6.475000, startgal:10000, endgal:50000}, {rate_k:6.490000, startgal:50000, endgal:Infinity}], min:24.220000},
	"HOLLIS":{rates:[{rate_k:2.400000, startgal:0, endgal:5000}, {rate_k:4.000000, startgal:5000, endgal:10000}, {rate_k:4.050000, startgal:10000, endgal:50000}, {rate_k:4.000000, startgal:50000, endgal:Infinity}], min:22.500000},
	"HUGO":{rates:[{rate_k:3.680000, startgal:0, endgal:5000}, {rate_k:4.600000, startgal:5000, endgal:10000}, {rate_k:4.522500, startgal:10000, endgal:50000}, {rate_k:4.650000, startgal:50000, endgal:Infinity}], min:16.950000},
	"HYDRO":{rates:[{rate_k:1.460000, startgal:0, endgal:5000}, {rate_k:3.000000, startgal:5000, endgal:10000}, {rate_k:2.992500, startgal:10000, endgal:50000}, {rate_k:3.104000, startgal:50000, endgal:Infinity}], min:21.600000},
	"JET":{rates:[{rate_k:2.070000, startgal:0, endgal:5000}, {rate_k:3.850000, startgal:5000, endgal:10000}, {rate_k:3.950000, startgal:10000, endgal:50000}, {rate_k:3.950000, startgal:50000, endgal:Infinity}], min:21.500000},
	"JONES":{rates:[{rate_k:1.812000, startgal:0, endgal:5000}, {rate_k:2.406000, startgal:5000, endgal:10000}, {rate_k:3.856800, startgal:10000, endgal:50000}, {rate_k:3.856800, startgal:50000, endgal:Infinity}], min:13.070000},
	"KAW CITY":{rates:[{rate_k:2.400000, startgal:0, endgal:5000}, {rate_k:3.120000, startgal:5000, endgal:10000}, {rate_k:3.772500, startgal:10000, endgal:50000}, {rate_k:3.990000, startgal:50000, endgal:Infinity}], min:21.000000},
	"KREBS":{rates:[{rate_k:3.800000, startgal:0, endgal:5000}, {rate_k:5.500000, startgal:5000, endgal:10000}, {rate_k:6.193800, startgal:10000, endgal:50000}, {rate_k:6.000000, startgal:50000, endgal:Infinity}], min:17.250000},
	"LAVERNE":{rates:[{rate_k:0.712000, startgal:0, endgal:5000}, {rate_k:1.780000, startgal:5000, endgal:10000}, {rate_k:1.945000, startgal:10000, endgal:50000}, {rate_k:2.000000, startgal:50000, endgal:Infinity}], min:45.000000},
	"LEEDEY":{rates:[{rate_k:4.800000, startgal:0, endgal:5000}, {rate_k:6.000000, startgal:5000, endgal:10000}, {rate_k:6.000000, startgal:10000, endgal:50000}, {rate_k:6.000000, startgal:50000, endgal:Infinity}], min:13.750000},
	"MADILL":{rates:[{rate_k:4.428000, startgal:0, endgal:5000}, {rate_k:5.598000, startgal:5000, endgal:10000}, {rate_k:5.599800, startgal:10000, endgal:50000}, {rate_k:0.037300, startgal:50000, endgal:Infinity}], min:8.970000},
	"MARLOW":{rates:[{rate_k:1.200000, startgal:0, endgal:5000}, {rate_k:2.000000, startgal:5000, endgal:10000}, {rate_k:2.097500, startgal:10000, endgal:50000}, {rate_k:0.746700, startgal:50000, endgal:Infinity}], min:9.850000},
	"MAYSVILLE":{rates:[{rate_k:5.450000, startgal:0, endgal:5000}, {rate_k:5.500000, startgal:5000, endgal:10000}, {rate_k:6.050000, startgal:10000, endgal:50000}, {rate_k:6.335000, startgal:50000, endgal:Infinity}], min:20.000000},
	"MCALESTER":{rates:[{rate_k:3.198000, startgal:0, endgal:5000}, {rate_k:5.330000, startgal:5000, endgal:10000}, {rate_k:5.330000, startgal:10000, endgal:50000}, {rate_k:5.330000, startgal:50000, endgal:Infinity}], min:11.000000},
	"MEDFORD":{rates:[{rate_k:1.230000, startgal:0, endgal:5000}, {rate_k:2.050000, startgal:5000, endgal:10000}, {rate_k:2.162500, startgal:10000, endgal:50000}, {rate_k:2.796000, startgal:50000, endgal:Infinity}], min:17.000000},
	"MINCO":{rates:[{rate_k:4.200000, startgal:0, endgal:5000}, {rate_k:7.500000, startgal:5000, endgal:10000}, {rate_k:9.712500, startgal:10000, endgal:50000}, {rate_k:10.000000, startgal:50000, endgal:Infinity}], min:15.000000},
	"MORRIS":{rates:[{rate_k:6.720000, startgal:0, endgal:5000}, {rate_k:8.400000, startgal:5000, endgal:10000}, {rate_k:8.400000, startgal:10000, endgal:50000}, {rate_k:8.400000, startgal:50000, endgal:Infinity}], min:16.400000},
	"MOUNTAIN PARK":{rates:[{rate_k:0.130000, startgal:0, endgal:5000}, {rate_k:8.070000, startgal:5000, endgal:10000}, {rate_k:8.070000, startgal:10000, endgal:50000}, {rate_k:8.070000, startgal:50000, endgal:Infinity}], min:30.000000},
	"MULHALL":{rates:[{rate_k:5.400000, startgal:0, endgal:5000}, {rate_k:6.750000, startgal:5000, endgal:10000}, {rate_k:6.750000, startgal:10000, endgal:50000}, {rate_k:6.750000, startgal:50000, endgal:Infinity}], min:9.000000},
	"NOBLE":{rates:[{rate_k:2.220000, startgal:0, endgal:5000}, {rate_k:3.050000, startgal:5000, endgal:10000}, {rate_k:3.346500, startgal:10000, endgal:50000}, {rate_k:3.346500, startgal:50000, endgal:Infinity}], min:17.240000},
	"NORMAN":{rates:[{rate_k:3.35, startgal:0, endgal:5000}, {rate_k:4.10, startgal:5000, endgal:15000}, {rate_k:5.2, startgal:15000, endgal:20000}, {rate_k:6.80, startgal:20000, endgal:Infinity},], min:6.0},
	"OKEENE":{rates:[{rate_k:0.172000, startgal:0, endgal:5000}, {rate_k:3.276000, startgal:5000, endgal:10000}, {rate_k:4.571000, startgal:10000, endgal:50000}, {rate_k:4.312000, startgal:50000, endgal:Infinity}], min:15.520000},
	"PAULS VALLEY":{rates:[{rate_k:2.400000, startgal:0, endgal:5000}, {rate_k:2.740000, startgal:5000, endgal:10000}, {rate_k:3.000000, startgal:10000, endgal:50000}, {rate_k:3.000000, startgal:50000, endgal:Infinity}], min:15.800000},
	"PERRY":{rates:[{rate_k:1.730000, startgal:0, endgal:5000}, {rate_k:2.278000, startgal:5000, endgal:10000}, {rate_k:2.444800, startgal:10000, endgal:50000}, {rate_k:3.555900, startgal:50000, endgal:Infinity}], min:22.800000},
	"PIEDMONT":{rates:[{rate_k:3.258000, startgal:0, endgal:5000}, {rate_k:5.430000, startgal:5000, endgal:10000}, {rate_k:6.046300, startgal:10000, endgal:50000}, {rate_k:6.190000, startgal:50000, endgal:Infinity}], min:24.280000},
	"PONCA CITY":{rates:[{rate_k:2.344000, startgal:0, endgal:5000}, {rate_k:2.286000, startgal:5000, endgal:10000}, {rate_k:2.778500, startgal:10000, endgal:50000}, {rate_k:2.286100, startgal:50000, endgal:Infinity}], min:9.740000},
	"PORTER":{rates:[{rate_k:5.640000, startgal:0, endgal:5000}, {rate_k:7.350000, startgal:5000, endgal:10000}, {rate_k:7.350000, startgal:10000, endgal:50000}, {rate_k:7.350000, startgal:50000, endgal:Infinity}], min:20.200000},
	"PRAGUE":{rates:[{rate_k:2.500000, startgal:0, endgal:5000}, {rate_k:2.500000, startgal:5000, endgal:10000}, {rate_k:2.500000, startgal:10000, endgal:50000}, {rate_k:2.500000, startgal:50000, endgal:Infinity}], min:13.000000},
	"PRYOR CREEK":{rates:[{rate_k:2.190000, startgal:0, endgal:5000}, {rate_k:3.650000, startgal:5000, endgal:10000}, {rate_k:3.650000, startgal:10000, endgal:50000}, {rate_k:3.650000, startgal:50000, endgal:Infinity}], min:7.300000},
	"QUAPAW":{rates:[{rate_k:1.650000, startgal:0, endgal:5000}, {rate_k:2.900000, startgal:5000, endgal:10000}, {rate_k:3.956300, startgal:10000, endgal:50000}, {rate_k:4.000000, startgal:50000, endgal:Infinity}], min:19.000000},
	"REYDON":{rates:[{rate_k:1.500000, startgal:0, endgal:5000}, {rate_k:3.900000, startgal:5000, endgal:10000}, {rate_k:3.900000, startgal:10000, endgal:50000}, {rate_k:3.900000, startgal:50000, endgal:Infinity}], min:24.000000},
	"RINGLING":{rates:[{rate_k:4.130000, startgal:0, endgal:5000}, {rate_k:7.810000, startgal:5000, endgal:10000}, {rate_k:6.322000, startgal:10000, endgal:50000}, {rate_k:6.286700, startgal:50000, endgal:Infinity}], min:11.570000},
	"ROLAND":{rates:[{rate_k:3.316000, startgal:0, endgal:5000}, {rate_k:4.250000, startgal:5000, endgal:10000}, {rate_k:4.532800, startgal:10000, endgal:50000}, {rate_k:4.510000, startgal:50000, endgal:Infinity}], min:18.310000},
	"SAPULPA":{rates:[{rate_k:4.584000, startgal:0, endgal:5000}, {rate_k:5.730000, startgal:5000, endgal:10000}, {rate_k:5.874500, startgal:10000, endgal:50000}, {rate_k:5.720200, startgal:50000, endgal:Infinity}], min:12.740000},
	"SPIRO":{rates:[{rate_k:1.512000, startgal:0, endgal:5000}, {rate_k:2.568000, startgal:5000, endgal:10000}, {rate_k:2.660000, startgal:10000, endgal:50000}, {rate_k:2.730000, startgal:50000, endgal:Infinity}], min:16.250000},
	"STILLWATER":{rates:[{rate_k:6.88, startgal:0, endgal:5000}, {rate_k:7.22, startgal:5000, endgal:12000}, {rate_k:8.05, startgal:12000, endgal:Infinity},], min:6.88},
	"STROUD":{rates:[{rate_k:6.500000, startgal:0, endgal:5000}, {rate_k:4.640000, startgal:5000, endgal:10000}, {rate_k:2.522300, startgal:10000, endgal:50000}, {rate_k:3.000000, startgal:50000, endgal:Infinity}], min:18.580000},
	"TECUMSEH":{rates:[{rate_k:3.132000, startgal:0, endgal:5000}, {rate_k:3.990000, startgal:5000, endgal:10000}, {rate_k:3.990000, startgal:10000, endgal:50000}, {rate_k:3.990000, startgal:50000, endgal:Infinity}], min:20.700000},
	"TISHOMINGO":{rates:[{rate_k:2.220000, startgal:0, endgal:5000}, {rate_k:2.850000, startgal:5000, endgal:10000}, {rate_k:2.900000, startgal:10000, endgal:50000}, {rate_k:2.900000, startgal:50000, endgal:Infinity}], min:24.020000},
	"WALTERS":{rates:[{rate_k:2.100000, startgal:0, endgal:5000}, {rate_k:4.500000, startgal:5000, endgal:10000}, {rate_k:4.500000, startgal:10000, endgal:50000}, {rate_k:4.250000, startgal:50000, endgal:Infinity}], min:14.500000},
	"WAYNOKA":{rates:[{rate_k:4.630000, startgal:0, endgal:5000}, {rate_k:3.920000, startgal:5000, endgal:10000}, {rate_k:5.250000, startgal:10000, endgal:50000}, {rate_k:5.250000, startgal:50000, endgal:Infinity}], min:21.500000},
	"WEATHERFORD":{rates:[{rate_k:2.130000, startgal:0, endgal:5000}, {rate_k:3.650000, startgal:5000, endgal:10000}, {rate_k:3.975000, startgal:10000, endgal:50000}, {rate_k:4.050000, startgal:50000, endgal:Infinity}], min:12.000000},
	"WOODWARD":{rates:[{rate_k:0.680000, startgal:0, endgal:5000}, {rate_k:1.700000, startgal:5000, endgal:10000}, {rate_k:2.111300, startgal:10000, endgal:50000}, {rate_k:2.050000, startgal:50000, endgal:Infinity}], min:13.750000},
	"WYNNEWOOD":{rates:[{rate_k:1.440000, startgal:0, endgal:5000}, {rate_k:2.500000, startgal:5000, endgal:10000}, {rate_k:2.500000, startgal:10000, endgal:50000}, {rate_k:0.750000, startgal:50000, endgal:Infinity}], min:13.000000},
	"YALE":{rates:[{rate_k:9.256000, startgal:0, endgal:5000}, {rate_k:12.090000, startgal:5000, endgal:10000}, {rate_k:12.580000, startgal:10000, endgal:50000}, {rate_k:12.655400, startgal:50000, endgal:Infinity}], min:20.660000},
	"YUKON":{rates:[{rate_k:2.274000, startgal:0, endgal:5000}, {rate_k:3.790000, startgal:5000, endgal:10000}, {rate_k:4.426500, startgal:10000, endgal:50000}, {rate_k:4.460000, startgal:50000, endgal:Infinity}], min:13.500000},
};

function calculateBill(cityname, gallons) {
    /* Start with the minumum bill */
    var bill = cities[cityname].min;

    /* Calculate portions of the water bill for each block rate and add them to the bill */
    for (i = 0; i < cities[cityname].rates.length; i++) {
        var r = cities[cityname].rates[i].rate_k;          //the billing rate per 1000 gallons
        var r_start = cities[cityname].rates[i].startgal;  //number of gallons where rate starts
        var r_end = cities[cityname].rates[i].endgal;      //number of gallons where rate ends

        /* Calculate the number of applicable gallons (g) for the current rate:
            If gallons <= r_start, then g = 0.
            If gallons >= r_end, then g = (r_end - r_start).
            If r_start < gallons < r_end, then g = (gallons - r_start).
        */
        var g = Math.max(Math.min(gallons,r_end) - r_start, 0);

        /* Calculate the bill portion from this rate block */
        //rate is per 1000 gallons, so multiply by (1/1000)
        var block_bill = r * g * 0.001; 
    
        bill += block_bill;
    }

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
        // Create a log of what city was selected
        // There should be an entry in the web server's log showing a 
        // successful request for "city_log.html?city=selected_city".
        // The city_log.html file is empty.
        $.get("city_log.html", {city:$('#city option:selected').val()});
    });
});

