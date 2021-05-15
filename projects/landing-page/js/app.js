

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

let isInViewport = function (elem) {
  let bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};


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
  meunuAnchorElement.href ="#section"+(i+1); // Scroll to section on link click
  meunuLiElement.appendChild(meunuAnchorElement);
  fragment.appendChild(meunuLiElement);
});


menuUlElement.appendChild(fragment);

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", function(){
  sections.forEach((item, i) => {
    let sectionClassList = sections[i].classList;
    let devClassList = sections[i].querySelector('div').classList;

    if(isInViewport(sections[i])){
      //highlite the paragraph
      sectionClassList.add("your-active-class");
      devClassList.add("landing__container::before", "landing__container::after");
      menuUlElement.querySelectorAll('li')[i].querySelector('a').classList.add("activeState");
    }else {
      sectionClassList.remove("your-active-class");
      devClassList.remove("landing__container::before", "landing__container::after");
      menuUlElement.querySelectorAll('li')[i].querySelector('a').classList.remove("activeState");
    }
  });
});

// Scroll to anchor ID using scrollTO event


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
