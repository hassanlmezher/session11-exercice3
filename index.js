// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let errorP = document.getElementById('error');


function wrong() {
    errorP.innerText = "Something went wrong, please try again";
}