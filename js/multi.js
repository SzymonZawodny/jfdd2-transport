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
  'main.function.delays.alt': 'Opóźnienia',
  'other.function.localization': 'Usługa lokalizacj',
  'other.function.localization.alt': 'Usługa lokalizacj',
  'other.function.avoid':'Unikaj przesiadek',
  'other.function.avoid.alt':'Unikaj przesiadek',
  'other.function.traffic':'Informacja drogowa',
  'other.function.traffic.alt':'Informacja drogowa',
  'other.function.bus':'Autobus',
  'other.function.bus.alt':'Autobus',
  'other.function.tram': 'Tramwaje',
  'other.function.tram.alt': 'Tramwaje',
  'other.function.train': 'Koleje',
  'other.function.train.alt': 'Koleje',


};
$('label').text(function ()  {
    return labels[this.id];
});

$('img').each(setAlt);

function  setAlt(imgElement) {

  imgElement.setAttribute('alt', labels[imgElement.id]);

}