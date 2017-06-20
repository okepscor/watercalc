/*global jQuery, element, $, SITE_ROOT */
// GLOBALS
var fields; // OVERRIDE ON JSON GRID PAGE
var update = true;
var elemId = ''; // USED FOR MULTIPLE HTML ELEMENT IDS
var debug = false;
var tinyWindow = null;
var tinyImageWindow = null;
var tinyFieldName = null;
var tinyFileType = null;

// QUERY STRING
jQuery.query = function(s){
	var r = {};
	if(s){
		if(s.indexOf('?') >= 0){
			s = s.substring(s.indexOf('?') + 1); // remove everything up to the ?
		}
		if(s.indexOf('#') >= 0){
			s = s.substring(0, s.indexOf('#')); // get everything before hash
		}
		s = s.replace(/\&amp;/, '&'); // fix amps
		s = s.replace(/\&$/, ''); // remove the trailing &
		jQuery.each(s.split('&'), function(){
			var splitted = this.split('=');
			if(splitted.length === 2){
				var key = splitted[0];
				var val = splitted[1];
				// convert numbers
				if(/^[0-9.]+$/.test(val)){
				  val = parseFloat(val);
				}
				// convert booleans
				if(val == 'true'){
				  val = true;
				}
				if(val == 'false'){
				  val = false;
				}
				// ignore empty values
				if(typeof val == 'number' || typeof val == 'boolean' || val.length > 0){
				  r[key] = val;
				}
			}else if(splitted.length === 1){
				r[splitted[0]] = '';
			}
		});
	}
	return r;
};
function urldecode(str){
	str = '' + str;
	while(true){
		var i = str . indexOf ('+');
		if(i < 0){
			break;
		}
		str = str . substring (0, i) + '%20' + str . substring (i + 1, str . length);
	}
	return unescape(str);
}

// PARAMETER FUNCTIONS (DEPRECATED: see above for strings like query strings Ex: ?cat=1&id=2#item)
paramKeys = [];
paramValues = [];

function getParam(key){
	var value = null;
	for(var i=0;i<paramKeys.length;i++){
		if(paramKeys[i]==key){
			value = paramValues[i];
			break;
		}
	}
	if(value){
		return urldecode(value);
	}
	return value;
}

function parseParams(data, delimiter){
	paramKeys = [];
	paramValues = [];

	if(typeof(delimiter) !== 'string'){
		delimiter = '&';
	}
	if(typeof(data) !== 'string'){
		data = document.location.search;
	}
	if(data){
		var c = data.substring(0,1);
		if(c == '?'){
			data = data.substring(1);
		}
	}
	
	var query = data;
	var pairs = query.split(delimiter);
	for(var i=0;i<pairs.length;i++){
		var pos = pairs[i].indexOf('=');
		if(pos >= 0){
			var argname = pairs[i].substring(0,pos);
			var value = pairs[i].substring(pos+1);
			paramKeys[paramKeys.length] = argname;
			paramValues[paramValues.length] = value;
		}
	}
}

// INCLUDES EXTERNAL JS FILES
function include(filename){
	var head = document.getElementsByTagName('head')[0];
	script = document.createElement('script');
	script.src = filename;
	script.type = 'text/javascript';
	head.appendChild(script);
}

// CMS FUNCTIONS
function cmsAddImage(value, type){
	if(type == 'tinymce'){
		value = value.replace(/\{SITE_ROOT\}/gi,SITE_ROOT);
		tinyImageWin.document.forms[0].elements[tinyFieldName].value = value;
		if(typeof(tinyFileType) != 'undefined'){
			if(tinyFileType == "image"){
				tinyImageWin.showPreviewImage(value);
			}else if(tinyFileType == "media"){
				tinyImageWin.switchType(value);
				tinyImageWin.generatePreview();
			}
		}
		tinyFileBrowserWin.close();
	}else if(type == 'markitup'){
		$.markItUp({name:'Picture',
			replaceWith: function(h){
				//replaceWith:'![![Source:!:http://]!]([![Alternative text]!])!'}
				return(' !'+value+'!');
			}
		});
	}
}
function cmsAddCode(name, code){
  $.markItUp({
	  name: name,
	  replaceWith: function(h){
		  return(code);
	  }
  });
}
function cmsFilePopup(file){
	if(typeof(file) === 'string'){
		window.open(file,'File');
	}
}

