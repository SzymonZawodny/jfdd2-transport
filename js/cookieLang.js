function getCookieValue(cookieName) {
  var cookie = document.cookie.split(';').map(function (item) {
    var parts = item.split('=');
    var cookie = {
      name: parts[0],
      value: parts[1]
    };
    return cookie;
  }).find(function (item) {
    return item.name === cookieName;
  });

  if (cookie !== undefined) {
    return cookie.value;
  } else {
    return null;
  }
}

function setCookieValue(cookieName, value) {
  document.cookie = cookieName + '=' + value;
}



////////////////

setCookieValue('pageLanguage', 'pl-PL');

var wybranyJezyk = getCookieValue('pageLanguage');