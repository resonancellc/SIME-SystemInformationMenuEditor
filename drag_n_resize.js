function enableDragging(ele) {
    var dragging = dragging || false,
        x, y, Ox, Oy,
        current;
        enableDragging.z = enableDragging.z || 1;
    
	//var grabber = document.createElement("div");
    //grabber.setAttribute("class", "grabber");
    //ele.appendChild(grabber);
	
    ele.onmousedown = function(ev) {
        current = ev.target;
        dragging = true;
        x = ev.clientX;
        y = ev.clientY;
        Ox = current.offsetLeft;
        Oy = current.offsetTop;
        current.style.zIndex = ++enableDragging.z;
        console.log('Dragging');
		
		document.body.style.cursor="move";

        window.onmousemove = function(ev) {
            if (dragging == true) {
                var Sx = ev.clientX - x + Ox,
                    Sy = ev.clientY - y + Oy;
                	
					if(Sy<0) Sy=0;
					if(Sy>getStyle(current.parentElement,'height',true)) Sy=getStyle(current.parentElement,'height',true);
					if(Sx<0) Sx=0;
					if(Sx>getStyle(current.parentElement,'width',true)) Sx=getStyle(current.parentElement,'width',true);
					
					current.style.top = Sy + "px";
					current.style.left = Sx + "px";
					
                return false;
            }
        };
        window.onmouseup = function(ev) {
            dragging && (dragging = false);
			document.body.style.cursor="";
        }
    };
}


function enableResizing(ele) {
    var resizing = resizing || false,
        x, y, Ox, Oy,
        current;
   	enableResizing.z = enableResizing.z || 1;
		
    var resizer = document.createElement("div");
    resizer.setAttribute("class", "resizer");
    ele.appendChild(resizer);
	
    resizer.onmousedown = function(ev) {
		dragging=false;
		
        current = ev.target.parentNode;
        resizing = true;
        x = ev.clientX;
        y = ev.clientY;
        Ox = current.clientWidth;
        Oy = current.clientHeight;
        current.style.zIndex = ++enableDragging.z;
        console.log('Resizing');

        window.onmousemove = function(ev) {
            if (resizing == true) {
                var Sx = ev.clientX - x + Ox,
                    Sy = ev.clientY - y + Oy;
                current.style.height = Sy + "px";
                current.style.width = Sx + "px";
                return false;
            }
        };
        window.onmouseup = function(ev) {
            resizing && (resizing = false);
        }
    };
}