var sliders = [{id: "#html-css", value: 65}, {id: "#javaScript", value: 75}, {id: "#ruby", value: 75}, {id: "#php", value: 50}],
slidersLength = sliders.length;

for (var i = 0; i < slidersLength; i++) {
	$(sliders[i].id).foundation('slider', 'set_value', sliders[i].value);	
}

calculateSkills();

setTimeout(registerSliderChanges, 1000);



