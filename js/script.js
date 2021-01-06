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
  if( argcomputerMove == 'kamień' && argplayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
  if( argcomputerMove == 'kamień' && argplayerMove == 'nożyce'){
    printMessage('Przegrałeś !');
  }
  if( argcomputerMove == 'papier' && argplayerMove == 'kamień'){
    printMessage('Przegrałeś !');
  }
  if( argcomputerMove == 'papier' && argplayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }
  if( argcomputerMove == 'nożyce' && argplayerMove == 'papier'){
    printMessage('Przegrałeś !');
  }
  if( argcomputerMove == 'nożyce' && argplayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);
let argcomputerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + argcomputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
let argplayerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + argplayerMove);

displayResult(argcomputerMove, argplayerMove);

