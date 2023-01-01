/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
var studentList = document.querySelector(".student-list");
var itemPerPage = 9;
!(function showPage(data, page) {
  // create two variables which will represent the index for the first and last student on the page

  var startIndex = page * itemPerPage - itemPerPage;
  var endIndex = page * itemPerPage;

  // select the element with a class of `student-list` and assign it to a variable

  // set the innerHTML property of the variable you just created to an empty string
  studentList.innerHTML = "";
  // loop over the length of the `list` parameter

  data.forEach((data, index) => {
    if (index >= startIndex && index <= endIndex) {
      const studentItem = `<li class="student-item cf">
          <div class="student-details">
          <img class="avatar" src= ${
            data.picture.thumbnail
          } alt="Profile Picture">
          <h3>${data.name.first + " " + " " + data.name.last}</h3>
          <span class="email">${data["email"]}/span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${data.registered.date}</span>
          </div>
        </li>`;
      studentList.insertAdjacentHTML("beforeend", studentItem);
    }
  });
})(data, 1);

//inside the loop create a conditional to display the proper students
// inside the conditional:
// create the elements needed to display the student information
// insert the above elements

/*


Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
var linkList = document.querySelector(".link-list");
!(function addPagination(list) {
  // create a variable to calculate the number of pages needed
  var numOfPages = Math.ceil(list.length / itemPerPage);

  // select the element with a class of `link-list` and assign it to a variable

  // set the innerHTML property of the variable you just created to an empty string
  linkList.innerHtml = "";
  // loop over the number of pages needed
  var i = 1;
  for (var i = 1; i <= numOfPages; i++) {
    var button = `<li>
   
   
   

   <button type="button">${numOfPages}</button>
   
   linkList.innerHTML +=button;
  
 </li>`;
    // give the first pagination button a class of "active"
    if (i === 0) {
      document.querySelector(button).className = "active";
      linkList.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
          document.querySelector(active).className = "";

          e.target.className = "active";
          e.target = textContent;
          showPage(list, textContent);
        }
      });
    }
  }

  // create the elements needed to display the pagination button
  // insert the above elements

  // create an event listener on the `link-list` element
  // if the click target is a button:
  // remove the "active" class from the previous button
  // add the active class to the clicked button
  // call the showPage function passing the `list` parameter and page to display as arguments
})(data);
