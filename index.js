const appSettings = {
    databaseURL: "https://playground-18915-default-rtdb.europe-west1.firebasedatabase.app/"
}
//When 'Add to cart' button is clicked, console log whatever is typed in input field
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    console.log(inputValue)
})