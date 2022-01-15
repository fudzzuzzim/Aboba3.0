"use strict"

const about = document.querySelector(".about");

const alertQuestion = () => {
	alert("Ты че на меня нажимаешь ?");
}

about.addEventListener("click",function (event) {
	if (event.target.closest(".button")){
		alertQuestion();
	}
});