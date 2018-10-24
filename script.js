//create button and add to page
let button = document.createElement("button");
let buttonText = document.createTextNode("Add Square");
let containerDiv = document.createElement('div');
button.appendChild(buttonText);
document.body.appendChild(button);
document.body.appendChild(containerDiv);

//click event
button.addEventListener('click', function () {
    divAdd()
});

id = 0;

//funciton to add square to page
function divAdd() {
    let squareDiv = document.createElement('div');
    // let squareID = document.childElementCount.
    squareDiv.className = 'squareDiv';
    squareDiv.style.backgroundColor = 'black';
    squareDiv.style.horizonalAlign = 'center'
    squareDiv.style.width = '7em';
    squareDiv.style.height = '7em';
    squareDiv.setAttribute('id', id);
    id++;
    document.body.appendChild(squareDiv);


    //event to change color
    squareDiv.addEventListener('click', function () {
        squareDiv.style.backgroundColor = randomColor();
    });

    squareDiv.addEventListener('mouseover', function () {
        let squareID = document.createTextNode(this.id);
        squareDiv.append(squareID);

    });

    squareDiv.addEventListener('mouseout', function () {
        squareDiv.innerText = "  ";

    });

};

//random colors function
function randomColor() {
    let colors = ['white','red' ];
    let randomNumber = Math.floor((Math.random() * colors.length) + 0);
    return colors[randomNumber];
};
