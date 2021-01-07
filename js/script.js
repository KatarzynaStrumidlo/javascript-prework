function playGame (playerInput){
  clearMessages();
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
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  let argComputerMove = getMoveName(randomNumber);
  printMessage('Mój ruch to: ' + argComputerMove);
  console.log('Gracz wpisał: ' + playerInput);
  let argPlayerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + argPlayerMove);

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
  let gameResult = displayResult(argComputerMove, argPlayerMove);
  printMessage(gameResult);
}
document.getElementById('play-rock').addEventListener('click', playGame(1));
document.getElementById('play-paper').addEventListener('click', playGame(2));
document.getElementById('play-scissors').addEventListener('click', playGame(3));



