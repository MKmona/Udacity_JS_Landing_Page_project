/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
*/
const fragment = document.createDocumentFragment();
let numberOfSections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function scrollToSection(event){
  event.preventDefault(); 
  const sec_id = event.target.getAttribute('href').slice(1);
  document.getElementById(sec_id).scrollIntoView({ behavior: 'smooth', block: 'center'}); 
}

// Get Position
function refreshActive(){
  const allSections = document.getElementsByTagName('section');
  let activeSectionIndex = -1;
  for(let i=0; i<allSections.length; i++){
    if(
      allSections[i].getBoundingClientRect().top < (window.innerHeight - 0.25*window.innerHeight)&&
      allSections[i].getBoundingClientRect().bottom > (0 + 0.25*window.innerHeight)){
      activeSectionIndex = i;
    }
  }

  for(let i=0; i<allSections.length; i++){
    let anchor = document.getElementById('anchor'+i);
    if(activeSectionIndex === i){
      allSections[i].className='your-active-class';
      anchor.classList.add('active');
    }
    else{
      allSections[i].className = '';
      anchor.classList.remove('active');
    }

  }
}
window.addEventListener("scroll", refreshActive);




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click


// Set sections as active

// Find the UL where I will place the navigation bar
let list =document.querySelector('#navbar__list');

// a loop to create anchors and list items
for (let i = 1; i <= numberOfSections.length; i++) {

  //Create a <li> item
  let listItem = document.createElement('li'); 

  // Create anchor element
  let newAnchor = document.createElement('a');

  //appending anchor <a> element as a child to <li>. 
  listItem.appendChild(newAnchor);

  // Create anchor title
  newAnchor.innerText='Section ' + i;
  newAnchor.addEventListener('click', scrollToSection); 

  // Create anchor link
  let sectionId= '#section'+i;
  newAnchor.href = sectionId ;   
  newAnchor.classList.add("menu__link");
  newAnchor.id = 'anchor' + (i-1);
  
  if(i==1){
    newAnchor.classList.add("active");
  }
   
  fragment.appendChild(listItem);
}
   
//Add the navigation tabs to the UL
list.appendChild(fragment);


//window.addEventListener('scroll', toggleActiveState); 

