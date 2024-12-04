let myLeads = [];
let oldLeads = [];
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

//THIS CHECKS IF THERE ARE LEADS IN LOCAL STORAGE, AND IF THERE ARE, IT ADDS THEM TO THE ARRAY
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

//THIS RENDERS THE LIST OF LEADS, IN THE BROWSER.
    // Loop through each element in the array `myLeads`
    // `value` is the current item in the array during each iteration of the loop.
//THIS ADDS THE LEADS TO THE BROWSER PAGE
    // For each `value`:
    // 1. Append a new `<li>` (list item) to the `ulEl` (unordered list element in HTML).
    //    - Each `<li>` contains an anchor `<a>` tag.
    // 2. The `<a>` tag has:
    //    - An `href` attribute set to `${value}` (current lead URL in the array).
    //    - A `target='_blank'` attribute so that clicking the link opens it in a new browser tab.
    // 3. The anchor text (`${value}`) displays the URL as a clickable link.
    //    - `${value}` uses template literals to insert the current `value` into the HTML string.
    //ALTERNATIVE WAY TO ADD THE LEADS TO THE BROWSER PAGE
    // const li = document.createElement("li") 
    // li.textContent = value
    // ulEl.append(li)
    function render(leads) {
        let listItems = "";
        for (let value of leads) {
        listItems += `
        <li>
            <a href='${value}' target='_blank'> ${value} </a>
        </li>
        `
        
    }
    ulEl.innerHTML = listItems;
    }

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()//This clears the leads from local storage
    myLeads = []//This clears the leads from the array
    render(myLeads)//This clears the leads from the browser page
})
//THIS GETS THE VALUE FROM THE INPUT FIELD, WHEN THE BUTTON IS CLICKED, AND ADDS IT TO THE ARRAY
//The <input> element has a special value property that stores the user-entered data.
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "";//This clears the input field after the button is clicked
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) ;//This converts the array to a string
    render(myLeads) 
})





