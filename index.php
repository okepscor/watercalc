
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta http-equiv="content-script-type" content="text/javascript" />
	<meta http-equiv="content-style-type" content="text/css" />
    <title>Water Use Calculator | The Power of 10%</title>
	<script type='text/javascript' src='js/jquery/1.4.2/jquery.noleak.min.js'></script>
	<script type='text/javascript' src='js/jquery/form/2.36/jquery.form.js'></script>
	<script type='text/javascript' src='js/jquery/numeric/1.0/jquery.numeric.pack.js'></script>
	<script type='text/javascript' src='js/jquery/json/1.3/jquery.json.min.js'></script>
	<!--<script type='text/javascript' src='js/common.js'></script>-->
	<script type='text/javascript' src='js/jquery/common.js'></script>
	<!--<script type='text/javascript' src='js/jquery/ui/1.8.2/jquery.ui.min.js'></script>-->
	<script type='text/javascript' src='js/jquery/1.8.2/jquery.ui.min.js'></script>
	<!--<link type='text/css' rel='stylesheet' media='screen' charset='utf-8' href='js/jquery/ui/1.8.2/themes/redmond/jquery.ui.css' />-->
	<link type='text/css' rel='stylesheet' media='screen' charset='utf-8' href='js/jquery/1.8.2/themes/redmond/jquery.ui.css' />
	<link type='text/css' rel='stylesheet' media='screen' charset='utf-8' href='css/level3_new.css' />
	<link type='text/css' rel='stylesheet' media='screen' charset='utf-8' href='css/calculator2012.css' />
	<script type='text/javascript' src="js/app.js"></script>
	<script type='text/javascript' src="calculator-dw2.js"></script>
