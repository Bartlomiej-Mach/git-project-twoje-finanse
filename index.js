//TEST JAVA IS CONTECTED CORECTLY?
console.log("TEST");

//OPEN CLOSE NAVI BUTTON

const btn = document.querySelector(".btn-navi");
const naviList = document.querySelector(".navigation-menu");
const line = document.querySelector(".line");

//Function created for main navi button.
//This function allows for open / close menu list
//Function toggle main classes to class--active 
//Every one class is created in _navigation-section.scss at end of file.
const openClose = () => {
	naviList.classList.toggle("navigation-menu--active");
	btn.classList.toggle("btn--active");
	line.classList.toggle("line--active");
	//Test if button working corectly
	console.log("TEST-BUTTON");
};

btn.addEventListener("click", openClose);


/* -------- */