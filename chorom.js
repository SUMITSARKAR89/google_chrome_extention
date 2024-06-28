
/*step one (take variable) */
let allLink =[];
const input = document.getElementById("input");
const inputBtn = document.getElementById("inputBtn");
const tabBtn = document.getElementById("tabBtn");
const deleteBtn = document.getElementById("deleteBtn");
const listItem = document.getElementById("list");

//  console.log(input, inputBtn, tabBtn, deleteBtn, list)

/*step two ( work input and input value) */
inputBtn.addEventListener("click", () => {  // call function//
    let links = input.value ; // take input value//
    allLink.push(links); // take input value for push //
    input.value =""; // to show empty the input value //
    localStorage.setItem("links", allLink); // set local storage//



    renderArr(allLink); //step three //
});

/*step three ( take array function, take loop, and attach with list) */

function renderArr(arr){   // taking function//
    arr.forEach((a) => {   // taking loop//
        listItem.innerHTML += `  
        <li><a href=${a} target="_blank" class="link">${a}</a></li>`;               // set inner HTML//
    });
}
