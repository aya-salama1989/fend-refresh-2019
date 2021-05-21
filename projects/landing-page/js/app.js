

/**
* Define Global Variables
*
*/

const sections = document.querySelectorAll("section[data-nav]");

/**
* End Global Variables
* Start Helper Functions
*
*/



/**
* End Helper Functions
* Begin Main Functions
*
*/


// build the nav

const menuUlElement = document.querySelector("#navbar_list")
const fragment = document.createDocumentFragment();

sections.forEach((section, i) => {
  const meunuLiElement = document.createElement('li');
  const meunuAnchorElement = document.createElement('a');
  meunuAnchorElement.innerText = sections[i].dataset.nav;
  meunuAnchorElement.id ="anchor"+sections[i].getAttribute('id')
  meunuLiElement.appendChild(meunuAnchorElement);
  fragment.appendChild(meunuLiElement);
});

menuUlElement.appendChild(fragment);


// // the callback function that will be fired
// // when the element apears in the viewport
function onEntry(entry) {
  entry.forEach((change, i) => {
    let targetedElementStyle = change.target.classList;
    let elementname = "anchor"+change.target.id
    if (change.intersectionRatio > 0.75) {
      targetedElementStyle.add("your-active-class");
      targetedElementStyle.add("landing__container::before", "landing__container::after");
      document.getElementById(elementname).classList.add("activeState");
    } else {
      targetedElementStyle.remove("your-active-class");
      targetedElementStyle.remove("landing__container::before", "landing__container::after");
      document.querySelectorAll('a').forEach((item, i) => {
        item.classList.remove("activeState");
      });
    }
  });
}

// list of options
let options = {
  threshold: [0, 0.25, 0.75, 1]
};

// instantiate a new Intersection Observer
let observer = new IntersectionObserver(onEntry, options);

// loop through all elements
// pass each element to observe method
sections.forEach((item, i) => {
  observer.observe(item);
});


// Scroll to anchor ID using scrollTO event

document.querySelectorAll('a').forEach((item, i) => {
  item.addEventListener('click', function(){
    document.getElementById('section'+(i+1))
    .scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  });
});



/**
* End Main Functions
* Begin Events
*
*/

//scroll to top function
document.getElementById("btn_scroll_to_top").addEventListener("click",function functionName() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
