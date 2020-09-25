function calculation () {
	var yourName = document.getElementById("yourName").value;
	var age = document.getElementById("age").value;
	var country = document.getElementById("country").value;
	var horsepower = document.getElementById("horsepower").value;

	if (country == "Austria") {
		var cost = Math.floor(Number(horsepower) * 100 / Number(age) + 50);
		document.getElementById("result").innerHTML = yourName + ", your insurance costs " + cost + " &euro;";
	} else if (country == "Greece") {
		var cost = Math.floor(Number(horsepower) * 120 / Number(age) + 100);
		document.getElementById("result").innerHTML = yourName + ", your insurance costs " + cost + " &euro;";
	} else if (country == "Hungary") {
		var cost = Math.floor(Number(horsepower) * 150 / (Number(age)+3) + 50);
		document.getElementById("result").innerHTML = yourName + ", your insurance costs " + cost + " &euro;";
	}
}

document.getElementById("calculate").addEventListener("click", calculation, false);