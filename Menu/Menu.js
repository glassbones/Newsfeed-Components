/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/



function data2Dom2(data){
  //making elements <div class="menu"> and <ul> 
  let menu = build(`div`,`menu`);
  let list = build(`ul`);
  let els = [];
  //fill array with all data from argument. <li> sample text </li> 
  for (item of data){
      let el = build('li');
      el.innerHTML = item;
      els.push(el);}
  //make <div class=menu> a parent of the <ul> and then fill the ul with each <li> 
  menu.appendChild(list);
  for (el of els){ list.appendChild(el)}
  // find .menu-button and click event to toggle menu display with .menu--open class
  document.querySelector(`.menu-button`).onclick = ()=> menu.classList.toggle('menu--open');
  return menu;
  ///////////////////////////////////////////////////////////////
  //////////////////////lazy functions///////////////////////////
  ///////////////////////////////////////////////////////////////
  function build(htmlTag, className){
    let el = document.createElement(`${htmlTag}`);
    if (className) el.classList.add(`${className}`);
    return el; 
  }
}

const menu = data2Dom2(menuItems);
document.body.appendChild(menu);

