var data = JSON.parse(teamMembers)

for (var i = 0; i < data.length; i++) {
	document.getElementById("teamContent").innerHTML += `<div id='employee${i}'>  ${data[i].name} <br> ${data[i].email} <br>  <img src='${data[i].image}' id='img${i}'> <div id='info${i}'></div></div>`
}


var togle = 2;

function open (x) {
	document.getElementById("info" + x).innerHTML = `<p><b>Position</b> ${data[x].position} </p>  
       <p><b>Employed since</b> ${data[x].year} </p>  <p><b>Hobby</b> ${data[x].hobby} </p>`;
    document.getElementById("img" +x).style.width = "200px";
    document.getElementById("img" +x).style.height = "200px";
}

function close(y){
    document.getElementById("info" + y).innerHTML = "";
    document.getElementById("img" + y).style.width = "100px";
    document.getElementById("img" + y).style.height = "100px";
 }

 for (let i = 0; i < data.length; i++) {
    document.getElementById("img" + i).addEventListener("click", function () {
    	if(togle % 2 == 0){
    		open(i);
    		togle++;
    	}else {
    		close(i);
            togle++;
    	}
    }, false);
}