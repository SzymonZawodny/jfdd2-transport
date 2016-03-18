var labels = {
  'header.welcome.title': 'Z nami zawsze trafisz do celu',
  'header.welcome.button':'Dowiedz się więcej',
  'main.function.road': 'Wiesz gdzie chcesz dojechać, nie wiesz jak?',
  'main.function.road.alt': 'Zaplanuj podróż',
  'main.function.timetable': 'Sprawdź linię i jej rozkład',
  'main.function.timetable.alt': 'Rozkład jazdy',
  'main.function.busStop': 'Znasz przystanek, nie wiesz jaka linia?',
  'main.function.busStop.alt': 'Przystanki',
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
  'product.description.text.clock.h1': 'Z aplikacją KoLiber zawsze wiesz, kiedy przyjedzie twój transport!',
  'product.description.text.clock.h3': 'Wystarczy spojrzenie na aplikację i wiesz ile czasu Ci jeszcze zostało.',
  'product.description.text.calendar.h1':'Zaplanuj swoją podróż!',
  'product.description.text.calendar.h3':'Zaplanuj godzinę odjazdu i przystanku do punktu docelowego. Z nami unikniesz rozczarowań!',
  'product.description.text.cloud.h1':'Aplikacja KoLiber poinformuje Cię o utrudnieniach w ruchu.',
  'product.description.text.cloud.h3':'Dzięki danym w trybie real time zawsze masz dostęp do aktualnych informacji.',
  'contact.button.text':'Skontaktuj się z nami',
  
};

$('label').text(function ()  {
    return labels[this.id];
});

$('img').each(setAlt);

function  setAlt(imgElement) {

  imgElement.setAttribute('alt', labels[imgElement.id]);

}