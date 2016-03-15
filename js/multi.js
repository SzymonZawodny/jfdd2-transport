var labels = {
  'header.welcome.title': 'Z nami zawsze trafisz do celu',
  'header.welcome.button':'Dowiedz się więcej',
  'main.function.road': 'Wiesz gdzie chcesz dojechać, nie wiesz jak?',
  'main.function.road.alt': 'Zaplanuj podróż',
  'main.function.timetable': 'Sprawdź linię i jej rozkład',
  'main.function.timetable.alt': 'Rozkład jazdy',
  'main.function.busstop': 'Znasz przystanek, nie wiesz jaka linia?',
  'main.function.busstop.alt': 'Przystanki',
  'main.function.delays' : 'Sprawdź sytuację na drodze',
  'main.function.delays.alt' : 'Opóźnienia',


};

$('label').forEach(setLabel);

function setLabel(labelElement)  {

  labelElement.html(labels[labelElement.id]);
}