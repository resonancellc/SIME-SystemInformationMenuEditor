/// CODE PARSER-GENERATOR

var Parser = new function(){
	this.codeDiv;
	
}




function readProp(el){
	
	if(el.getAttribute('data-type')=="ICONXPBUTTON")
	
	var json={		
		type:'ICONXPBUTTON',
		x:getStyle(el,'left',true),
		y:getStyle(el,'right',true),
		sizeNormal:getStyle(el,'width',true),
		sizePushed:'',
		iconNormal:'',
		scaleAlpha:'',
		iconPushed:'',
		scaleAlpha:'',
		command:el.getAttribute('data-command'),
		newIni:el.getAttribute('data-newini'),
		shutDownAnimation:el.getAttribute('data-shutdownanimation')
	};
	
	if(el.getAttribute('data-type')=="TEXT")
	var json={		
		type:'TEXT',
		x:getStyle(el,'left',true),
		y:getStyle(el,'right',true),
		color:getStyle(el,'color',false),
		frameColor:getStyle(el,'text-shadow-color',false),
		font:getStyle(el,'font-family',false),
		size:getStyle(el,'font-size',true),
		weight:getStyle(el,'font-weight',true)
	};
	
	
	document.getElementById('Source').innerHTML=printo(json,'<br>','&nbsp;&nbsp;&nbsp;&nbsp;');
	return json;
}




function readAllComponents(){
	
	var componentList=editor.getElementsByClassName('Component');
	
	var jsonList=[];
	
	for(var i=0;i<componentList.length;i++){
		jsonList.push( readProp(componentList[i]) );
	}
	
	document.getElementById('source').innerHTML=printo(jsonList,'<br>','&nbsp;&nbsp;&nbsp;&nbsp;');

}


var parser={
	
	"X":{
		setter:function(){},
		getter:function(){return getStyle(this,'left',true)}
		},
	"Y":{
		setter:function(){},
		getter:function(){}
		},
	"Text":{
		setter:function(){},
		getter:function(){}
		},
	"Color":{
		setter:function(){},
		getter:function(){return getStyle(this,'left',true)}
		},
	"FrameColor":{
		setter:function(){},
		getter:function(){return getStyle(this,'left',true)}
		},
	"Size":{
		setter:function(){},
		getter:function(){return getStyle(this,'left',true)}
		}, 
	"Weight":{
		setter:function(){},
		getter:function(){return getStyle(this,'left',true)}
		},
	"X":{
		setter:function(){},
		getter:function(){return getStyle(this,'left',true)}
		}
	
	
}





function generateINI(){	
	
	var el=Manager.editorDiv;
	
	var ini=[];
	
	//GLOBALSETTINGS
	ini.push( ";; " + el.getAttribute('data-ini-name') );
	ini.push( "GLOBALSETTINGS");
	ini.push( "ShowMessage = " + el.getAttribute('data-ini-showmessage') );
	ini.push( "QuitOnDoubleClick = " + el.getAttribute('data-ini-quitondoubleclick') );
	ini.push( "X = 0" );
	ini.push( "Y = 0" );
	ini.push( "Width = " + getStyle(el,'width',true) );
	ini.push( "Height = " + getStyle(el,'height',true) );
	ini.push( "Arrange = " + el.getAttribute('data-ini-arrange') );
	ini.push( "BackgroundBitmap = " + el.getAttribute('data-ini-backgroundbitmap') );
	ini.push( "StartUpAnimation = " + el.getAttribute('data-ini-startupanimation') );
	ini.push( "ShutDownAnimation = " + el.getAttribute('data-ini-shutdownanimation') );
	ini.push( "Accelerated = " + el.getAttribute('data-ini-accelerated') );
	ini.push( "TopMost = " + el.getAttribute('data-ini-topmost') );
	
	
	for(var i=0;i<Manager.editorDiv.children.length;i++){
		
		el=Manager.editorDiv.children[i];
		var kind=el.getAttribute('data-inspectable');
		
		if(kind=="ICONXPBUTTON"){
			//ICONXPBUTTON
			ini.push( ";; " + el.getAttribute('data-ini-name'));
			ini.push( "ICONXPBUTTON");
			ini.push( "x = " + getStyle(el,'top',true)  );
			ini.push( "y = " + getStyle(el,'left',true)  );
			ini.push( "SizeNormal = " + el.getAttribute('data-ini-sizenormal') );
			ini.push( "ScaleAlpha = " + el.getAttribute('data-ini-scalealpha') );
			ini.push( "SizePushed = " + el.getAttribute('data-ini-sizepushed') );
			ini.push( "ScaleAlpha = " + el.getAttribute('data-ini-scalealpha2') );
			ini.push( "IconPushed = " + el.getAttribute('data-ini-iconpushed') );
			ini.push( "QuitOnExecute = " + el.getAttribute('data-ini-quitonexecute') );
			ini.push( "Command = " + el.getAttribute('data-ini-command') );
			if(el.getAttribute('data-ini-newini')){
				ini.push( "NewIni = " + el.getAttribute('data-ini-newini') );
				ini.push( "ShutDownAnimation = " + el.getAttribute('data-ini-shutdownanimaion') );
			}
		}
		else if(kind=="BITMAP"){
			//BITMAP
			ini.push( ";; " + el.getAttribute('data-ini-name'));
			ini.push( "BITMAPBUTTON");
			ini.push( "x = " + getStyle(el,'top',true)  );
			ini.push( "y = " + getStyle(this,'left',true)  );
			ini.push( "BitmapNormal = " + el.getAttribute('data-ini-sizenormal') );
			ini.push( "BitmapPushed = " + el.getAttribute('data-ini-iconpushed') );
			ini.push( "QuitOnExecute = " + el.getAttribute('data-ini-quitonexecute') );
			ini.push( "Command = " + el.getAttribute('data-ini-command') );
			if(el.getAttribute('data-ini-newini')){
				ini.push( "NewIni = " + el.getAttribute('data-ini-newini') );
				ini.push( "ShutDownAnimation = " + el.getAttribute('data-ini-shutdownanimaion') );
			}
		}
		else if(kind=="TEXT"){
			//TEXT
			ini.push( ";; " + el.getAttribute('data-ini-name'));
			ini.push( "TEXT");
			ini.push( "x = " + el.getAttribute('data-ini-name') );
			ini.push( "y = " + el.getAttribute('data-ini-name') );
			ini.push( "Text = " + el.innerText );
			ini.push( "Color = " + getStyle(el,'color') );
			ini.push( "FrameColor = " + getStyle(el,'color') );
			ini.push( "Size = " + getStyle(el,'font-size') );
			ini.push( "Weight = " + getStyle(el,'weight') );
			ini.push( "CreateFont" );
		}
		ini.push('');
	}
	
	
	ini = ini.join('\n');
	return ini;
}
