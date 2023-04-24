
var totalGold = 0;
var attempt = 20;
var totalGains = 0;
var totalLosses = 0;

$('#log-container').hide();

$('.btn-secondary').click(function() {
    $('#log-container').toggle();
});

function generateGold(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateattempt() {
    attempt--;
    $('#attempts').text(attempt);
}

function updatetotalGold(value) {
    totalGold += value;
    $('#totalGold').text(totalGold);
  
    if (value >= 0) {
      totalGains += value;
    } else {
      totalLosses += value;
    }
  
    $('#totalGains').text(totalGains);
    $('#totalLosses').text(totalLosses);
  
    if (totalGold >= 250 && attempt === 0) {
      Message('Congratulations! You completed the game!', 'green');
    } else if (attempt === 0 && totalGold < 250) {
      Message('Game over! You ran out of attempts. Try Again.', 'red');
    }
  }
  
function Message(message, color) {
    console.log($('#message'));
    $('#message').text(message);
    $('#message').css('color', color);
}

let logCounter = 1;

function addToLog(time, location, gold) {
    let logEntry = `<p style="padding-left: 1rem;"><span style="font-weight: bold;">${logCounter}. Amount:</span> ${gold} <br><span style="font-weight: bold;">Time:</span> ${time} <br><span style="font-weight: bold;">Location:</span> ${location}</p><hr style="border-top: 1px solid gray;">`;
    $('#log-container').prepend(logEntry);
    logCounter++;
}
  
function resetGame() {
    attempt = 20;
    totalGold = 0;
    totalGains = 0;
    totalLosses = 0;
    $('#attempts').text(attempt);
    $('#totalGold').text(totalGold);
    $('#totalGains').text(totalGains);
    $('#totalLosses').text(totalLosses);
    $('#log-container').empty();
    $('#message').empty();
    logCounter = 1; // Reset logCounter variable
}

$('#cave').click(function() {
    if (attempt > 0) {
        let gold = 5;
        updateattempt();
        updatetotalGold(gold);
        addToLog( new Date().toLocaleTimeString(), 'Cave', gold);
        Message(`+You earned ${gold} gold from the Cave.`, 'green');
            } else {
                Message(`You ran out of attempts.`, 'red');
                if (totalGold >= 250 && attempt === 0) {
                    Message('Congratulations! You completed the game!', 'green');
                } else if (attempt === 0 && totalGold < 250) {
                    Message('Game over! You ran out of attempts. Try Again.', 'red');
                }
        }
});

$('#casino').click(function() {
    if (attempt > 0) {
        let gold = Math.random() < 0.5 ? generateGold(-50, -40) : generateGold(40, 50);
        updateattempt();
        updatetotalGold(gold);
        if (gold < 0) {
            addToLog( new Date().toLocaleTimeString(), 'Casino', gold);
            Message(`-You lost ${Math.abs(gold)} gold at the Casino.`, 'red');
        } else {
            addToLog( new Date().toLocaleTimeString(), 'Casino', gold);
            Message(`+You earned ${gold} gold from the Casino.`, 'green');
        }
            } else {
                Message(`You ran out of attempts.`, 'red');
            if (totalGold >= 250 && attempt === 0) {
                Message('Congratulations! You completed the game!', 'green');
            } else if (attempt === 0 && totalGold < 250) {
                Message('Game over! You ran out of attempts. Try Again.', 'red');
            }
        }
});

$('#house').click(function() {
    if (attempt > 0) {
        let gold = Math.random() < 0.8 ? 10 : 0;
        updateattempt();
        updatetotalGold(gold);
        addToLog( new Date().toLocaleTimeString(), 'House', gold);
        Message(`+You earned ${gold} gold from the House.`, 'green');
            } else {
                Message('You ran out of attempts.', 'red');
                if (totalGold >= 250 && attempt === 0) {
                    Message('Congratulations! You completed the game!', 'green');
                } else if (attempt === 0 && totalGold < 250) {
                    Message('Game over! You ran out of attempts. Try Again.', 'red');
                }
        }
});

$('#goldmine').click(function() {
    if (attempt > 0) {
        let gold = Math.random() < 0.8 ? generateGold(1, 25) : 0;
        updateattempt();
        updatetotalGold(gold);
        addToLog( new Date().toLocaleTimeString(), 'Goldmine', gold);
        Message(`+You earned ${gold} gold from the Goldmine.`, 'green');
            } else {
                Message(`You ran out of attempts.`, 'red');
                if (totalGold >= 250 && attempt === 0) {
                    Message('Congratulations! You completed the game!', 'green');
                } else if (attempt === 0 && totalGold < 250) {
                    Message('Game over! You ran out of attempts. Try Again.', 'red');
            }
        }
});

$("#cave").click(function(){
    $("#ninja").animate({marginLeft: "-450px", marginTop: "-100px"}, 500, function(){
    $(this).css({marginLeft: 0, marginTop: 0});
    });
    });

$("#casino").click(function(){
    $("#ninja").animate({marginLeft: "-100px", marginTop: "-100px"}, 500, function(){
    $(this).css({marginLeft: 0, marginTop: 0});
    });
    });  

$("#house").click(function(){
    $("#ninja").animate({marginLeft: "150px", marginTop: "-100px"}, 500, function(){
    $(this).css({marginLeft: 0, marginTop: 0});
    });
    });  

$("#goldmine").click(function(){
    $("#ninja").animate({marginRight: "-400px", marginTop: "-100px"}, 500, function(){
    $(this).css({marginRight: 0, marginTop: 0});
    });
    });

var logContainer = document.getElementById('log-container');

// Get the log button element
var logButton = document.getElementById('log-btn');

// Check if the modal was previously shown
var modalShown = localStorage.getItem('modalShown');

// If the modal was previously shown, show the log container and remove the fade class
if (modalShown === 'true') {
  logContainer.style.display = 'block';
  document.querySelector('.modal-backdrop').classList.remove('fade');
}

// Add an event listener to the log button
logButton.addEventListener('click', function () {
  // Show the log container and remove the fade class
  logContainer.style.display = 'block';
  document.querySelector('.modal-backdrop').classList.remove('fade');
  
  // Set the modalShown flag in localStorage to true
  localStorage.setItem('modalShown', 'true');
});

// Add an event listener to the modal hide event
$('#exampleModalCenter').on('hide.bs.modal', function (e) {
  // Set the modalShown flag in localStorage to false
  localStorage.setItem('modalShown', 'false');
});