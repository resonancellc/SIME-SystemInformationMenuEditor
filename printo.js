/**
 * Print a object or a array tree and children
 * @param {Object} obj Object or Array to print
 * @param {string} linebreak (optional)
 * @param {string} tabulation (optional)
 * @return {string}
 */
function printo(obj,linebreak,tabulation) {

	var n = (linebreak)?(linebreak):("\n");
	var tabtoken = (tabulation)?(tabulation):("\t");
	
	var text = "";
	var level = 0; //initial tabulation level
	
	var tipo=kindOf(obj);
	
	if( tipo==="object" || tipo==="array"){ //check if 'obj' is a object/array
		text += tab(level) + kindOf(obj) + n + tab(level) + "(" + n;
		text = expandNode(obj); //inicia a varredura
	}
	else{ //not object/array just an primitive variable
		text = "variable " + tipo + " => " + obj;
	}
	
	function expandNode(obj) {
		
		level++; //go down ---->
		for (var node in obj) {
			
			tipo = kindOf(obj[node]);
			
			if (tipo==="object" || tipo==="array") { //node is an Object (have children)
			
				text += tab(level) + "[" + node + "] " + tipo + " => " + n; //print parent
				text += tab(level) + "(" + n; //open a family bracket
				text = expandNode(obj[node]); //print children using recursion
			}

			else { //obj is a property (not have children)
				text += tab(level);
				text += "["+node+"] "+tipo+" => "+obj[node]+n; }
		
		} //end of family (all children of family is discovered)
		
		level--; // go up  <----
		
		text += tab(level) + ")" + n; //close family bracket
		text += tab(level) + n; //identation
		
		return (text); //return family
	}
	
	return (text); //return full tree
	
	
	function tab(n){
		var str="";
		while (n>0) {
			str += tabtoken;
			n--;
		}
		return(str);
	}
	
	function kindOf(variable){
		var type;
		if (variable===null) { type='null'; }
		else if ((typeof variable==='number') && (variable%1===0)) { type='integer'; }
		else if ((typeof variable==='number') && (variable%1!==0)) { type='float'; }
		else if (typeof variable==='number') { type='number'; }
		else if (Object.prototype.toString.call(variable)==='[object Array]'){ type='array'; } 
		else { type=typeof variable; }
		return(type);
	}
}
