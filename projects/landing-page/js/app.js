

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

// let isInViewport = function (elem) {
//   let bounding = elem.getBoundingClientRect();
//   return (
//     bounding.top >= 0 &&
//     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };

// // // Check if the element in the viewport
// const isInViewport = elem => {
// 	// Get the element top coordinate
//   const topBoundary = elem.getBoundingClientRect().top;
//   // 0.4 works good without overlapping sections
//   return topBoundary < windHeight * 0.4 && topBoundary > windHeight * -0.6  ;
// };

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
  meunuLiElement.appendChild(meunuAnchorElement);
  fragment.appendChild(meunuLiElement);
});

menuUlElement.appendChild(fragment);

// Add class 'active' to section when near top of viewport

// document.addEventListener("scroll", function(){
//   sections.forEach((item, i) => {
//     let sectionClassList = sections[i].classList;
//     let devClassList = sections[i].querySelector('div').classList;
//
//     if(isInViewport(sections[i])){
//       //highlite the paragraph
//       sectionClassList.add("your-active-class");
//       devClassList.add("landing__container::before", "landing__container::after");
//       menuUlElement.querySelectorAll('li')[i].querySelector('a').classList.add("activeState");
//     }else {
//       sectionClassList.remove("your-active-class");
//       devClassList.remove("landing__container::before", "landing__container::after");
//       menuUlElement.querySelectorAll('li')[i].querySelector('a').classList.remove("activeState");
//     }
//   });
// });

the callback function that will be fired
when the element apears in the viewport
function onEntry(entry) {
  let menuElements = menuUlElement.querySelectorAll('li')
  entry.forEach((change, i) => {
    change.target.classList.add("your-active-class");
    change.target.classList.add("landing__container::before", "landing__container::after");
    menuElements[i].querySelector('a').classList.add("activeState");
  });
}

// list of options
let options = {
  threshold: 0.5
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
