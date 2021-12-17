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
// Find the UL where I will place the navigation bar
let list =document.querySelector('#navbar__list');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//Create Anchor element
function createAnchor(i){
 
  let newAnchor = document.createElement('a');

  // Create anchor title
  newAnchor.innerText='Section ' + i;
  newAnchor.addEventListener('click', scrollToSection); 

  // Create anchor link
  newAnchor.classList.add("menu__link");
  newAnchor.id = 'anchor' + (i-1);
  return newAnchor;
  
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Scroll to anchor ID using scrollTO event
function scrollToSection(event){
  event.preventDefault(); 
  const sec_id = event.target.innerText.replace('Section ', 'section');
  document.getElementById(sec_id).scrollIntoView({ behavior: 'smooth', block: 'center'}); 
}

// Set sections as active
function setSectionsActive(allSections,activeSectionIndex){
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

// build the nav
function buildMenu(numberOfSections,fragment,list){
  for (let i = 1; i <= numberOfSections.length; i++) {
    //Create a <li> item
    let listItem = document.createElement('li'); 
    newAnchor=createAnchor(i);

    if(i==1){
      newAnchor.classList.add("active");
    }

    listItem.appendChild(newAnchor);
    fragment.appendChild(listItem);
  }
  list.appendChild(fragment);
}


// Add class 'active' to section when near top of viewport
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
  setSectionsActive(allSections,activeSectionIndex);
 
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildMenu(numberOfSections,fragment,list);

// Scroll to section on link click
window.addEventListener("scroll", refreshActive);





