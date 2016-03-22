var busesBuffer = [];
var busClass;
var $buses = $('.buses');
var howManyBuses, intervalNumber = 0;
var score = 0, time;
var list = [];
var ids = [];

$('.button').click(function () {
  $('.button').css('visibility','hidden');
  $('.gameboard').css('-webkit-filter','none');
  createArrayWithRandomBuses(100);
  createSpansWithBuses(howManyBuses);
  counter(3);
  busAnimation(0, 450);
  busAnimation(1, 700);
  busAnimation(2, 550);
  busAnimation(3, 730);
  busAnimation(4, 340);
  busAnimation(5, 540);
  ids.push(setInterval(function () {
    busAnimation(6 + 6 * intervalNumber, 450);
    busAnimation(7 + 6 * intervalNumber, 700);
    busAnimation(8 + 6 * intervalNumber, 550);
    busAnimation(9 + 6 * intervalNumber, 730);
    busAnimation(10 + 6 * intervalNumber, 340);
    busAnimation(11 + 6 * intervalNumber, 540);
    intervalNumber += 1;
  }, 7000));
});

function counter(howManySeconds) {
  for (var numberOfSeconds = howManySeconds; numberOfSeconds > -1; numberOfSeconds -= 1) {
    list.push(numberOfSeconds);
  }
  for (var x in list) {
    ids.push(setTimeout(function (a) {
      time = howManySeconds - a;
      $('.remainingTime').html(time);
      if (time === 0) {
        ids.forEach(function (index) {
          clearInterval(index);
          clearTimeout(index);
        });
        ids = [];
        $('.your-score').html(score);
        $('.gameboard').css('-webkit-filter','grayscale(100%)');
        $('.game-over').css('visibility','visible');
      }
    }, 1000 * x, x));
  }
}

function createArrayWithRandomBuses(howManyBusesInBuffer) {
  for (var busNo = 0; busNo < howManyBusesInBuffer; busNo += 1) {
    var number = Math.random();
    if (number < 0.5) {
      busClass = 'busToOBC';
      busesBuffer.push(busClass);
    }
    else {
      busClass = 'busToNowhere';
      busesBuffer.push(busClass);
    }
  }
  howManyBuses = howManyBusesInBuffer;
}

function createSpansWithBuses(numberOfBuses) {
  var arrayItem;
  var classes = ['track1', 'track2', 'track3', 'track4', 'track5', 'track6'];
  for (arrayItem = 0; arrayItem < numberOfBuses; arrayItem += 1) {
    var divClass = busesBuffer[arrayItem];
    var $bus = $('<span>')
      .addClass(divClass)
      .addClass('bus busBeforeDeparture')
      .addClass(classes[arrayItem % 6])
      .css({left: '-250px'});
    $buses.append($bus);
  }
}

function busAnimation(indexInTheBuffer, busStopDistance) {
  var initialMargin = 0;
  var distanceTarget = busStopDistance;
  var distanceDone = 0;
  var speed = 16;
  var approachTime = (distanceTarget + initialMargin) * speed / 2;
  var stopTime = 2000;
  var delayTime = (Math.random() * 2) * 1000;

  ids.push(setTimeout(function () { //ARRIVAL
    var intervalBusApproach = setInterval(function () {
      $('.bus').eq(indexInTheBuffer).css('margin-left', '+=2px');
      distanceDone += 2;
      if (distanceDone === initialMargin + distanceTarget) {
        clearInterval(intervalBusApproach);
      }
    }, speed);
    ids.push(intervalBusApproach);
  }, delayTime));

  ids.push(setTimeout(function () { // COUNTING POINTS DURING STOP
    $('.bus').eq(indexInTheBuffer).click(function () {
      if ($('.bus').eq(indexInTheBuffer).hasClass('busToOBC')
        && $('.bus').eq(indexInTheBuffer).hasClass('busBeforeDeparture')) {
        score += 1;
      }
      else if ($('.bus').eq(indexInTheBuffer).hasClass('busToNowhere')
        && $('.bus').eq(indexInTheBuffer).hasClass('busBeforeDeparture')) {
        score -= 10;
      }
      $('.actualScore').html(score);
    });
  }, delayTime + approachTime));

  ids.push(setTimeout(function () { // DEPARTURE
    $('.bus').eq(indexInTheBuffer).removeClass('busBeforeDeparture');
    var intervalBusDeparture = setInterval(function () {
      $('.bus').eq(indexInTheBuffer).css('margin-left', '+=2px');
      distanceDone += 2;
      if (distanceDone === 1100) {
        clearInterval(intervalBusDeparture);
      }
    }, speed);
    ids.push(intervalBusDeparture);
  }, delayTime + approachTime + stopTime));
}