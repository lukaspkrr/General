var cont = 0;
var roundValues = [];

function rollDice() {
    if (!$('#buttonRoll').hasClass('choose')) {
        for (var w = 0; w <= 13; w++) {
            $('#choice' + (w + 1)).removeClass('hold');
            $('#imagemZerar' + (w + 1)).parent().addClass('hide');
        }
        if (!$('#buttonRoll').hasClass('again')) {
            for (var x = 0; x <= 4; x++) {
                if (!$('#dice' + (x + 1)).hasClass('hold')) {
                    let num = Math.floor(Math.random() * 6) + 1;
                    $('#dice' + (x + 1)).attr('src', 'partials/img/diceRoll' + num + '.png');
                    roundValues[x] = num;
                }
            }
            cont++;
            checkPlays(cont);
        } else {
            $('#buttonRoll').removeClass('again');
            $("#buttonRoll").attr('value', 'Rolar Dados');
            for (var x = 1; x <= 5; x++) {
                if (x <= 3) {
                    $('#played' + x).addClass('hide');
                }
                $('#dice' + x).removeClass('hold');
                $('#dice' + x).attr('src', 'partials/img/logo.png');
            }
            cont = 0;
        }
    } else {
        alert('Você precisa escolher uma jogada');
    }
};

function hold(id) {
    if (cont !== 0) {
        if ($('#' + id).hasClass('hold')) {
            $('#' + id).removeClass('hold');
        } else {
            $('#' + id).addClass('hold');
        }
    }
}

function checkPlays(cont) {
    for (var x = 1; x <= 3; x++) {
        if (cont === x) {
            $('#played' + x).removeClass('hide');
            choiceOption();
            break;
        } else if (cont === 3) {
            $('#buttonRoll').addClass('choose');
            $('#buttonRoll').addClass('again');
            $("#buttonRoll").attr('value', 'Jogar novamente');
        }
    }
}

function choice(choice) {
        if (!$('#' + choice).hasClass('check') && $('#' + choice).hasClass('hold')) {
            $('#' + choice).addClass('check');
            finishPlay();
        }
}

function cleanOption (num){
    $('#choice'+num).addClass('check');
    finishPlay();
}

function choiceOption() {
    var trinca = 0,
        quadra = 0,
        fh2 = 0,
        fh3 = 0,
        general = 0,
        one = 0,
        two = 0,
        three = 0,
        four = 0,
        five = 0,
        six = 0;
    var sides = countSides();
    for (var w = 0; w <= 5; w++) {
        if (!$('#choice' + (w + 1)).hasClass('check')) {
            if (sides[w] != 0) {
                $('#choice' + (w + 1)).addClass('hold');
            }
        }
        if (sides[w] === 1 && w === 0) one++;
        if (sides[w] === 1 && w === 1) two++;
        if (sides[w] === 1 && w === 2) three++;
        if (sides[w] === 1 && w === 3) four++;
        if (sides[w] === 1 && w === 4) five++;
        if (sides[w] === 1 && w === 5) six++;
        if (sides[w] === 2) fh2++;
        if (sides[w] === 3) {
            trinca++;
            fh3++;
        };
        if (sides[w] === 4) quadra++;
        if (sides[w] === 5) general++;
    }

    if (!$('#choice7').hasClass('check')) {
        if (trinca === 1 || quadra === 1) {
            $('#choice7').addClass('hold');
        }
    }
    if (!$('#choice8').hasClass('check')) {
        if (quadra === 1) {
            $('#choice8').addClass('hold');
        }
    }
    if (!$('#choice9').hasClass('check')) {
        if (fh2 === 1 && fh3 === 1) {
            $('#choice9').addClass('hold');
        }
    }
    if (!$('#choice10').hasClass('check')) {
        if (one === 1 && two === 1 && three === 1 && four === 1 && five === 1) {
            $('#choice10').addClass('hold');
        }
    }
    if (!$('#choice11').hasClass('check')) {
        if (two === 1 && three === 1 && four === 1 && five === 1 && six === 1) {
            $('#choice11').addClass('hold');
        }
    }
    if (!$('#choice12').hasClass('check')) {
        if (general === 1) {
            $('#choice12').addClass('hold');
        }
    }
    if (!$('#choice13').hasClass('check')) {
        $('#choice13').addClass('hold');
    }
    $('#choice14').addClass('hold');
    for (var w = 0; w <= 12; w++) {
        if (!$('#choice' + (w + 1)).hasClass('check')){
        $('#imagemZerar' + (w + 1)).parent().removeClass('hide');
            }
    }
}

function countSides() {
    var choice1 = 0,
        choice2 = 0,
        choice3 = 0,
        choice4 = 0,
        choice5 = 0,
        choice6 = 0,
        choice7 = 0,
        choice8 = 0,
        choice9 = 0,
        choice10 = 0,
        choice11 = 0,
        choice12 = 0,
        choice13 = 0;
    var diceSide = [0, 0, 0, 0, 0, 0];
    for (var x = 0; x < roundValues.length; x++) {
        if (roundValues[x] === 1) {
            choice1++;
            diceSide[0] = choice1;
        } else if (roundValues[x] === 2) {
            choice2++;
            diceSide[1] = choice2;
        } else if (roundValues[x] === 3) {
            choice3++;
            diceSide[2] = choice3;
        } else if (roundValues[x] === 4) {
            choice4++;
            diceSide[3] = choice4;
        } else if (roundValues[x] === 5) {
            choice5++;
            diceSide[4] = choice5;
        } else if (roundValues[x] === 6) {
            choice6++;
            diceSide[5] = choice6;
        }
    }
    return diceSide;
}

function finishPlay() {
    for (var w = 0; w <= 13; w++) {
        $('#choice' + (w + 1)).removeClass('hold');
        $('#imagemZerar' + (w + 1)).parent().addClass('hide');
    }
    $('#buttonRoll').removeClass('again');
    $("#buttonRoll").attr('value', 'Rolar Dados');
    for (var x = 1; x <= 5; x++) {
        if (x <= 3) {
            $('#played' + x).addClass('hide');
        }
        $('#dice' + x).removeClass('hold');
        $('#dice' + x).attr('src', 'partials/img/logo.png');
    }

    $('#buttonRoll').removeClass('choose');
    cont = 0;
}
