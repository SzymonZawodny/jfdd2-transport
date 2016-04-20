function validateForm() {
  var telephone = document.forms["contact-form"]["telephone"].value;
  var email = document.forms["contact-form"]["email"].value;
  if (telephone == "" && email == "") {
    alert("Proszę podać telefon LUB adres e-mail");
    return false;
  }
  var messageRegex = /^[^<>]*$/;
  var messageRegexTest = messageRegex.test($("#message-text").val());
  if (messageRegexTest === false) {
    alert('W wiadomości znajdują się niedozwolone znaki "<", ">"');
    return false;
  }
}