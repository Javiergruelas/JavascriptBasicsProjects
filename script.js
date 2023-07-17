
// Color Change Buttons
const button = document.querySelector("button");
const textButton = document.getElementById("textChange");
const changeBackgroundColor = () => {
    // utilize math to generate a random number to add to the color value.
    const colorValue = Math.floor(Math.random()* 0xffffff).toString(16);
    //Setting the background color to the randomly generated value!
    document.body.style.background = `#${colorValue}`;
}
const changeTextColor = () => {
    // utilize math to generate a random number to add to the color value.
    const colorValue = Math.floor(Math.random()* 0xffffff).toString(16);
    //Setting the background color to the randomly generated value!
    document.body.style.color = `#${colorValue}`;
}

    //Tying the onclick to the background change!
    button.addEventListener("click", changeBackgroundColor);
    textButton.addEventListener("click", changeTextColor);

// *************************************************************************************************


// Character Counter Section:
// retrive the text and character count elements 
let textArea = document.getElementById("textbox");
let characterCounter = document.getElementById("char_count");
const maxNumOfChars = 150;

// count the remaining characters and update the counter
const countCharacters = () => {
    let numOfEnteredChars = textArea.value.length;
    let counter = numOfEnteredChars;
    characterCounter.textContent = counter + "/150";
    if (counter > 150) {
        characterCounter.style.color = "red";
    } else if (counter >= 120) {
        characterCounter.style.color = "orange";
    } else {
        characterCounter.style.color = "black";
    }
};

let char = document.getElementById('char');
        let word = document.getElementById('word');
  
        textArea.addEventListener('input', function () {
            // count characters 
            let content = this.value;
            char.textContent = content.length;
  
            // remove empty spaces from start and end 
            content.trim();
            console.log(content);
  
            let wordList = content.split(/\s/);
  
            // Remove spaces from between words 
            let words = wordList.filter(function (element) {
                return element != "";
            });
  
            // count words 
            word.textContent = words.length;
        });

// add input functionality 
textArea.addEventListener("input", countCharacters);

//*****************************************************************************************************

// to do list section 
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Enter Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt">x</i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}


// ***************************************************************************************
// calculator section 

// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
//**************************************************************************************************