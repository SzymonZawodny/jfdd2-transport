//var translations = undefined;

$(document).ready(function() {


  //translations = translatePolish;

  function setLanguage(translations) {
    $('label').html(function ()  {
      return translations.labels[$(this).attr('i18n')];
    });

    $('img').each(function() {
      $(this).attr('alt', translations.labels[$(this).attr('i18n')]);
    });

    $('.hasPlaceholder').each(function() {
      $(this).attr('placeholder', translations.placeholders[$(this).attr('i18n')]);
    })
  }


  function checkLanguage() {
    if (navigator.language === 'pl') {
      setLanguage(translatePolish);
    } else {
      setLanguage(translateEnglish);
    }
  }

  checkLanguage();

  $(".translation").click(function(){
    var img = $(this);

    if (img.hasClass('england')) {
      setLanguage(translateEnglish);
    } else if (img.hasClass('poland')) {
      setLanguage(translatePolish);
    }
  })

});