</head>
<body>
<p id="banner"><a href="/">www.WaterMatters.org</a></p>
<div id="outsidehead-bluelink">
</div>
<div id="wrapper"> 
	<h1 id="graphic_header"><img src="img/header.jpg" alt="Water Use Calculator" /></h1>
        <!--
	<?php if(isset($_GET['debug'])){ ?>
		<pre id="testing"></pre>
	<?php } ?>
        -->
	<form id="calcForm" action="" method="post">
		<div id="box_wrapper">

			<div class="box">
				<img src="img/howoften.png" alt="How Often" class="intro_image" />
			</div>
			<div class="box">
				<img src="//placehold.it/160" alt="Shower" class="intro_image" />
				<h2>Showers</h2>
				<p class="q">
					<label for="showers">Per day</label>
					<select name="showers" id="showers">
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
					</select>
				</p>
				<div id='showers_options' class='hidden'>
					<p class="q time">
						<label for="shower_minutes">Minutes?</label>
						<input type="text" id="shower_minutes" name="shower_minutes" value="10" class="numeric" />
					</p>
					<p class="q">
						<label for="shower_low_flow">Low-flow showerhead?</label>
						<select name="shower_low_flow" id="shower_low_flow">
							<option value="0">No</option>
							<option value="1">Yes</option>
						</select>
					</p>
				</div>
			</div>

			<div class="box">
				<img src="//placehold.it/160" alt="Baths" class="intro_image" />
				<h2>Baths</h2>
				<p class="q">
					<label for="baths">Per week</label>
					<select name="baths" id="baths">
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
					</select>
				</p>
			</div>
			<br class="clear" />

			<div class="box">
				<img src="//placehold.it/160" alt="Toilet flushes" class="intro_image" />
				<h2>Toilet flushes</h2>
				<p class="q">
					<label for="toilet_flushes">Per day</label>
					<select name="toilet_flushes" id="toilet_flushes">
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
					</select>
				</p>
				<div id='toilet_options' class='hidden'>
					<p class="q">
						<label for="toilet_low_flow">Low-flow (1995 or newer) toilet?</label>
						<select name="toilet_low_flow" id="toilet_low_flow">
							<option value="0">No</option>
							<option value="1">Yes</option>
						</select>
					</p>
				</div>
			</div>
			<div class="box">
				<img src="//placehold.it/160" alt="Running water" class="intro_image" />
				<h2>Running water</h2>
				<p class="q"><label for="sink_minutes">Minutes per day washing hands, brushing teeth, etc.</label></p>
				<p class="q time"><input type="text" id="sink_minutes" name="sink_minutes" value="0" class="numeric" /></p>
				<div id='sink_options' class='hidden'>
					<p class="q">
						<label for="sink_low_flow">Low-flow faucet?</label>
						<select name="sink_low_flow" id="sink_low_flow">
							<option value="0">No</option>
							<option value="1">Yes</option>
						</select>
					</p>
				</div>
			</div>
			<div class="box">
				<img src="//placehold.it/160" alt="Dishes by hand" class="intro_image" />
				<h2>Dishes by hand</h2>
				<p class="q"><label for="hand_minutes">Minutes per day</label></p>
				<p class="q time"><input type="text" id="hand_minutes" name="hand_minutes" value="0" class="numeric" /></p>
				<div id='hand_options' class='hidden'>
					<p class="q">
						<label for="hand_low_flow">Low-flow faucet?</label>
						<select name="hand_low_flow" id="hand_low_flow">
							<option value="0">No</option>
							<option value="1">Yes</option>
						</select>
					</p>
				</div>
			</div>
			<br class="clear" />

			<div class="box">
				<img src="//placehold.it/160" alt="Dishwasher" class="intro_image" />
				<h2>Dishwasher</h2>
				<p class="q">
					<label for="dishwasher">Loads per week</label>
					<select name="dishwasher" id="dishwasher">
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
					</select>
				</p>
				<div id='dishwasher_options' class='hidden'>
					<p class="q">
						<label for="dishwasher_energy_star">Water-saving/Energy Star?</label>
						<select name="dishwasher_energy_star" id="dishwasher_energy_star">
							<option value="0">No</option>
							<option value="1">Yes</option>
						</select>
					</p>
					<p class="q"><label for="dishwasher_gallons">Gallons per load</label>
					<input type="text" id="dishwasher_gallons" name="dishwasher_gallons" value="12" class="numeric" /></p>
				</div>
			</div>
			<div class="box">
				<img src="//placehold.it/160" alt="Laundry" class="intro_image" />
				<h2>Laundry</h2>
				<p class="q">
					<label for="laundry">Loads per week</label>
					<select name="laundry" id="laundry">
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
					</select>
				</p>
				<div id='laundry_options' class='hidden'>
					<p class="q">
						<label for="laundry_energy_star">Water-saving/Energy Star?</label>
						<select name="laundry_energy_star" id="laundry_energy_star">
							<option value="0">No</option>
							<option value="1">Yes</option>
						</select>
					</p>
					<p class="q">
						<label for="laundry_gallons">Gallons per load</label>
						<input type="text" id="laundry_gallons" name="laundry_gallons" value="43" class="numeric" />
					</p>
				</div>
			</div>
			<div class="box">
				<img src="//placehold.it/160" alt="Lawn watering" class="intro_image" />
				<h2>Lawn watering<span style="font-size:12px; vertical-align:text-top;">1</span></h2>
				<p class="q">
					<label for="lawn">Irrigation cycles <br />per week</label>
					<select name="lawn" id="lawn">
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
					</select>
				</p>
				<div id='lawn_options' class='hidden'>
					<p class="q time" style="height:auto;">
						<label for="lawn_minutes">Minutes <br />per cycle?</label>
						<input type="text" id="lawn_minutes" name="lawn_minutes" value="60" class="numeric" style="margin-top:-10px;" />
					</p>
					<p class="q">
						<label for="lawn_sensors">Rain sensor?<sup>2</sup></label>
						<select name="lawn_sensors" id="lawn_sensors">
							<option value="0">No</option>
							<option value="1">Yes</option>
						</select>
					</p>
				</div>
			</div>
			<br class="clear" />

			<div class="box">
				<img src="//placehold.it/160" alt="Outside water" class="intro_image" />
				<h2>Outside water</h2>
				<p><label for="outside_minutes">Minutes per week washing cars, using the hose, etc.</label></p>
				<p class="q time"><input type="text" id="outside_minutes" name="outside_minutes" value="0" class="numeric" /></p>
			</div>
			<div class="box">
				<img src="//placehold.it/160" alt="Pool" class="intro_image" />
				<h2>Pool</h2>
				<p><label for="pool_minutes">Minutes per week filling your pool.</label></p>
				<p class="q time"><input type="text" id="pool_minutes" name="pool_minutes" value="0" class="numeric" /></p>
			</div>

			
			<p style="clear:both;">This water use calculator is for general information only and based on local averages and national benchmarks. Calculations are estimates that are valuable for comparison purposes but are not meant to reflect exact water usage. Mathematical rounding may cause some calculation inconsistencies.</p>

		</div>

		<div id="results_wrapper" style="min-height:800px;">
			<h2>Daily water use</h2>
			<div class="caption" style="margin:-10px 0 20px 0;">* Rounded up to the nearest gallon.</div>
			
			<div id="household_totals" style="margin-top:-30px;">
				<div class="sections">
					<h3 style="color: #3FA3D5;">Itemized Household Usage:</h3>
					<p><strong>Shower &amp; bath:</strong> <span id="bath_household_total"></span><br />
					<span id='bath_household_total_jugs' class="jugs"></span></p>
					
					<p><strong>Toilet:</strong> <span id="toilet_household_total"></span><br />
					<span id="toilet_household_total_jugs" class="jugs"></span></p>
					
					<p><strong>Sink:</strong> <span id="sink_household_total"></span><br />
					<span id="sink_household_total_jugs" class="jugs"></span></p>
					
					<p><strong>Dishes by hand:</strong> <span id="hand_household_total"></span><br />
					<span id="hand_household_total_jugs" class="jugs"></span></p>
					
					<p><strong>Dishwasher:</strong> <span id="dishwasher_household_total"></span><br />
					<span id="dishwasher_household_total_jugs" class="jugs"></span></p>
					
					<p><strong>Laundry:</strong> <span id="laundry_household_total"></span><br />
					<span id="laundry_household_total_jugs" class="jugs"></span></p>
					
					<p><strong>Lawn:</strong> <span id="lawn_household_total"></span><br />
					<span id="lawn_household_total_jugs" class="jugs"></span></p>
					
					<p><strong>Outside &amp; pool:</strong> <span id="outside_household_total"></span><br />
					<span id="outside_household_total_jugs" class="jugs"></span></p>
				</div>
				<p class="total">Daily: <span class="total_household_day"></span></p>
				<p class="total">Weekly: <span class="total_household_week"></span></p>
				<p class="total">Monthly: <span class="total_household_month"></span></p>
				<p class="total">Yearly: <span class="total_household_year"></span></p>
			</div>
			
			<div id="individual_totals" class='hidden' style="margin-top:-30px;">
				<div class="sections">
					<h3 style="color: #3FA3D5;">Itemized Per Person Usage:</h3>
					<p><strong>Shower &amp; bath:</strong> <span id="bath_individual_total"></span><br />
					<span id='bath_individual_total_jugs' class="jugs"></span></p>
					
					<p><strong>Toilet:</strong> <span id="toilet_individual_total"></span><br />
					<span id="toilet_individual_total_jugs" class="jugs"></span></p>
					
					<p><strong>Sink:</strong> <span id="sink_individual_total"></span><br />
					<span id="sink_individual_total_jugs" class="jugs"></span></p>
					
					<p><strong>Dishes by hand:</strong> <span id="hand_individual_total"></span><br />
					<span id="hand_individual_total_jugs" class="jugs"></span></p>
					
					<p><strong>Dishwasher:</strong> <span id="dishwasher_individual_total"></span><br />
					<span id="dishwasher_individual_total_jugs" class="jugs"></span></p>
					
					<p><strong>Laundry:</strong> <span id="laundry_individual_total"></span><br />
					<span id="laundry_individual_total_jugs" class="jugs"></span></p>
					
					<p><strong>Lawn:</strong> <span id="lawn_individual_total"></span><br />
					<span id="lawn_individual_total_jugs" class="jugs"></span></p>
					
					<p><strong>Outside &amp; pool:</strong> <span id="outside_individual_total"></span><br />
					<span id="outside_individual_total_jugs" class="jugs"></span></p>
				</div>
				<p class="total">Daily: <span class="total_individual_day"></span></p>
				<p class="total">Weekly: <span class="total_individual_week"></span></p>
				<p class="total">Monthly: <span class="total_individual_month"></span></p>
				<p class="total">Yearly: <span class="total_individual_year"></span></p>
			</div>			
			<br />
			
			<p id="button_left"><img src="img/household1.png" alt="Household total" id="household_button" width="210" /><br />
			<span class="total_household_day"></span></p>
			<br class="clear" />

			<div class="box-people">
				<h3 style="margin:0 0 10px 0;">To Calculate Per Person Water Usage:</h3>
				<p class="q">
					<label for="number_of_people">Select the number of people living in your home</label>
					<select name="number_of_people" id="number_of_people">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
					</select>
				</p>
			</div>

			<p id="button_right" ><img src="img/personal.png" alt="Your total selected" id="individual_button" width="210" />
			<span class="total_individual_day"></span></p>
			
			
			<br style="clear:both;" />
			<br />
			<div style="background-color:#B8E5FA; height:40px; margin:10px -20px;">&nbsp;</div>
			
			<div style="background-color:#B8E5FA; padding: 0 0 20px 20px; margin:-20px -20px;">
			
			<!--
			<p id="save"><a href="#"><img src="img/pledge.png" alt="Pledge" id="calcSubmit" /></a> <strong class="total_individual_percent"></strong></p>
			<p>If everyone in our area reduced their water use by 10%, we&#8217;d <strong>save over 44 million gallons of water per day!</strong></p>
			-->
		</div>		
		</div>

	</form>
        
	<form id="calcDataForm" action="pledge.php" method="post">
		<div><input type='hidden' id='calcData' name='data' /></div>
	</form>
        
	<hr class="clear" />
	<h3>Comments or questions? <a href="mailto:webmaster@watermatters.org">Email us.</a></h3>

	<div style="font-size:11px; line-height:1.4em;">

