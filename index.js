const makeTemp = () => {
	// destructure exemplu: 
		// var a = [1, 2, 3];
		// in loc de 
		//  var b = a[0], c = a[1], var d = a[2]
			// puteti declara:
				// var [b, c, d] = a; [b, c, d] = [1, 2, 3];
	let [main_btns] = [...document.getElementsByClassName(`main_btns`)];
	let allBtns = document.querySelectorAll(`.btn`);
	return [main_btns, allBtns];
}; 
// functia de mai sus returneaza un array cu 2 elemente, main_btns (un div in care)
// o sa fie generate toate butoanele, si allBtns (butoanele)
let g; 
// g  = interval declarat mai jos, nush de ce da undefined daca nu o declar in global scope

// 2 conditinale, ca functia omni() sa stie daca intervalul e oprit, si cu ce culoare picteaza
let frozen = false;
let red = false;
// (scope)

// btnTracker = tracker pentru ultimul cub din ciclu, secondTracker = tracker pentru 
// linia din spate, care taie din linia turcoaz
let btnTracker = 0, secondTracker = 0, lennie = 40;
// limit = cate patratele (butoane) o sa fie generate in pagina:
let limit = 600;
// counter: pentru a genera butoanele fara sa le scrii pe toate in html
let counter = 0;

let omni = function () {
	do { //in main_btns.innerHTML, adauga cate un buton cu proprietatile de mai jos si 
		// adauga 1 la counter, pana cand counte != limit (600)
makeTemp()[0].innerHTML += '<button class="btn to_target transparent" type="button" name="button"></button>';
counter++;
} while (counter< limit);
// in fiecare buton returnat din functie, adauga un eveniment mouseover -> sterge 
//clasa transparent spacificata mai sus si adauga red, daca red == true
makeTemp()[1].forEach((o) => {
	o.addEventListener('mouseover', () => {
		o.classList.toggle('transparent');
		if (red) {
			o.classList.toggle('red') //#################
		};
	});
});
 g = setInterval(function () {
	if (btnTracker != limit) {
		makeTemp()[1][btnTracker].classList.toggle('transparent');
		btnTracker++;
	};

	//lennie ii lungimea cozii din capat care taie din sarpele turcoaz..lol!
	// second tracker -> pentru al doilea ciclu (sarpele alb/)/secondTracker = --//-- btn tracker

	if (btnTracker > lennie && secondTracker != limit) {
		makeTemp()[1][secondTracker].classList.toggle('transparent');
		secondTracker++;
	};
	// cand ambele ajung la limita, nu ai este nici un cub turc. in index;
		// btntracker si secondtracker o iau de la capat
	if (btnTracker == limit && secondTracker == limit) {
		btnTracker = 0, secondTracker = 0;
	}
// 40 milisecunde
}, 40);
};
// exec functia omni declarata mai sus
omni();
// mai jos cred ca se intelege, daca button.innerHTML == freeze => opreste intervalul, 
// schimba in unfreeze;  daca innerHTML == 'unfreeze' => schimba red din false in true sau din
// true in false; if true => ruleaza cod din conditional unde am pus #################
// opreste intervalul (daca ruleaza, l-am pus si aici ca mi-a dat un err)
// exec omni, schimba red din true in false, sa nu mai deseneze cu rosu
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

// ---------------------CLICKS:
// la click jos declara reloadCounter 0, adauga 1 la fiecare 100 milisec 
// la click sus (?), daca reloadCounter >= 10 (daca au trecut 100 * 10 milisecunde (1 sec))
	// exec window.location.reload() (this.location.href = this.location.href) (reload window)
button.addEventListener('mousedown', function(e) { 
	// deci la mouse down incepe sa numere:(vezi si consola);
	let reloadCounter = 0;
	let reloadG = setInterval(() => {
	  reloadCounter ++;
	  console.log(reloadCounter);
	}, 100);
	button.addEventListener('mouseup', (e) => {
		//daca a trecut de 10 sau 100 * 10 milisecunde, window reload la mouseup
		// daca nu a ajuns la 1000 mil si lasi mouseul, ii doar un click cu functionalitatea 
			// de mai sus
	  if (reloadCounter >= 10) {
	  	window.location.reload();
	  } else {
	  	clearInterval(reloadG);
	  	reloadCounter = 0; 
	  }
	});
});


