function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }else if (argMoveId == 2){
    return 'papier';
  }else if (argMoveId == 3){
    return 'nożyce';
  }else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
  }

function displayResult(argComputerMove, argPlayerMove){
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    return 'Ty wygrywasz!';
  }else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    return 'Przegrałeś !';
  }else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    return 'Przegrałeś !';
  }else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    return 'Ty wygrywasz!';
  }else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    return 'Przegrałeś !';
  }else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    return 'Ty wygrywasz!';
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);
let argComputerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
let argPlayerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + argPlayerMove);

let gameResult = displayResult(argComputerMove, argPlayerMove);
printMessage(gameResult);

