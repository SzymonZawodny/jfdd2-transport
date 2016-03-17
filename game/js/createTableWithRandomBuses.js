var busesBuffer=[];
var busClass;
var $gameboard=$('.gameboard');

$(document).ready(function (){
  createArrayWithRandomBuses(100);
  createMultipleBusesAndRemoveThemFromArray(5);
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
}

function createMultipleBusesAndRemoveThemFromArray(numberOfBuses){
  var arrayItem;
  for (arrayItem=0;arrayItem<numberOfBuses;arrayItem+=1){
    var divClass=busesBuffer[0];
    busesBuffer.splice(0,1);
    var $bus = $('<div>').addClass(divClass).addClass('bus')
      .css({top:100*(arrayItem+1), left:'50px'});
    $gameboard.append($bus);
  }
}