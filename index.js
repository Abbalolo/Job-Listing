const language = document.querySelectorAll(".language");
const filterContainer = document.querySelector(".filter-container");
const clearBtn = document.querySelector(".clear-button")



function listing(languageName) {

    const outerContainer = document.createElement("div")
    outerContainer.classList.add("outer-container");
    filterContainer.appendChild(outerContainer)

    const searchItems = document.createElement("div")
    searchItems.classList.add("search-items");
    outerContainer.appendChild(searchItems)

    const clear = document.createElement("div")
    clear.classList.add("clear");
    clear.innerHTML = `<img class="trash"src="/images/icon-remove.svg">`;
    outerContainer.appendChild(clear)
    
    clear.addEventListener("click", (e) => {
        const item = e.target;
        if(item.classList[0] == "clear") {
            const langContainer = item.parentElement;
            langContainer.remove();
        }
        
    })
     
    const  items = document.createElement("li")
    items.classList.add("items")
    items.innerText = languageName
    searchItems.appendChild(items)

    
    // checkMach(programLang)




}

clearBtn.addEventListener("click", () => {
    filterContainer.style.display = "none"

})


     

function checkMach(languageName) {
    
}

function searchlang(languageName) {
   
}

 language.forEach(lang => {
    lang.addEventListener("click", (e) =>{
       filterContainer.style.display = "flex"
        const programLang = e.target.innerText;
        listing(programLang)
    })
 })
