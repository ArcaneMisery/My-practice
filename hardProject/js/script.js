let img_item = document.getElementsByClassName("img_item"),
	button_three = document.getElementById("button_three"),
	button_item = document.getElementsByClassName("button_item"),
	left = document.getElementById("slider-left"),
	right = document.getElementById("slider-right"),
	sliderIndex = 1;

showSlider(sliderIndex);

function showSlider(n) {
	if (n < 1) {
		sliderIndex = img_item.length;
	} else if (n > img_item.length) {
		sliderIndex = 1
	}
	for (let i = 0; i < img_item.length; i++) {
		img_item[i].style.display = "none";
	}
	for (let i = 0; i < button_item.length; i++) {
		button_item[i].classList.remove("new_class");
	}
	img_item[sliderIndex - 1].style.display = "block";
	button_item[sliderIndex - 1].classList.add("new_class");
}

function plusSlider(n) {
	showSlider(sliderIndex += n);
}

function clearSlider(n) {
	showSlider(sliderIndex = n);
}
left.onclick = function () {
	plusSlider(-1);
}
right.onclick = function () {
	plusSlider(1);
}

button_three.onclick = function (e) {
	for (let i = 0; i < button_item.length + 1; i++) {
		if (e.target.classList.contains("button_item") && e.target == button_item[i - 1])
			clearSlider(i)
	}
}