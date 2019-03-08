let year = document.getElementById("year");
let date = new Date();
year.textContent = `${date.getFullYear()}`;

let achromaticInfo = document.getElementsByClassName("did-you-know");
Array.from(achromaticInfo).forEach(function(icon) {
	icon.addEventListener("click", function() {
		console.log("Info icon clicked.");
	});
});