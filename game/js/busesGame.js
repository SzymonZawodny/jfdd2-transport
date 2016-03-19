var busesBuffer=[];
var busClass;
var $buses=$('.buses');
var howManyBuses, intervalNumber=0;
var score=0, time;

$(document).ready(function (){
  createArrayWithRandomBuses(100);
  createSpansWithBuses(howManyBuses);
  busAnimation(0,450);
  busAnimation(1,700);
  busAnimation(2,550);
  busAnimation(3,730);
  busAnimation(4,340);
  busAnimation(5,540);
  setInterval(function(){
    busAnimation(6+6*intervalNumber,450);
    busAnimation(7+6*intervalNumber,700);
    busAnimation(8+6*intervalNumber,550);
    busAnimation(9+6*intervalNumber,730);
    busAnimation(10+6*intervalNumber,340);
    busAnimation(11+6*intervalNumber,540);
    intervalNumber+=1;
  },7000);
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

function createSpansWithBuses(numberOfBuses) {
  var arrayItem;
  for (arrayItem = 0; arrayItem < numberOfBuses; arrayItem += 1) {
    var divClass = busesBuffer[arrayItem];
    var $bus = $('<span>')
        .addClass(divClass)
        .addClass('bus')
        .css({top:140*(arrayItem+1), left: '-250px'});
    $buses.append($bus);
  }
  //TODO divide buses in lines
  //$('.buses:nth-child(2n)').css({top:'280px'});
  //$('.buses:nth-child(3n)').css({top:'420px'});
  //$('.buses:nth-child(4n)').css({top:'560px'});
  //$('.buses:nth-child(5n)').css({top:'700px'});
  //$('.buses:nth-child(6n)').css({top:'840px'});
}

function busAnimation(indexInTheBuffer,busStopDistance){
  var initialMargin=0;
  var distanceTarget=busStopDistance;
  var distanceDone=0;
  var speed=16;
  var approachTime=(distanceTarget+initialMargin)*speed/2;
  var stopTime=2000;
  var delayTime=(Math.random()*2)*1000;

  setTimeout(function(){ //ARRIVAL
  var intervalBusApproach = setInterval(function(){
    $('.bus').eq(indexInTheBuffer).css('margin-left','+=2px');
    distanceDone+=2;
    if(distanceDone===initialMargin+distanceTarget){
      clearInterval(intervalBusApproach);
    }
  },speed);
  },delayTime);

  setTimeout(function(){ //TODO score count during stop
    $('.bus').eq(indexInTheBuffer).click(function(){
      if($('.bus').eq(indexInTheBuffer).hasClass('busToOBC')){
        score+=1;
      }
      else if($('.bus').eq(indexInTheBuffer).hasClass('busToNowhere')) {
        score -= 10;
      }
      $('.actualScore').html(score);
    });
  },delayTime+approachTime);

  setTimeout(function(){ // DEPARTURE
    var intervalBusDeparture = setInterval(function(){
      $('.bus').eq(indexInTheBuffer).css('margin-left','+=2px');
      distanceDone+=2;
      if(distanceDone===1100){
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