function parse(){

	//First, make the request
 	var myRequest = new XMLHttpRequest();
 	myRequest.open("GET", "data.json", true);
 	
 	//now, handle the request
 	myRequest.onreadystatechange = function (){

 		//data must be ready 
 		if (myRequest.readyState == 4) {
 			result=""; 
 			raw = myRequest.responseText;
 			theData = JSON.parse(raw);
 			elem = document.getElementById("messages");

 		for(i=0; i<theData.length;  i++){
 				result += "<p>"+ theData[i]["username"] + " " + theData[i]["content"] +"</p>"; 

 			}
 			elem.innerHTML = result; 
 		}
 	}

 	myRequest.send(null); 
}

