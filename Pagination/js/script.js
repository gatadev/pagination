/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students

*/
let li = document.querySelector(".student-item");
let header = document.getElementBtTagName(h3);
let span = document.getElementBtTagName(span);

function showPage() {
createElement();
};

const createElement = function() {
   li.insertAdjacentHTML(
     `<li> ${img.src}
         <h3> ${header} </h3>
         <span> ${span} </span>
         <hr>
 </li>`
   );
 }

/*

Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
