

/**
* Define Global Variables
*/

const sections = document.querySelectorAll("section[data-nav]");

/**
* End Global Variables
* Start Helper Functions
*
*/


/**
* build the nav dynamically
*/

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


/**
* add text to sections dynamically
*/
sections.forEach((item, i) => {
item.appendChild('p').innerText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
"Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. "+
"Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. "+
"Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt."+
"Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue."+
"Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus."+
"Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus."+
"Sed congue et odio sed euismod."

item.appendChild('p').innerText ="Aliquam a convallis justo."+
" Vivamus venenatis, erat eget pulvinar gravida, "+
"ipsum lacus aliquet velit, vel luctus diam ipsum a diam. "+
"Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. "+
"Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
});



/**
* activate views when visible in the view port
*/

/* callback function will be fired
when an element apears in the viewport*/
function onEntry(entry) {
entry.forEach((change, i) => {
  let targetedElementStyle = change.target.classList;
  let elementname = "anchor"+change.target.id
  if (change.intersectionRatio > 0.3) {
    targetedElementStyle.add("your-active-class");
    targetedElementStyle.add("landing__container::before", "landing__container::after");
    document.getElementById(elementname).classList.add("activeState");
  } else {
    document.getElementById(elementname).classList.remove("activeState");
    targetedElementStyle.remove("your-active-class");
    targetedElementStyle.remove("landing__container::before", "landing__container::after");
  }
});
}

// options
let options = {
threshold: [0, 0.25, 0.75, 1]
};

//Intersection Observer
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
