let myLeads = ["www.awesomelead.com","www.epiclead.com","www.greatlead.com"];
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

//THIS GETS THE VALUE FROM THE INPUT FIELD, WHEN THE BUTTON IS CLICKED, AND ADDS IT TO THE ARRAY
//The <input> element has a special value property that stores the user-entered data.
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads) 
})

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
for (let value of myLeads) {
    ulEl.innerHTML += `
    <li>
        <a href='${value}' target='_blank'> ${value} </a>
    </li>
    `
    // const li = document.createElement("li") 
    // li.textContent = value
    // ulEl.append(li)
    
}


