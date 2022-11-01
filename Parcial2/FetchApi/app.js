$("#click").click(function (e) {
  var text = encodeURIComponent($("#textApi").val());
  var translate = $("#translate").val();
  console.log(text);
  console.log(translate);

  getFetch(text, translate);
});

function getFetch(text, translate) {
  fetch(`http://api.funtranslations.com/translate/${translate}?text=` + text)
    .then((data) => data.json())
    .then((item) => {
      console.log(item);
      $("#result").text(item.contents.translated);
    })
    .catch((err) => console.log(err));
}
