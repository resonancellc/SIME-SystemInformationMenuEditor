
/** Get the current computed style of an element */
function getStyle(element, strCssRule, returnInt){
	if(typeof element==="string"){element=document.getElementById(element);}
	var strValue = "";
	if(document.defaultView && document.defaultView.getComputedStyle){
		strValue = document.defaultView.getComputedStyle(element, "").getPropertyValue(strCssRule);
	}
	else if(element.currentStyle){
		strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){ return p1.toUpperCase(); });
		strValue = element.currentStyle[strCssRule];
	}
	if(returnInt===true){strValue=parseInt(strValue);}
	return strValue;
}

function centerDiv(div){
	
	if(typeof div=='string') div=document.getElementById(div);
	
	div.style.position='absolute';
	div.style.top='50%';
	div.style.left='50%'
	div.style.width='';
	div.style.heght='';
		
	var width=getStyle(div,'width',true);
	var height=getStyle(div,'height',true);
	
	div.style.marginLeft=(width/2)*-1 +'px';
	div.style.marginTop=(height/2)*-1 +'px';
}
