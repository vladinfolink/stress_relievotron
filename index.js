const makeTemp = () => {
	let [main_btns] = [...document.getElementsByClassName(`main_btns`)];
	let allBtns = document.querySelectorAll(`.btn`);
	return [main_btns, allBtns];
}; 
let g;
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
		if (cleared) {o.classList.toggle('red')};
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

}, 20);
};
omni();
let cleared = false;
let freezeReload = document.getElementById('freeze');
freezeReload.addEventListener(`click`, function() {
	if (!cleared) {clearInterval(g);cleared = !cleared;freezeReload.innerHTML = 'reload';
	} else {window.location.reload();}
});
let unfreeze = document.getElementById('unfreeze');
unfreeze.addEventListener('click', (e) => {
  if (cleared) {
  	omni();
  };
});

