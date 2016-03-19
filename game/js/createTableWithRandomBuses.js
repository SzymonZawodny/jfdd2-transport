var busesBuffer=[];
var busClass;
var $gameboard=$('.gameboard');
var howManyBuses, intervalNumber=0;

$(document).ready(function (){
  createArrayWithRandomBuses(100);
  createMultipleBuses(howManyBuses);
  busAnimation(0);
  busAnimation(1);
  busAnimation(2);
  busAnimation(3);
  busAnimation(4);
  busAnimation(5);
  setInterval(function(){
    busAnimation(6+6*intervalNumber);
    busAnimation(7+6*intervalNumber);
    busAnimation(8+6*intervalNumber);
    busAnimation(9+6*intervalNumber);
    busAnimation(10+6*intervalNumber);
    busAnimation(11+6*intervalNumber);
    intervalNumber+=1;
  },6000);
});

function createArrayWithRandomBuses(howManyBusesInBuffer){
  for (var busNo = 0; busNo<howManyBusesInBuffer; busNo+=1){
    var number=Math.random();
    if(number<0.5){
      busClass='busToOBC';
      busesBuffer.push(busClass);
    }
    else{
      busClass='busToNowhere';
      busesBuffer.push(busClass);
    }
  }
  howManyBuses=howManyBusesInBuffer;
}

function createMultipleBuses(numberOfBuses) {
  var arrayItem;
  for (arrayItem = 0; arrayItem < numberOfBuses; arrayItem += 1) {
    var divClass = busesBuffer[0];
    busesBuffer.splice(0, 1);
    var $bus = $('<div>')
        .addClass(divClass)
        .addClass('bus')
        .css({top: 140 * (arrayItem + 1), left: '50px'});
    $gameboard.append($bus);
  }
}

function busAnimation(indexInTheBuffer){
  var initialMargin=0;
  var distanceTarget=200;
  var distanceDone=0;
  var speed=8;
  var approachTime=(distanceTarget+initialMargin)*speed;
  var stopTime=(Math.random()*3)*1000;
  var delayTime=(Math.random()*2)*1000;
  setTimeout(function(){


  var intervalBusApproach = setInterval(function(){
    $('.bus').eq(indexInTheBuffer).css('margin-left','+=1px');
    distanceDone+=1;
    if(distanceDone===initialMargin+distanceTarget){
      clearInterval(intervalBusApproach);
    }
  },speed);
  },delayTime);
  setTimeout(function(){
    var intervalBusDeparture = setInterval(function(){
      $('.bus').eq(indexInTheBuffer).css('margin-left','+=1px');
      distanceDone+=1;
      if(distanceDone===760){
        clearInterval(intervalBusDeparture);
      }
    },speed);
  },delayTime+approachTime+stopTime);
}





//var busesBuffer=[];
//var busClass;
//var $gameboard=$('.gameboard');
//var $busesSmallBuffer;
//
//$(document).ready(function (){
//  createArrayWithRandomBuses(100);
//  createMultipleBusesAndRemoveThemFromArray(5);
//  busAnimation();
//});
//
//function createArrayWithRandomBuses(howManyBusesInBuffer){
//  for (var busNo = 0; busNo<howManyBusesInBuffer; busNo+=1){
//    var number=Math.random();
//    if(number<0.5){
//      busClass='busToOBC';
//      busesBuffer.push(busClass);
//    }
//    else{
//      busClass='busToNowhere';
//      busesBuffer.push(busClass);
//    }
//  }
//}
//
//function createMultipleBusesAndRemoveThemFromArray(numberOfBuses){
//  var arrayItem;
//  for (arrayItem=0;arrayItem<numberOfBuses;arrayItem+=1){
//    var divClass=busesBuffer[0];
//    busesBuffer.splice(0,1);
//    var $bus = $('<div>')
//      .addClass(divClass)
//      .addClass('bus')
//      .addClass('bus'+arrayItem)
//      .css({top:100*(arrayItem+1), left:'50px'});
//    $gameboard.append($bus);
//  }
//  $busesSmallBuffer= $('.bus');
//}
//
//function busAnimation(){
//  var initialMargin=0;
//  var distanceTarget=200;
//  var distanceDone=0;
//  var speed=10;
//  var approachTime=(distanceTarget+initialMargin)*speed;
//  var stopTime=(Math.random()*3)*1000+500;
//
//  var intervalBusApproach = setInterval(function(){
//    $('.bus1').css('margin-left','+=1px');
//    distanceDone+=1;
//    if(distanceDone===initialMargin+distanceTarget){
//      clearInterval(intervalBusApproach);
//    }
//  },speed);
//
//  setTimeout(function(){
//    var intervalBusDeparture = setInterval(function(){
//      $('.bus1').css('margin-left','+=1px');
//      distanceDone+=1;
//      if(distanceDone===700){
//        clearInterval(intervalBusDeparture);
//      }
//    },speed);
//  },approachTime+stopTime);
//}
//

//
//function busAnimation(){
//  var initialMargin=0;
//  var distanceTarget=200;
//  var distanceDone=0;
//  var speed=10;
//  var approachTime=(distanceTarget+initialMargin)*speed;
//  var stopTime=(Math.random()*3)*1000+500;
//  var busArrivalIntervals = {};
//
//
//  for(var numberOfBusInTheSmallBuffer=0;
//      numberOfBusInTheSmallBuffer<$busesSmallBuffer.length;
//      numberOfBusInTheSmallBuffer+=1){
//    busArrivalIntervals[numberOfBusInTheSmallBuffer] = setInterval(function(item){
//
//      $busesSmallBuffer[item].css('margin-left','+=1px');
//      distanceDone+=1;
//      if(distanceDone===initialMargin+distanceTarget){
//        clearInterval(busArrivalIntervals[item]);
//      }
//    },speed,numberOfBusInTheSmallBuffer);
//
//    setTimeout(function(){
//      var intervalBusDeparture = setInterval(function(){
//        $busesSmallBuffer[numberOfBusInTheSmallBuffer].css('margin-left','+=1px');
//        distanceDone+=1;
//        if(distanceDone===700){
//          clearInterval(intervalBusDeparture);
//        }
//      },speed);
//    },approachTime+stopTime);
//  }
//};