<!--markdown-->
#google chrome extention (CMBD-246)
---
#### HTML, CSS3, JavaScript
<br/>
<p>
    step 1: name the value or create variable name<br/>
   step 2: set input value and button click <br/>
            . add event listener<br/>
            . push value<br/>
            . clear value when click <br/>
            . set local storage JSON stringify<br/>
    step 3: add list when input value is save<br/>
            . create function array<br/>
            . create loop by taking innerHTML<br/>
    step 4: sting to array convert<br/>
    step 5: set delete button<br/>
    step 6: set tab button or link button <br/>
 <p/> 
     <br/>

<img src="Screenshot .png" alt="">



```html

<body>
    <div class="container">
        <input type="text " placeholder="Type your text here" id="input">
        <div class="box">
            <button id="inputBtn">Save</button>
            <button id="tabBtn">save current link</button>
            <button id="deleteBtn">clear</button>
            <ol id="list">
                <!-- <li><a href="#" target="_blank" class="link">link</a></li> -->
            </ol>
        </div>

    </div>
    <script src="chorom.js"></script>
    
</body>
```

<br/>
menifest.json
<br/>

```javaScript

{
    "manifest_version": 3,
    "version": "1.0",
    "name": "Save Links",
   " description" : "Save all links you needed for future",
    "action": {
      "default_popup": "index.html",
      "default_icon": "icon.png",
      "default_title": "Save link"
    },
    "permissions": ["tabs"]
  }
```

<br/>
1. 1 step one (take variable)
<br/>

```javaScript

let allLink =[];
const input = document.getElementById("input");
const inputBtn = document.getElementById("inputBtn");
const tabBtn = document.getElementById("tabBtn");
const deleteBtn = document.getElementById("deleteBtn");
const listItem = document.getElementById("list");

```
<br/>
2. 2 step two ( work input and input value)
<br/>

```javaScript

inputBtn.addEventListener("click", () => {       //1 call function//
    let links = input.value ;    //2 take input value//
    allLink.push(links);     //3 take input value for push //
    input.value ="";     //4 to show clear the input value //
    localStorage.setItem("links", /*allLink*/ JSON.stringify(allLink));      // 5 set local storage//

    renderArr(allLink); //from step 3 //
});

```
<br/>
3. 3 step three ( take array function, take loop, and attach with list)
<br/>

```javaScript

function renderArr(arr){  //1 taking function//
    listItem.innerHTML =""; //2 to listing on sigle line//

    arr.forEach((a) => {   //3 taking loop//
        listItem.innerHTML += `  
        <li><a href=${a} target="_blank" class="link">${a}</a></li>`;    //4 set inner HTML//
    });
    
}

```
<br/>
4. 4 step four (string to array)
<br/>

```javaScript

let getLinksLocalStorage = JSON.parse(localStorage.getItem("links")); //from step 2 // 
if (getLinksLocalStorage){  // convert if else//
    allLink = getLinksLocalStorage;
    renderArr(allLink);
}

```

<br/>
5.  5 step Five (work delete button)
<br/>

```javaScript

deleteBtn.addEventListener("click", () =>{
    allLink = [];
     localStorage.clear(); // to clear localstorage//
    renderArr(allLink);
})
```

<br/>
6. 6 step Six (tab button)
<br/>

```javaScript

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0].url;
        allLink.push(activeTab);
        localStorage.setItem(links, JSON.stringify(allLink));
        renderArr(allLink);
      });
})
```
