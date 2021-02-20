
//Function creates a timestamp
function maketimestamp(now){
    var hours = now.getHours(now)
    var minutes = now.getMinutes(now);
    hours = hours % 12;
    hours = hours != 0 ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var ampm = hours >= 12 ? 'pm' : 'am';
    timestamp = hours.toString() + ':' + minutes.toString() + ampm;
    return timestamp;
}


// Function applied on form to prevent a POST if input is invalid
function required() {
    var inputText = document.getElementById('glucoseInput');
    if (inputText.value.length == 0){
        event.preventDefault();
        alert("Please enter a value");
    }
    else if (isNaN(inputText.value)) {
        event.preventDefault();
        alert("Please enter a number")
    }
    else if (inputText.value < 0) {
        event.preventDefault();
        alert("Number must be a postive number");
    }
}





// exports functions/variables 
module.exports = { maketimestamp } 