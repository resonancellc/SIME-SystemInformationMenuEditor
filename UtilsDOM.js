function id(elementId){
	return document.getElementById(elementId);
}

/**
 * Add a event to a element;
 * @param {Object} element	Element or ID;
 * @param {String} trigger	Trigger to fire action eg:load,click,mouseover,etc;
 * @param {Function} action	A pointer to a function to be called on trigger;
 */
function addEvent(element,trigger,action) {
	if(typeof element==="string"){element=document.getElementById(element);}
	if (element.addEventListener) {
		element.addEventListener(trigger,action,false);
		return true;
	} else if (element.attachEvent) {
		element['e'+trigger+action] = action;
		element[trigger+action] = function() { element['e'+trigger+action]( window.event );}
		var r = element.attachEvent('on'+trigger, element[trigger+action]);
		return r;
	} else {
		element['on'+trigger] = action;
		return true;
	}
}

function addEvents(element,trigger,action) {
	
	if(!isArray(element)){ element=[element]; }
	
	for(var e=0;e<elm.length;e++){
		
		if(isArray(trigger) && isArray(action)){
			if(tigger.length==action.length){
				for(var i=0;i<trigger.lengh;i++){
					addEvent(element[e],trigger[i],action[i]);
				}
			}
			else throw new Error("'trigger' and 'action' parameters must be arrays of the same length.");
		}
		else if(isArray(trigger)){
			for(var t=0;t<trigger.lengh;t++){
				addEvent(element[e],trigger[t],action);
			}
		}
		else if(isArray(action)){
			for(var a=0;a<trigger.lengh;a++){
				addEvent(element[e],trigger,action[a]);
			}
		}
		else{
			addEvent(element[e],trigger,action);
		}

	}
	
}


/** Add a event to all elements that have this className */
function addEventToClass(className,trigger,action){
	var elements=document.getElementsByClassName(className);
	for(var i=0; i<elements.length; i++){
		addEvent(elements[i],trigger,action);
	}	
}

/**
 * Create new DOM Element
 * @param {String} tag			Tag name of the element (required)
 * @param {String} id			ID of the object (Optional)
 * @param {Object} attributes	Object literal with attribute names and values (Optional)
 * @param {String} textNode		Text node between tags (Optional)
 * @param {Element} parent		Parent to append created element (Optional)
 */
function newElement(tag,id,attributes,textNode,parent){
	var element;
	element=document.createElement(tag);
	if(id!='' && id!==undefined){element.id=id;}
	if(typeof attributes==='object'){
		for(var attName in attributes){
			var attValue=attributes[attName];
			if(attName.toLowerCase()=='style'){	element.style.cssText=attValue;	}
			else if(attName.toLowerCase()=='class' || attName.toLowerCase()=='classname'){ element.className=attValue; }
			else{ element.setAttribute(attName, attValue); }
		}
	}
	if(typeof textNode!=='undefined' && textNode!==''){ element.innerHTML=(typeof textNode=='object')?(textNode.outerHTML):(textNode);	}
	if(parent!==undefined){ parent.appendChild(element); }
	return element;
}


/** Get the current computed style of an element */
function getStyle(element, strCssRule, returnInt){
	if(typeof element==="string"){element=document.getElementById(element);}
	
	var strValue = "";
	if(document.defaultView && document.defaultView.getComputedStyle){
		strValue = document.defaultView.getComputedStyle(element, "").getPropertyValue(strCssRule);
	}
	else if(element.currentStyle){
		strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
			return p1.toUpperCase();
		});
		strValue = element.currentStyle[strCssRule];
	}
	
	if(returnInt===true){strValue=parseInt(strValue);}
	
	return strValue;
}


//------ Misc ------

function randomFromTo(from, to){ return Math.floor(Math.random()*(to-from+1)+from); }

function newPopup(title,content,footer,w,h){
	
	var popup=newElement('div','',{},'');
	var popupOverlay=newElement('div','',{},'',popup);
	var popupModal=newElement('div','',{},'',popup);
	var popupClose=newElement('div','',{},'x',popupModal);
	var popupTitle=newElement('div','',{},title,popupModal);
	var popupContent=newElement('div','',{},content,popupModal);
	var popupFooter=newElement('div','',{},footer,popupModal);
		
	popupClose.onclick=function(){document.body.removeChild(popup);};
	
	popup.style.cssText="";
	
	popupModal.style.cssText="position:fixed;margin-left:auto;margin-right:auto;z-index:9999;border: 1px solid #A1A1A1;box-shadow: 30px black;-moz-border-radius: 8px;-webkit-border-radius: 8px;border-radius: 8px;-moz-box-shadow: 0px 0px 30px #000000;-webkit-box-shadow: 0px 0px 30px #000000;box-shadow: 0px 0px 30px #000000;background-color:#EDEDED; font-family:Arial, Helvetica, sans-serif; font-size: 10pt;";
	
	popupModal.style.minWidth=w;
	popupModal.style.mimHeight=h;

	popupClose.style.cssText="position:absolute;left:-12px;top:-12px;width:22px;height:22px;z-index:2;text-align:center;font-family:\"Comic Sans MS\", cursive;font-size:14px;border: 2px solid #FFF;border-radius: 22px;background-color: #000;color: #FFF;-moz-box-shadow: 1px 1px 6px #000000;-webkit-box-shadow: 1px 1px 6px #000000;box-shadow: 1px 1px 4px #000000;cursor: pointer;";
	
	popupTitle.style.cssText="position:relative;left:0px;top:0px;width:100%;height:22px;margin: 2px;text-align:center; font-weight: bold; color: #CCCCCC; text-shadow: 0px -1px 0px #333333;";
	
	popupContent.style.cssText="position:relative;left:auto;top:auto;width:auto;height:auto;font-size: 10pt;";
	
	popupFooter.style.cssText="position:relative;left:0px;bottom:0px;width:100%;";
	
	popupOverlay.style.cssText="position: fixed;height: 100%;width: 100%;top: 0px;left: 0px;background: rgba(254, 254, 254, 0) -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 400, from(#3C3C3C), to(black));background-image: -webkit-gradient(radial, 50% 50%, 0, 50% 50%,400,from(#3C3C3C), to(black));z-index: 9998;opacity: 0.75;";
	
	document.body.appendChild(popup);
}