// PROTOTYPES & JS ADDONS
Array.prototype.remove = function(from, to){
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};
String.prototype.trim = function(){return this.replace(/^\s+|\s+$/g,"");};
String.prototype.ltrim = function(){return this.replace(/^\s+/,"");};
String.prototype.rtrim = function(){return this.replace(/\s+$/,"");};
String.prototype.startsWith = function(str){return (this.match("^"+str)==str);};
String.prototype.endsWith = function(str){return (this.match(str+"$")==str);};
String.prototype.toCapitalCase = function(){
	var re = /\s/;
	var words = this.split(re);
	re = /(\S)(\S+)/;
	for(i = words.length - 1; i >= 0; i--){
		re.exec(words[i]);
		words[i] = RegExp.$1.toUpperCase() + RegExp.$2.toLowerCase();
	}
	return words.join(' ');
};
String.prototype.replaceAll = function(strTarget, strSubString){
    var strText = this;
    var intIndexOfMatch = strText.indexOf(strTarget);
     
    while(intIndexOfMatch != -1){
        strText = strText.replace( strTarget, strSubString);
        intIndexOfMatch = strText.indexOf(strTarget);
    }
    return(strText);
};
function isArray(obj){
	if(!obj || typeof(obj) !== 'object'){
		return false;
	}else if(obj.constructor.toString().indexOf("Array") == -1){
		return false;
	}else{
	   return true;
	}
}
// THIS IS OBJECT BASED (alternative jquery $.inArray(value, array))
Array.prototype.inArray = function(value){
	for(var i=0; i < this.length; i++){
		if(this[i] === value){
			return true;
		}
	}
	return false;
};
function stopEvent(e){
    if(!e){
        e = window.event;
    }
    if(typeof(e) !== 'undefined'){
        e.cancelBubble = true;
        if(e.stopPropagation){
			e.stopPropagation();
		}
    }
}

// JQGRID SUBMISSION FUNCTION
function submitEvent(event, msg){
	if(typeof(event) !== 'undefined' && $('#event') !== null){
		$('#event').attr('value',event);
	}
	if(msg !== '0' || msg !== 'false' || msg !== 'none' || msg !== 'no'){
		if(typeof(msg) === 'undefined'){
			if(typeof(event) !== 'undefined'){
				msg = 'Are you sure you want to '+event+' the selected entries?';
			}else{
				msg = 'Are you sure you want to continue?';
			}
		}
		if(confirm(msg)){
			$('#ids').attr('value', $('#list').getGridParam('selarrrow'));
			return(true);
		}else{
			$('#event').attr('value','');
		}
	}
	return(false);
}
function setAction(action, form){
	if(typeof(form) !== 'string'){
		form = 'mainForm';
	}
	if(typeof(action) === 'string'){
		$('#'+form).attr('action',action);
	}
}

// MISC FUNCTIONS
function scrollToTop(){
	$('html, body').animate({scrollTop:0}, 'normal');
}
function confirmDelete(){
	var agree = confirm('Are you sure you want to delete this entry?');
	if(agree){
		return true;
	}else{
		return false;
	}
}
function confirmSend(){
	var agree = confirm('Are you sure you want to send this Email Blast?');
	if(agree){
		return true;
	}else{
		return false;
	}
}

// FORM FUNCTIONS
function submitForm(form){
	$('#'+form).submit();
}
function checkAll(field){
	for(i=0; i<field.length; i++){
		field[i].checked = true;
	}
}
function uncheckAll(field){
	for(i=0; i<field.length; i++){
		field[i].checked = false;
	}
}

