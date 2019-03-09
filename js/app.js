let year = document.getElementById("year");
let date = new Date();
year.textContent = `${date.getFullYear()}`;

let didYouKnow = [
	{
		"info": "As the gene for differentiating colour sits on the X chromosome, women are generally better at perceiving differences in very similar colours, while men are generally better at recognizing fine details in moving objects."
	},
	{
		"info": "Did you know? White text on a black background requires less energy so improves battery life on most display technologies."
	},
	{
		"info": "Did you know? Babies as old as two weeks old can distinguish the colour red. This is thought to be because red has the longest wave length among all colours making it easy to process."
	},
	{
		"info": "The colour yellow is known to cause nausea (which is why you'll rarely see in airplanes, hospitals), it also believed to be the most irritating colour as it causes excessive stimulation to the eyes."
	},
	{
		"info": "Orange carrots are mutants! Carrots were generally purple in colour until Dutch farmers managed to cultivate yellow and white carrots into orange ones."
	},
	{
		"info": "According to research, red and yellow are considered to be the most appetizing colours that is why many fast food restaurants choose to have them on their logo (think McDonald's, Wendy's, Pizza Hut), blue is generally thought to be the least appetizing colour."
	},
	{
		"info": "Don't get too confused now but did you know that red, blue and yellow are ALSO considered to be the three primary colours? And of course you can make every possible colour using those three colours."
	},
	{
		"info": "If you want to see examples of the analogous colour scheme at work just look at some of the paintings by Vincent Van Gogh. He is well known for using this scheme in his paintings of flowers (Irises in a Vase, Vase with Twelve Sunflowers, Pink Roses in a Vase, etc.)"
	},
	{
		"info": "Some colours, known as impossible colours are colours too complex for the human eye to even interpret!"
	},
	{
		"info": "Technically colours don't exist at all (Rendering this page pointless :O). In fact colours are just the result of our brains trying to make sense of signals it receives from the eyes. If this didn't happen the world would constantly be pitch black!"
	}
];

let achromaticInfo = document.getElementsByClassName("did-you-know");
Array.from(achromaticInfo).forEach(function(icon) {
	icon.addEventListener("click", function() {
		// console.log("Info icon clicked.");
		// console.log(this);
		// console.log(this.parentElement);
		// console.log(this.parentNode);
		let modal = document.createElement("span");
		modal.className = "modal";
		modal.addEventListener("click", function() {
			modal.parentElement.removeChild(modal);
		});
		

		switch(this.parentElement.id) {
			case "introduction":
				console.log("intro...");
				modal.textContent = didYouKnow[0]["info"];
				this.parentElement.appendChild(modal);
				break;
			case "achromatic":
				console.log("achromatic...");
				modal.textContent = didYouKnow[1]["info"];
				this.parentElement.appendChild(modal);
				break;
			case "primary":
				console.log("primary...");
				modal.textContent = didYouKnow[2]["info"];
				this.parentElement.appendChild(modal);
				break;
			case "secondary":
				console.log("secondary...");
				modal.textContent = didYouKnow[3]["info"];
				this.parentElement.appendChild(modal);
				break;
			case "tertiary":
				console.log("tertiary...");
				modal.textContent = didYouKnow[4]["info"];
				this.parentElement.appendChild(modal);
				break;
			case "complementary":
				console.log("complementary...");
				modal.textContent = didYouKnow[5]["info"];
				this.parentElement.appendChild(modal);
				break;
			case "triadic":
				console.log("triadic...");
				modal.textContent = didYouKnow[6]["info"];
				this.parentElement.appendChild(modal);
				break;
			case "analogous":
				console.log("analogous...");
				modal.textContent = didYouKnow[7]["info"];
				this.parentElement.appendChild(modal);
				break;
			case "monochromatic":
				console.log("monochromatic...");
				modal.textContent = didYouKnow[8]["info"];
				this.parentElement.appendChild(modal);
				break;
			case "summary":
				console.log("summary...");
				modal.textContent = didYouKnow[9]["info"];
				this.parentElement.appendChild(modal);
				break;
			default:
				console.error("Section not found.");
				break;
		}
	});
});