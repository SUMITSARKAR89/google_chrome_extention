/* step 1: name the value or create variable name
   step 2: set input value and button click 
            a. add event listener
            b. push value
            c. clear value when click 
            d. set local storage JSON stringify
    step 3: add list when input value is save
            a. create function array
            b. create loop by taking innerHTML
    step 4: sting to array convert
    step 5: set delete button
    step 6: set tab button or link button 
   
   */
            

/* 1 step one (take variable) */
let allLink =[];
const input = document.getElementById("input");
const inputBtn = document.getElementById("inputBtn");
const tabBtn = document.getElementById("tabBtn");
const deleteBtn = document.getElementById("deleteBtn");
const listItem = document.getElementById("list");


//  console.log(input, inputBtn, tabBtn, deleteBtn, list)

/* 2 step two ( work input and input value) */
inputBtn.addEventListener("click", () => {       //1 call function//
    let links = input.value ;    //2 take input value//
    allLink.push(links);     //3 take input value for push //
    input.value ="";     //4 to show clear the input value //
    localStorage.setItem("links", /*allLink*/ JSON.stringify(allLink));      // 5 set local storage//

    renderArr(allLink); //from step 3 //
});

/* 4 step four (string to array)*/
let getLinksLocalStorage = JSON.parse(localStorage.getItem("links")); //from step 2 // 
if (getLinksLocalStorage){  // convert if else//
    allLink = getLinksLocalStorage;
    renderArr(allLink);
}

/* 3 step three ( take array function, take loop, and attach with list) */
function renderArr(arr){  //1 taking function//
    listItem.innerHTML =""; //2 to listing on sigle line//

    arr.forEach((a) => {   //3 taking loop//
        listItem.innerHTML += `  
        <li><a href=${a} target="_blank" class="link">${a}</a></li>`;    //4 set inner HTML//
    });
    
}

/* 5 step Four (work delete button)*/
deleteBtn.addEventListener("click", () =>{
    allLink = [];
     localStorage.clear(); // to clear localstorage//
    renderArr(allLink);
})

/* 6 step Five (tab button)*/
tabBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0].url;
        allLink.push(activeTab);
        localStorage.setItem(links, JSON.stringify(allLink));
        renderArr(allLink);
      });
})



