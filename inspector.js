//
// Object that generate automated forms to edit and inspect Abstract Components
//

var Components1={
	'Screen':{
		'Width':{
			input:{type:'number'},
			getter:function(){return getStyle(this,'width',true)},
			setter:function(){Inspector.elm.style.width=this.value+"px";}
		},
		'Height':{
			input:{type:'number'},
			getter:function(){return getStyle(this,'height',true)},
			setter:function(){Inspector.elm.style.height=this.value+"px";}
		},
		'Color':{
			input:{type:'color'},
			getter:function(){return getStyle(this,'background-color')},
			setter:function(){Inspector.elm.style.backgroundColor=this.value;}
		},
		'Image':{
			input:{type:'text'},
			getter:function(){return getStyle(this,'background-image').slice(4,-1)},
			setter:function(){Inspector.elm.style.backgroundImage="url("+this.value+")";}
		}
	},
	
	'ICONXPBUTTON':{
		'Name':{
			input:{type:'text'},
			getter:function(){return this.getAttribute('data-ini-name')},
			setter:function(){Inspector.elm.setAttribute('data-ini-name',this.value)}
		},
		'State':{
			select:{options:{'Normal':'normal','Pushed':'pushed'}},
			getter:function(){return this.getAttribute('data-state')},
			setter:function(){
				Inspector.elm.setAttribute('data-state',this.value);
				Inspector.elm.style.backgroundImage='url('+Inspector.elm.getAttribute('data-img-'+this.value)+')';
			}
		},	
		'Size':{
			input:{type:'number'},
			getter:function(){return getStyle(this,'width',true)},
			setter:function(){Inspector.elm.style.width=this.value+"px";}
		},
		'Height':{
			input:{type:'number'},
			getter:function(){return getStyle(this,'height',true)},
			setter:function(){Inspector.elm.style.height=this.value+"px";}
		},
		'Y':{
			input:{type:'number'},
			getter:function(){return getStyle(this,'top',true)},
			setter:function(){Inspector.elm.style.top=this.value+"px";}
		},
		'X':{
			input:{type:'number'},
			getter:function(){return getStyle(this,'left',true)},
			setter:function(){Inspector.elm.style.left=this.value+"px";}
		},
		'Icon Name':{
			input:{type:'text'},
			getter:function(){return this.getAttribute('data-ini-iconnormal')},
			setter:function(){Inspector.elm.setAttribute('data-ini-iconnormal',this.value)}
		},
		'Image':{
				input:{type:'file',accept:'image/*'},
				getter:function(){},
				setter:function(){
					getImage(this,Inspector.elm);
					Inspector.elm.setAttribute('data-ini-iconnormal',this.value.substring(this.value.lastIndexOf('\\')+1));
				}
		},
		'Transparency':{
			input:{type:'range',min:0,max:95},
			getter:function(){return 100-(getStyle(this,'opacity')*100);},
			setter:function(){Inspector.elm.style.opacity=(100-this.value)/100;}
		},
		'Command':{
			input:{type:'text'},
			getter:function(){return this.getAttribute('data-ini-command')},
			setter:function(){Inspector.elm.setAttribute('data-ini-command',this.value);}
		},
		'ShutDownAnimation':{
			'select':{options:{'NoAnimation':'NoAnimation', 'FlyLeft':'FlyLeft', 'FlyRight':'FlyRight', 'FlyUp':'FlyUp', 'FlyDown':'FlyDown', 'FlyDiagLeftUp':'FlyDiagLeftUp', 'FlyDiagLeftDown':'FlyDiagLeftDown', 'FlyDiagRightUp':'FlyDiagRightUp', 'FlyDiagRightDown':'FlyDiagRightDown', 'RollDown':'RollDown'}},
			getter:function(){return this.getAttribute('data-ini-shutdownanimation')},
			setter:function(){Inspector.elm.setAttribute('data-ini-shutdownanimation',this.value);}
		},

		'Quit on execute':{
			input:{type:'checkbox'},
			getter:function(){return this.getAttribute('data-ini-QuitOnExecute')=='Yes'?true:false},
			setter:function(){Inspector.elm.setAttribute('data-ini-QuitOnExecute',this.checked?'Yes':'No');}
		},
		
		
		'Border Radius':{
			input:{type:'number',min:0,max:100},
			getter:function(){return getStyle(this,'border-radius',true);},
			setter:function(){Inspector.elm.style.borderRadius=this.value+"px";}
		},
		
		
		'Delete':{
			input:{type:'button'},
			getter:function(){return "Delete"},
			setter:function(){Inspector.elm.parentElement.removeChild(Inspector.elm); Inspector.inspect(null); }
		}
	},
	
	'TEXT':{
		'Width':{
			input:{type:'number'},
			getter:function(){return getStyle(this,'width',true)},
			setter:function(){Inspector.elm.style.width=this.value+"px";}
		},
		'Y':{
			input:{type:'number'},
			getter:function(){return getStyle(this,'top',true)},
			setter:function(){Inspector.elm.style.top=this.value+"px";}
		},
		'X':{
			input:{type:'number'},
			getter:function(){return getStyle(this,'left',true)},
			setter:function(){Inspector.elm.style.left=this.value+"px";}
		},
		'Text':{
			input:{type:'text'},
			getter:function(){return this.childNodes[0].nodeValue},
			setter:function(){Inspector.elm.childNodes[0].nodeValue=this.value;}
		},
		'Size':{
			input:{type:'number'},
			getter:function(){return getStyle(this,'font-size',true)},
			setter:function(){Inspector.elm.style.fontSize=this.value+"px";}
		},
		'Font':{
			'select':{options:{'Arial':'Arial','Times':'Times','Verdana':'Verdana','Courier':'Courier'}},
			getter:function(){return this.style.fontFamily},
			setter:function(){Inspector.elm.style.fontFamily=this.value;}
		},
		'Color':{
			input:{type:'color'},
			getter:function(){return getStyle(this,'color')},
			setter:function(){Inspector.elm.style.color=this.value;}
		},
		'Delete':{
			input:{type:'button'},
			getter:function(){return "Delete"},
			setter:function(){Inspector.elm.parentElement.removeChild(Inspector.elm); Inspector.inspect(null); }
		}		
	},
	
	'Clock':{
		'Width':{
			input:{type:'number'},
			getter:function(){return getStyle(this,'width',true)},
			setter:function(){Inspector.elm.style.width=this.value+"px";}
		},
		'Y':{
			input:{type:'number'},
			getter:function(){return getStyle(this,'top',true)},
			setter:function(){Inspector.elm.style.top=this.value+"px";}
		},
		'X':{
			input:{type:'number'},
			getter:function(){return getStyle(this,'left',true)},
			setter:function(){Inspector.elm.style.left=this.value+"px";}
		},
		'Size':{
			input:{type:'number'},
			getter:function(){return getStyle(this,'font-size',true)},
			setter:function(){Inspector.elm.style.fontSize=this.value+"px";}
		},
		'Time':{
			input:{type:'text'},
			getter:function(){return this.childNodes[0].nodeValue},
			setter:function(){Inspector.elm.childNodes[0].nodeValue=this.value;}
		},
		'Color':{
			input:{type:'color'},
			getter:function(){return getStyle(this,'color')},
			setter:function(){Inspector.elm.style.color=this.value;}
		},
		'Font':{
			input:{type:'font'},
			getter:function(){return getStyle(this,'font-family')},
			setter:function(){Inspector.elm.style.fontFamily=this.value;}
		},
		'Format':{
			select:{options:{'HH:MM':'12:00','HH:MM:SS':'12:00:00'}},
			getter:function(){return this.childNodes[0].nodeValue},
			setter:function(){Inspector.elm.childNodes[0].nodeValue=this.value;}
		},
		'Delete':{
			input:{type:'button'},
			getter:function(){return "Delete"},
			setter:function(){Inspector.elm.parentElement.removeChild(Inspector.elm); Inspector.inspect(null); }
		}		
	}
}

