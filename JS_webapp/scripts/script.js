var myth = ['myth1','myht2', 'myht3','myht4' , 'myht5', 'myth6', 'myth 7'];
var fact = ['some facts 1','some facts 2', 'some facts 3','some facts 4', ' some facts 6 ', 'facts 7'];
var points = 0;
var gcount = 0;
var empty = [];
function game(guess) {
    while (gcount <= 3) {
        var rand_mf = myth[3];
        document.write(rand_mf);
        document.write('Myth or fact?');
        var guess = document.getElementById('guess').value;
        if (rand_mf in myth && guess == ('M' || 'm')) {
            points++;
            document.write('correct, it is a myth, you have ', points, 'points');
        }
        else if (rand_mf in fact && guess == ('F' || 'f')) {
            points++;
            document.write('correct, it is a fact, you have ', points, 'points');
        }
        else if (guess == '') {
            document.write('Please insert your answer');
        }
        else {
            document.write('Wrong answer');
            gcount++;
        }
    }
}
if(gcount>=3){
    document.write('You lost with', points, 'amount of points');
} else if(points>=10){
    document.write('You won!');
}