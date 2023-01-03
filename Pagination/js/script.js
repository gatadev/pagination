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
showPage(data, 1);

function showPage(data, page) {
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
          <span class="email">${data["email"]}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${data.registered.date}</span>
          </div>
        </li>`;
      studentList.insertAdjacentHTML("beforeend", studentItem);
    }
  });
}

//inside the loop create a conditional to display the proper students
// inside the conditional:
// create the elements needed to display the student information
// insert the above elements

/*


Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  // create a variable to calculate the number of pages needed
  var numOfPages = Math.ceil(list.length / itemPerPage);

  var linkList = document.querySelector(".link-list");
  // select the element with a class of `link-list` and assign it to a variable

  // set the innerHTML property of the variable you just created to an empty string
  linkList.innerHTML = " ";
  // loop over the number of pages needed
  var i = 1;
  for (var i = 1; i <= numOfPages; i++) {
    var button = `<li>
   
   
   

   <button type="button">${i}</button>
   
 
  
 </li>`;

    linkList.insertAdjacentHTML("beforeend", button);
    //This will select all button in the parent div
    const allButton = document.querySelectorAll("button");
    //this will select the parent div
    const div = document.querySelector(".pagination");
    // this will select the first button
    const firstButton = document.querySelector("button");
    //Adding eventListener to the parent div
    div.addEventListener("click", event => {
      // all target will be button
      const target = event.target;
      //if taget is a button
      if (target === "BUTTON") {
        //then remove class active
        firstButton.classList.remove("active");
        //loop through all button then applied class of active to select
        //all buttons are a nodeList
        allButton.forEach(button => {
          button.classList.add("active");
          //call showPage function with parameters
          showPage(list, page);
        });
        //showPage(list, page);
      }
    });
  }
}

showPage(data, 1);

addPagination(data);
