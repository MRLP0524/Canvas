/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-12-08 15:26:46
 * @version $Id$
 */
document.onkeydown = function () {
	var oTxt = document.getElementById("pny");
	var event = event || window.event;
 	if(event.keyCode == 13){
 		setTimeout(function () {
 			firstAction = false;
        	reset();
        	performAction("泡沫");
 		},6000)
 	}
 }

