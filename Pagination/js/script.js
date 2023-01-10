//Selecting student
var studentList = document.querySelector(".student-list");
///define the items number per page
var itemPerPage = 9;
const header = document.querySelector(".header");
const button = document.querySelector("button");
// declaring function and passing data where we will loop through and page corresponding at every data
function showPage(data, page) {
  // create two variables which will represent the index for the first and last student on the page

  var startIndex = page * itemPerPage - itemPerPage;
  var endIndex = page * itemPerPage;

  // setting the innerHtml of studenlist  to empty string

  studentList.innerHTML = "";
  // looping over data to get every single data

  data.forEach((data, index) => {
    if (index >= startIndex && index < endIndex) {
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

//Create the `addPagination` function
//his function will create and insert/append the elements needed for the pagination buttons

function addPagination(list) {
  // create a variable to calculate the number of pages needed
  var numOfPages = Math.ceil(list.length / itemPerPage);

  var linkList = document.querySelector(".link-list");

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
      if (target.tagName === "BUTTON") {
        //then remove class active
        firstButton.classList.remove("active");
        //loop through all button then applied class of active to select
        //all buttons are a nodeList
        allButton.forEach(button => {
          button.classList.remove("active");
          //call showPage function with parameters
          showPage(list, target.textContent);
        });
        //showPage(list, page);
      }
    });
  }
}

showPage(data, 1);

addPagination(data);
