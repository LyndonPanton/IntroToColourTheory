let year = document.getElementById("year");
let date = new Date();
year.textContent = `${date.getFullYear()}`;

let achromaticInfo = document.getElementById("did-you-know");
achromaticInfo.addEventListener("click", function() {
	console.log("Info icon clicked.");
});