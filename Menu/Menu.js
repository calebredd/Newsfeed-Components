/*
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu reference.
  menu.classList.toggle("menu--open");
  menu.classList.toggle("open");
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);
*/

/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

var header=document.querySelector(".header");
const menu=document.createElement("div");
var menuList=document.createElement("ul");
const menuBtn=document.querySelector(".menu-button");

menu.classList.add("menu");
menu.appendChild(menuList);
menuItems.forEach(function(e){
  var item=document.createElement("li");
  item.textContent=e;
  menuList.appendChild(item);  
  return;
});
menuBtn.addEventListener("click",function(){
  menu.classList.toggle("menu--open");
});
header.appendChild(menu);
/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
