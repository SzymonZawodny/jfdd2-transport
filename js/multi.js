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
  'contact.form.h2':'Dane kontaktowe:',
  'contact.form.logo':'KoLiber',
  'contact.form.description':'ul. Kolibrowa 400c<br><br>80-999 Kolibrowo<br><br>Koliber Business Centre (10. piętro)<br><br>tel. +48 999 999 999<br><br>email: biuro@koliber.pl',
  'contact.form.label':'Zainteresowała Cię nasza aplikacja?',
  'contact.form.label.small':'Napisz do nas, a poinformujemy Cię, gdy wystartujemy z działającą wersją.',
  'contact.telephone':'Telefon:',
  'contact.email':'Adres email:',
  'contact.text':'Tekst wiadomości:',
  'contact.text.placeholder':'Masz jakieś sugestie? Chcesz przekazać nam swoją wiadomość? Napisz.',
  //'contact.send':'Wyślij',
  'szymon1':'Miłośnik podróżowania<br><br>',
  'szymon2':'Żeglarz<br><br>',
  'szymon3':'Backpacker<br><br>',
  'szymon4':'Otwarty na świat<br><br>',
  'szymon5':'Fan piłki nożnej<br><br>',
  'szymon6':'Lubi nowe technologie<br><br>',
  'szymon7':'Wielbiciel indyjskiej kuchni<br><br>',
  'dominik1':'Uśmiechnięty<br><br>',
  'dominik2':'Zwolennik Agile<br><br>',
  'dominik3':'Lubi wyzwania<br><br>',
  'dominik4':'Fan nowych technologii<br><br>',
  'dominik5':'Pasjonat piłki ręcznej i karate<br><br>',
  'dominik6':'Miłośnik wolności<br><br>',
  'dominik7':'Otwarty na świat i ludzi<br><br>',
  'mateusz1':'Życiowy optymista<br><br>',
  'mateusz2':'Biegacz<br><br>',
  'mateusz3':'Zdrowy perfekcjonista<br><br>',
  'mateusz4':'Planista<br><br>',
  'mateusz5':'Miłośnik technologii<br><br>',
  'mateusz6':'Wielbiciel map<br><br>',
  'mateusz7':'Pilot<br><br>',
  'contact.text.placeholder':'Masz jakieś sugestie? Chcesz przekazać nam swoją wiadomość?Napisz.',


  };

$(document).ready(function() {

  function setLanguage() {
    $('label').html(function ()  {
      return labels[this.id];
    });

    $('img').each(function(index, element) {
      element.setAttribute('alt', labels[element.id]);
    });
  }

  setLanguage();

});





