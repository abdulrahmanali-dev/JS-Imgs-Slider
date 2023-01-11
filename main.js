// Get Slider Items

let sliderImages = Array.from(
  document.querySelectorAll(".app-container .slider-container img")
);

// Get numebr of slides
let sliderCount = sliderImages.length;

// set current slide
let currentSlide = 1;

// get slide Number element
let slideNumbreElement = document.getElementById("slide-number");

// get next and previos button

let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

// Handle click on prev and next

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


// Create Paginations
// main UL
let paginationElement = document.createElement("ul");

// set attributes to ul

paginationElement.setAttribute("id", "pagination-ul");

// create list items based on the numbers of sliders using loop

for (let i = 1; i <= sliderCount; i++) {
  //list item
  let listItem = document.createElement("li");
  // append the number of slide
  listItem.append(document.createTextNode(i));
  // set data attribute
  listItem.setAttribute("data-slid", `${i}`);

  // append li to ul
  paginationElement.appendChild(listItem);
}

// append pagination to the app
document.querySelector(".indicators").appendChild(paginationElement);

// get the new created ul
let paginationCreatedUl = document.getElementById("pagination-ul");

// get pagination Items
let paginationBullts = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop Through all Bullet Items
for (let i = 0; i < paginationBullts.length; i++) {
  paginationBullts[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-slid"));

    theChecker();
  };
}

// Trigger The checker function
theChecker();

// Next Slide functiom

function nextSlide() {
  // check if current slide is not the last slide
  if (currentSlide !== sliderCount) {
    currentSlide++;
    console.log(currentSlide);
  }
  theChecker();
}

// Previose Slide functiom

function prevSlide() {
  // check if current slide is not the first slide

  if (currentSlide !== 1) {
    currentSlide--;
  }
  theChecker();
}
// Create The Checker Function

function theChecker() {
  removeAllActives();
  // set the slide number element
  slideNumbreElement.textContent = "Slide #" + currentSlide;

  // set active class on The Current Slide
  sliderImages[currentSlide - 1].classList.add("active");

  // set Active Class To Current Pagination Bullet

  paginationCreatedUl.children[currentSlide - 1].className = "active   ";

  // check if current slide is the first slide

  if (currentSlide == 1) {
    // add disabled class to previose button
    prevButton.classList.add("disabled");
  } else {
    // remove disabled class from prev button
    prevButton.classList.remove("disabled");
  }

  // check if current slide is the last slide
  if (currentSlide == sliderCount) {
    // add disabled class to next button
    nextButton.classList.add("disabled");
  } else {
    // remove disabled class from next button
    nextButton.classList.remove("disabled");
  }
}

// Remove all active Class
function removeAllActives() {
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  paginationBullts.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
