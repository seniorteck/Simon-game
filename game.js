// alert('callingthefunction')

// $('button').hasClass('gree');



const buttonColours = ['green', 'red', 'yellow', 'blue'];

const randomChosenColour = buttonColours[nextSequence()];

const gamePattern = [].push(randomChosenColour)


// console.log(randomChosenColour);

function nextSequence() {
    let randomnumber = Math.floor(Math.random()*4);
    return randomnumber;
}

// const randomchecker = nextSequence();

// console.log(randomchecker);

$('')