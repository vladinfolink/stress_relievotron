const makeTemp = () => {
	let [main_btns] = [...document.getElementsByClassName(`main_btns`)];
	let allBtns = document.querySelectorAll(`.btn`);
	return [main_btns, allBtns];
}; 
let g;
let frozen = false;
let red = false;
// (scope)

let btnTracker = 0, secondTracker = 0, lennie = 40;
let limit = 600;
let counter = 0;

let omni = function () {
	do {
makeTemp()[0].innerHTML += '<button class="btn to_target transparent" type="button" name="button"></button>';
counter++;
} while (counter< limit);
makeTemp()[1].forEach((o) => {
	o.addEventListener('mouseover', () => {
		o.classList.toggle('transparent');
		if (red) {
			o.classList.toggle('red')
		};
	});
});
 g = setInterval(function () {
	if (btnTracker != limit) {
		makeTemp()[1][btnTracker].classList.toggle('transparent');
		btnTracker++;
	};
	if (btnTracker > lennie && secondTracker != limit) {
		makeTemp()[1][secondTracker].classList.toggle('transparent');
		secondTracker++;
	};
	if (btnTracker == limit && secondTracker == limit) {
		btnTracker = 0, secondTracker = 0;
	}

}, 40);
};
omni();

let button = document.getElementById('freeze');
button.addEventListener(`click`, function() {
	if (button.innerHTML == 'freeze'){
		clearInterval(g);
	 	button.innerHTML = 'unfreeze';
		red = !red;
	} else if (button.innerHTML == 'unfreeze') {
		clearInterval(g);
		button.innerHTML = 'freeze';
		omni();
		red = !red;
	};
});


button.addEventListener('mousedown', function(e) { 
	let reloadCounter = 0;
	let reloadG = setInterval(() => {
	  reloadCounter ++;
	  console.log(reloadCounter);
	}, 100);
	button.addEventListener('mouseup', (e) => {
	  if (reloadCounter >= 10) {
	  	window.location.reload();
	  } else {
	  	clearInterval(reloadG);
	  	reloadCounter = 0; 
	  }
	});
});



