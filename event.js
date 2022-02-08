// system-1: here we will decliar a function to change page color for onclick button
function makeCyan(){
    document.body.style.backgroundColor='cyan';
}
// system-2: function for making text red (For text)
function makeTextPink(){
    document.body.style.color='pink';
}
function makeLightBlue(){
    document.body.style.backgroundColor='lightblue';
}
// system-3: here we will call by id and use onclick


// step - 1: call by id and store in a variable/constant
const grayButton = document.getElementById('lightGray');
// step - 2: set the name of the function using onclick
grayButton.onclick = makeGray;
// step -3: set the function that will change color. It can be decliared previously or i can decliar it now.
function makeGray(){
    document.body.style.backgroundColor='lightgray';
}

// for lightblue button
const lightBlue = document.getElementById('lightBlue');
lightBlue.onclick = makeLightBlue;