<div class="read" style="cursor: pointer;">
<p class="texttext" style="margin-bottom:6px;"><sup>1</sup>Southwest Florida Water Management District, 2002. <em>Effective Use of Reclaimed Water Demonstrated to Offset Water Demand</em>&nbsp;&raquo;</p>
<p class="texttext" style="display: none;margin-bottom:6px;"> <sup>1</sup>Southwest Florida Water Management District, 2002. <em>Effective Use of Reclaimed Water Demonstrated to Offset Water Demand</em>&nbsp;&raquo;</p>
</div>

<div id="toggletext" style="display:none; ">
<p style="margin-left:10px; margin-bottom:6px;">The District uses 300 gallons per day per single family household as the average potable offset by switching to reclaimed water for outdoor irrigation purposes. This quantity assumes an average of 2 irrigation cycles per week, irrigating 3 zones per cycle. Each zone is assumed 30 minutes of irrigation and is to be aggregated into the final volume of time for the cycle. For example, if one has 3 zones account for 90 minutes of irrigation. Using these assumptions 300 gallons can be multiplied by 7 to get the weekly total and dived by 2 to get the weekly total for one irrigation cycle. One irrigation cycle can be divided by the assumed 90 minutes of irrigation to acquire the minutes per a gallon for an irrigation cycle.  This value also assumes that a rain sensor shut device is present. </p>
<p style="margin-left:10px;">300 gallons per single family household per day × 7 days = 2100 gallons per week<br />
2100 gallons per week / 2 irrigation cycles = 1050 gallons per irrigation cycle<br />
1050 gallons per irrigation cycle / 90 minutes = 11.67 gallons per minute per irrigation cycle </p>
</div>
  

