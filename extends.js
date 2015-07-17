// JavaScript Document

String.prototype.format = function(){
	return this.replace(/{(\d+)}/g, function(match, number){
		return typeof arguments[number] != 'undefined' ? arguments[number] : match;
	});
};

String.prototype.occurrences=function(substring){
	var string=this;
	var n=0;
	var pos=0;
	while(true){
		pos=string.indexOf(substring,pos);
		if(pos!=-1){ n++; pos+=substring.length;}
		else{break;}
	}
	return(n);
};

String.prototype.padDigits=function(digits){
	var num=this.toString();
	while(num.length<digits){
		num='0'+num;
	}
	return(num);
};

Array.prototype.randomItem = function(){
    return this[Math.floor(Math.random()*(this.length))];
};

String.prototype.replaceAll=function(token, newtoken) {
	var string=this;
	while (string.indexOf(token)!=-1) {
 		string=string.replace(token, newtoken);
	}
	return string;
};

/** Sub String between two segments of text */
String.prototype.strBetween=function(strBegin,strEnd){
	var str=this;
	var posBegin, posEnd;
	posBegin=str.indexOf(strBegin);
	string=str.substring(posBegin + strBegin.length);
	posEnd=str.indexOf(strEnd);
	string=str.substring(0,posEnd);
	if ((posBegin==-1)||(posEnd==-1)){
		return(null);
	}else{
		return(str);
	}
};

String.prototype.toBoolean = function() {
    var x=this.toLowerCase();
	if(x=='true'||x=='t'||x=='1'||x=='yes'||x=='y'||x=='on') return true;
	else if(x=='false'||x=='f'||x=='0'||x=='no'||x=='n'||x=='off') return false;
};

//---- functions ----

function randomFromTo(from, to){ return Math.floor(Math.random()*(to-from+1)+from); }
function isArray(obj){ return Object.prototype.toString.call(obj) === '[object Array]'; }
function isInt(n) { return ((typeof n==='number')&&(n%1===0)); }
function isFloat(n){ return ((typeof n==='number')&&(n%1!==0)); }
function isNumber(n){ return (typeof n==='number'); }