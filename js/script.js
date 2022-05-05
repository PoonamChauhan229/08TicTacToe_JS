var gameContainer = document.getElementById('gameContainer')
var playerName = document.getElementById('enterPlayer')
var undoResetButton = document.getElementById('undoResetButton');
var player1 = document.getElementById('player1')
var player2 = document.getElementById('player2')


var winnerDisplay = document.getElementById('winnerDisplay')

var currentId;
count = 0;
list = [0, 1, 0, 1, 0, 1, 0, 1, 0]



document.getElementById('button').addEventListener("click", function (event) {

    if (player1.value == null) {
        alert("Enter the Player Names")
        playerName.style.display = "block";
        gameContainer.style.display = "none";

    }
    else{
    playerName.style.display = "none";
    gameContainer.style.display = "block";
    console.log(event.target)
    console.log(player1.value)
    console.log(player2.value)
    undoResetButton.style.display = "block"
    // winnerDisplay.style.backgroundColor="black";
}

})

document.getElementById('gameContainer').addEventListener("click", function (event) {
    console.log(event.target)
    console.log(event.target.id)

    if (list[event.target.id] == 0 || list[event.target.id] == 1) {
        count++;
        console.log(count)
        currentId = event.target.id
        console.log(currentId)

        if (count % 2 == 0) {
            event.target.innerHTML = "O"
            list[event.target.id] = "O"
            console.log(player2.value)


        }
        else {
            event.target.innerHTML = "X"
            list[event.target.id] = "X"
            console.log(player1.value)

        }
    }
    console.log(list)


    if (count >= 5) {
        checkWinner()

    }

})

function checkWinner() {
    //row
    if (list[0] == list[1] && list[1] == list[2] || list[3] == list[4] && list[4] == list[5] || list[6] == list[7] && list[7] == list[8]) {
        if (count % 2 == 0) {
            document.getElementById('winnerDisplay').innerHTML = `${player2.value} Winner`;
            // alert(player2.value) 
        }
        else {
            document.getElementById('winnerDisplay').innerHTML = `${player1.value} Winner`;
            //alert(player1.value);

        }

        //apply color
        if (list[0] == list[1] && list[1] == list[2]) {
            applyColor(0, 1, 2)
        }
        else if (list[3] == list[4] && list[4] == list[5]) {
            applyColor(3, 4, 5)
        }
        else {
            applyColor(6, 7, 8)
        }

        notEdit()

    }
    //column
    if (list[0] == list[3] && list[3] == list[6] || list[1] == list[4] && list[4] == list[7] || list[2] == list[5] && list[5] == list[8]) {
        if (count % 2 == 0) {
            //alert(player2.value+" Winner") 
            document.getElementById('winnerDisplay').innerHTML = `${player2.value} Winner`;

        }
        else {
            document.getElementById('winnerDisplay').innerHTML = `${player1.value} Winner`;
            //alert(player1.value+" Winner");}


        }
        //apply color
        if (list[0] == list[3] && list[3] == list[6]) {
            applyColor(0, 3, 6)
        }
        else if (list[1] == list[4] && list[4] == list[7]) {
            applyColor(1, 4, 7)
        }
        else {
            applyColor(2, 5, 8)
        }

        notEdit()
    }
    //diagonal
    if (list[0] == list[4] && list[4] == list[8] || list[2] == list[4] && list[4] == list[6]) {
        if (count % 2 == 0) {
            //alert(player2.value+" Winner")
            document.getElementById('winnerDisplay').innerHTML = `${player2.value} Winner`;

        }
        else {
            document.getElementById('winnerDisplay').innerHTML = `${player1.value} Winner`;
            //alert(player1.value+" Winner");

        }
        //apply color
        if (list[0] == list[4] && list[4] == list[8]) {
            applyColor(0, 4, 8)
        }
        else {
            applyColor(2, 4, 6)
        }
        notEdit()
    }


}


function undo() {
    list[currentId] = 0;
    count--;
    document.getElementById(currentId).innerHTML = "";
    winnerDisplay.innerHTML = "";
    console.log(document.querySelectorAll('.box'));
    var box = document.querySelectorAll('.box').length;
    for (i = 0; i < box; i++) {
        document.getElementById(i).style.backgroundColor = "";
    }
}

function reset() {
    list = [0, 1, 0, 1, 0, 1, 0, 1, 0]
    count = 0;
    console.log(list);
    for (var i = 0; i < list.length; i++) {
        console.log(i)
        document.getElementById(i).innerHTML = "";
        document.getElementById(i).style.backgroundColor = "";
    }
    console.log(list);
    winnerDisplay.innerHTML = "";

}

function applyColor(...arguments) {
    console.log(arguments)
    for (i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).style.backgroundColor = 'lightblue';
    }
}

function notEdit() {
    console.log(list)
    for (i = 0; i < list.length; i++) {
        console.log(list[i])
        console.log(isNaN(list[i]))
        if (isNaN(list[i]) == false) {
            list[i] = "NA"
        }
    }
}
// notEdit()

// function notAllowed() {
//     if (winnerDisplay.innerHTML === `${player1.value} Winner` && count >5) {
//         count
//         console.log(winnerDisplay.innerHTML);
//         alert("not allowed")
//         console.log(currentId)
//         console.log(count)
//         //document.getElementById(currentId).innerHTML = "";

//     }
//     else if (winnerDisplay.innerHTML ===`${player2.value} Winner` && count >5) {
//         count--;
//         console.log(winnerDisplay.innerHTML);
//         alert("not allowed")
//         console.log(currentId)
//         console.log(count)
//         // document.getElementById(currentId).innerHTML = "";
//     }

// }