// TINYMCE
// http://wiki.moxiecode.com/index.php/TinyMCE:Custom_filebrowser
function tinyImagePopup(field_name, url, type, win){
	tinyWindow  = win;
	tinyFieldName = field_name;
	tinyFileType = type;
	tinyImageWindow = window.open(CMS_PATH+'/tiny_mce/image_browser.php','tinyImageWindow','width=680,height=570,resizable=0,scrollbars=0,status=0,toolbar=0,location=0,menubar=0');
	tinyImageWindow.focus();
}
function setFile(value){
	tinyWindow.document.forms[0].elements[tinyFieldName].value = value;
	if(tinyFileType == "image"){
        if(tinyWindow.ImageDialog.getImageData){
			tinyWindow.ImageDialog.getImageData();
		}
        if(tinyWindow.ImageDialog.showPreviewImage){
			tinyWindow.ImageDialog.showPreviewImage(value);
		}
	}else if(tinyFileType == "media"){
		tinyWindow.switchType(value);
		tinyWindow.generatePreview();
	}
	tinyImageWindow.close();
}
// TYPEOF FIX
function RealTypeOf(v){
  if(typeof(v) == 'object'){
    if(v === null){
		return 'null';
	}
    if(v.constructor == (new Array).constructor){
		return 'array';
	}
    if(v.constructor == (new Date).constructor){
		return 'date';
	}
    if(v.constructor == (new RegExp).constructor){
		return 'regex';
	}
    return 'object';
  }
  return typeof(v);
}
// UNESCAPE FIX
function isEven(num){
	return !(num % 2);
}
function isOdd(num){
	return !isEven(num);
}
function consoleLog(message){
	if(typeof(window.console) !== 'undefined' && typeof(window.console.log) !== 'undefined'){
		console.log(message);
	}
}
function isDefined(variable){
    return (!(!(document.getElementById(variable))));
}
function ucwords(str){
  var tmpStr, tmpChar, preString, postString, strlen;
  tmpStr = str.toLowerCase();
  stringLen = tmpStr.length;
  if(stringLen > 0){
	for(i=0; i<stringLen; i++){
	  if(i === 0){
		tmpChar = tmpStr.substring(0,1).toUpperCase();
		postString = tmpStr.substring(1,stringLen);
		tmpStr = tmpChar + postString;
	  }else{
		tmpChar = tmpStr.substring(i,i+1);
		if(tmpChar == ' ' && i < (stringLen-1)){
		  tmpChar = tmpStr.substring(i+1,i+2).toUpperCase();
		  preString = tmpStr.substring(0,i+1);
		  postString = tmpStr.substring(i+2,stringLen);
		  tmpStr = preString + tmpChar + postString;
		}
	  }
	}
  }
  return(tmpStr);
}
function findPos(obj){
	var curleft = curtop = 0;
	if(obj.offsetParent){
		curleft = obj.offsetLeft;
		curtop = obj.offsetTop;
		while(obj == obj.offsetParent){
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		}
	}
	return [curleft,curtop];
}
function addCommas(nStr){
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
function formatAsMoney(mnt){
	// Possibly the same results as Number.toFixed(2)
    mnt -= 0;
    mnt = (Math.round(mnt*100))/100;
    return (mnt == Math.floor(mnt)) ? mnt + '.00' 
              : ( (mnt*10 == Math.floor(mnt*10)) ? 
                       mnt + '0' : mnt);
}
function isValidEmail(email){
	var at = email.lastIndexOf("@");
	
	// Make sure the at (@) sybmol exists and  
	// it is not the first or last character
	if(at < 1 || (at + 1) === email.length){
		return false;
	}
	
	// Make sure there aren't multiple periods together
	if(/(\.{2,})/.test(email)){
		return false;
	}
	
	// Break up the local and domain portions
	var local = email.substring(0, at);
	var domain = email.substring(at + 1);
	
	// Check lengths
	if(local.length < 1 || local.length > 64 || domain.length < 4 || domain.length > 255){
		return false;
	}
	
	// Make sure local and domain don't start with or end with a period
	if(/(^\.|\.$)/.test(local) || /(^\.|\.$)/.test(domain)){
		return false;
	}
	
	// Check for quoted-string addresses
	// Since almost anything is allowed in a quoted-string address,
	// we're just going to let them go through
	if(!/^"(.+)"$/.test(local)){
		// It's a dot-string address...check for valid characters
		if(!/^[\-a-zA-Z0-9!#$%*\/?|\^{}`~&'+=_\.]*$/.test(local)){
			return false;
		}
	}
	
	// Make sure domain contains only valid characters and at least one period
	if(!/^[\-a-zA-Z0-9\.]*$/.test(domain) || domain.indexOf(".") === -1){
		return false;
	}
	return true;
}
copyToClipboard = function(txt){
	if(window.clipboardData){
		window.clipboardData.clearData();
		window.clipboardData.setData("Text", txt);
	}else if(navigator.userAgent.indexOf("Opera") != -1){
		window.location = txt;
	}else if(window.netscape){
		try{
			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		} catch (e) {
			alert("You need set 'signed.applets.codebase_principal_support=true' at about:config'");
			return false;
		}
		var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
		if (!clip) return;
		var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
		if (!trans) return;
		trans.addDataFlavor('text/unicode');
		var str = new Object();
		var len = new Object();
		var str = Components.classes['@mozilla.org/supports-string;1'].createInstance(Components.interfaces.nsISupportsString);
		var copytext = txt;
		str.data = copytext;
		trans.setTransferData("text/unicode",str,copytext.length*2);
		var clipid = Components.interfaces.nsIClipboard;
		if (!clip) return false;
		clip.setData(trans,null,clipid.kGlobalClipboard);
	}
}