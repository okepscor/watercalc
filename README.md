About the Water Calculator
==========================

This online water use calculator is an extension of the original water use 
calculator provided by the
[Southwest Florida Water Management District (SWFWMD)](https://www.swfwmd.state.fl.us/). 
It has been customized for Oklahoma and extended with a module to estimate 
water bills and savings with a 10% use reduction. 

All of the city data and javascript code we have added are in `city-bill.js`. 
Other changes can be seen in this repository's commit history.

The original calculator from the SWFWMD can be found at 
https://www.swfwmd.state.fl.us/conservation/thepowerof10/.

The distributable version that we started from can be found at 
http://www.swfwmd.state.fl.us/dev/SWFWMD_waterusecal/ and downloaded as a 
[zip file](http://www.swfwmd.state.fl.us/dev/SWFWMD_waterusecal/SWFWMD_waterusecal.zip).

This project is funded by the National Science Foundation grant 
[OIA-1301789](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1301789) 
through OK NSF EPSCoR http://www.okepscor.org/.



Info for maintiners or programmers
==================================


City Data Format
----------------

City data is located in `city-bill.js`. An object, `cities`, is declared at 
the beginning of the file. The `cities` object contains a nested object for 
each city record.

Each city record will look like `"CITY NAME":{rates:[], min:},` with a number 
filled in for the minimum bill and the block information filled in between 
the square brackets. The comma at the end is important.

One or more rate blocks need to appear between the square brackets. Each rate 
block will look like `{rate_k:, startgal:, endgal:},` with numbers filled in 
for each of the fields. The `endgal` value on the highest block rate should 
be set to `Infinity` without quotes.

Here’s an example city record:
```javascript
"ATLANTIS":{rates:[{rate_k:1.23, startgal:0, endgal:5000}, {rate_k:2.34, startgal:5000, endgal:Infinity}], min:12.00},
```
In this example, the city Atlantis has a minimum bill of $12.00, a first 
block rate of $1.23 per 1000 gallons up to 5000 gallons, and a second block 
rate of $2.34 per 1000 gallons for everything over 5000 gallons.

Here's an example declaration of the `cities` object with two cities:
```javascript
var cities = {
    "ATLANTIS":{rates:[{rate_k:1.23, startgal:0, endgal:5000}, {rate_k:2.34, startgal:5000, endgal:Infinity}], min:12.00},
    "MINAS TIRITH":{rates:[{rate_k:5.66, startgal:0, endgal:5000}, {rate_k:6.72, startgal:5000, endgal:10000}, {rate_k:7.05, startgal:10000, endgal:Infinity}], min:23.00},
};
```


Creating City Records from a Spreadsheet
----------------------------------------

Most of the city water rates are derived from data purchased from the 
[Oklahoma Municipal League (OML)](http://www.oml.org/). The OML data shows a 
minimum charge and costs for 5,000 gallons, 10,000 gallons, 50,000 gallons, 
and 200,000 gallons. From this, we derived four block rates: 0-5,000 gallons, 
5,000-10,000 gallons, 10,000-50,000 gallons, and >50,000 gallons.

The block rates were provided to me in a spreadsheet with the first row 
containing column headers. Column 1 (A) contains city names; columns 4-7 (D-G) 
contain the four block rates; column 8 (H) contains the mininumum bill.

I exported the spreadsheet to tab-delimited text (e.g. `water-rates.tsv`) and 
used an [`awk`](https://en.wikipedia.org/wiki/AWK) script to convert the data 
into javascript objects.

```
awk -F"\t" 'FNR > 1 && $4 != "" {gsub(/\$/,"",$0); gsub(/Average costs/,"Oklahoma Average",$1); if($5=="") $5=$4; if($6=="") $6=$5; if($7=="") $7=$6; printf("\t\"%s\":{rates:[{rate_k:%f, startgal:0, endgal:5000}, {rate_k:%f, startgal:5000, endgal:10000}, {rate_k:%f, startgal:10000, endgal:50000}, {rate_k:%f, startgal:50000, endgal:Infinity}], min:%f},\n",$1,$4,$5,$6,$7,$8);}' water-rates.tsv
```

Then I copied the output on the screen and pasted into the `cities` object in 
`city-bill.js`. (And moved the `Oklahoma Average` line to the top of the 
object so it would appear first in the drop-down list.)

#### Some more explanation

The `awk` script above is hard to read, so I'll present it here as a script 
file with explanatory comments called `make_city_js.awk`. You would run the 
awk script file with a command like this:
```bash
awk -F "\t" -f make_city_js.awk water-rates.tsv
```

make_city_js.awk:
```
# Skip the first line and any lines where column 4 is blank
FNR > 1 && $4 != "" {

    # Remove dollar signs from the entire line
    gsub(/\$/,"",$0); 
    
    # Replace "Average costs" in column 1 with "Oklahoma Average"
    gsub(/Average costs/,"Oklahoma Average",$1); 
    
    # If the second block rate is blank, repeat the first rate
    if($5=="") $5=$4; 
    
    # If the third block rate is blank, repeat the second rate
    if($6=="") $6=$5; 
    
    # If the fourth block rate is blank, repeat the third rate
    if($7=="") $7=$6; 
    
    # Print the line in the city data format
    printf("\t\"%s\":{rates:[{rate_k:%f, startgal:0, endgal:5000}, {rate_k:%f, startgal:5000, endgal:10000}, {rate_k:%f, startgal:10000, endgal:50000}, {rate_k:%f, startgal:50000, endgal:Infinity}], min:%f},\n",$1,$4,$5,$6,$7,$8);
    
}
```