<div class="read2" style="cursor: pointer;">
<p class="texttext2" style="margin-bottom:6px;"><sup>2</sup>Southwest Florida Water Management District, 2008. <em>Evaluation of Soil Moisture-Based On-Demand Irrigation Controllers: Final Report.</em>&nbsp;&raquo;</p>
<p class="texttext2" style="display: none;margin-bottom:6px;"><sup>2</sup>Southwest Florida Water Management District, 2008. <em>Evaluation of Soil Moisture-Based On-Demand Irrigation Controllers: Final Report.</em>&nbsp;&raquo;</p>
</div>

<div id="toggletext2" style="display:none;">
<p style="margin-left:10px;">This report prepared for and funded by the District quantifies the savings potential of using rain sensor shut off devices for automatic irrigation systems. Outlined in the report are two values for savings, a percent savings for wet weather conditions (34%) and percent savings for the dry season (13% and 24%). The value used to calculate the gallons saved in the water use calculator is 24%. This value was used to better represent an estimate of savings and not to be biased towards one particular season. However, since the value (300 gpd) given through the <em>Effective Use of Reclaimed Water Demonstrated to Water Demand</em> report included having rain sensor shut devices and the flow rate of water used to irrigate doesn’t change based upon water savings, the percent (76%) unsaved was factored back into the formula to acquire the quantity of water used without a rain sensor. This is done because savings associated with rain sensors are based upon the offset of time spent irrigating due to wet hydrologic conditions, rather than based on lowering the flow rate of the irrigation system itself. </p>
</div>

  
<img src="//i.creativecommons.org/l/by/3.0/88x31.png" width="88" alt="Creative Commons License" style="margin: 20px 20px 0 0; float:left;" />
<p style="margin-top:20px;">Except where otherwise noted, content on this page is licensed by the <a href="http://WaterMatters.org">Southwest Florida Water Management District</a> under a <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 License</a>.</p>
</div></div>

</body>
</html>
