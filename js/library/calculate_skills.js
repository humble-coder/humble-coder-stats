function getSpecialtyAndAverage(sliders) {
	var max = 0, total = 0;
	var value;
	var specialty;
	var result = {};

	for (var i = 0; i < slidersLength; i++) {
		value = parseInt($(sliders[i].id).attr('data-slider'));
		total += value;
		if (value > max) {
			max = value;
			specialty = sliders[i].id;
		}
	}

	result.average = (total/slidersLength);

	switch(specialty) {
		case "#html-css":
			result.specialty = "Cascader";
			return result;
		case "#javaScript":
			result.specialty = "DOMBOMber";
			return result;
		case "#ruby":
			result.specialty = "Railsrunner";
			return result;
		case "#php":
			result.specialty = "Prehypertexter";
			return result;
	}
}

function getDescription(sliderInfo) {
	var specialty = sliderInfo.specialty,
	average = sliderInfo.average;

	var rank;

	if (average <= 25)
		rank = "Beginner";
	else if (average <= 50)
		rank = "Amateur";
	else if (average <= 75)
		rank = "Seasoned";
	else
		rank = "Master";

	return rank + " " + specialty;
}

function calculateSkills() {
	var sliderInfo = getSpecialtyAndAverage(sliders),
	description = getDescription(sliderInfo);
	$("#description").text(description);
}

function registerSliderChanges() {
	var nameElement = $("#name");
	$('[data-slider]').on('change.fndtn.slider', function() { 
		calculateSkills();
		if (nameElement.text != "Your Title") 
			nameElement.text("Your Title"); 
	});
}