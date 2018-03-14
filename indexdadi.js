var firstplayer = Math.floor((Math.random() * 6) + 1);
var secondplayer = Math.floor((Math.random() * 6) + 1);
var firstgame = 1
var secondgame = 5

document.write (firstplayer);
document.write (secondplayer);

    if (firstplayer > secondplayer) {
        result = " firstplayer win!";
    } else if (firstplayer == secondplayer) {
        result = "Pareggio!";
    } else {
        result = "second player win!";
    }
document.write (result);