var Inspector=new function(){
	
	this.elm;			//Current element being inspected
	this.Components;	//Objectthe abstract components with getter and setters
	this.inspectorDiv;	//Inspector panel
	var that=this;
	
	/** Attach event to inspect element on a specified trigger */
	this.attachInspection=function(element,trigger){
		addEvent(element,trigger,function(){ that.inspect(this) });
	}
	
	/** Inspect a specified element */
	this.inspect=function(element){
		
		that.elm=element;
		
		if(element==null){
			that.inspectorDiv.innerHTML="";
			return;
		}
		
		var componentKind=element.getAttribute('data-inspectable');
		
		if(componentKind!=undefined){
			
			var	editModel=that.Components[componentKind];

			that.inspectorDiv.innerHTML=""; //clear inspector panel
			
			newElement('P','',{},"Inspecting "+componentKind,that.inspectorDiv);
			
			for(property in editModel){
				
				var m=editModel[property];
				
				var label=newElement('P','',{},property);
				
				var edit;
				
				if(m.input!==undefined){
					edit=newElement('INPUT','',m.input,'',label);
				}
				else if(m.select!==undefined){
					var opts=m.select.options;
					
					var edit=newElement('SELECT','',{});
					for(var opt in opts){
						edit.options[edit.options.length] = new Option(opt,opts[opt]);
					}
					label.appendChild(edit);
				}
				
				that.inspectorDiv.appendChild(label);
				
				if(edit.type!=='file'){
					edit.value=m.getter.call(element); //read current componente property
				
					if(edit.type=='checkbox'){
						edit.checked=m.getter.call(element);
					}
				}
				
				//edit.onblur=m.setter; //define setter's to change component property
				edit.onclick=m.setter;
				edit.onmouseup=m.setter;
				edit.onchange=m.setter;
				edit.onkeyup=apply;
			}
			
			newElement('P','',{},"------- ",that.inspectorDiv);

		}
	}	
}

function apply(){
	var pressedKeyCode=event.keyCode;
	if(pressedKeyCode==13){//enter
		this.blur();
		this.focus();
	}
}