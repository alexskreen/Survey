$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    alert("HI");
    var nameInput = $("input#name").val();
    var favoriteflavorInput = $("input#favoriteflavor").val();
    var musicInput= $("input#music").val();
    var colorInput = $("input#color").val();
    var drinkInput = $("input#drink").val();
    var bornInput = $("input#born").val();

    $(".name").text(nameInput);
    $(".favoriteflavor").text(favoriteflavorInput);
    $(".music").text(musicInput);
    $(".color").text(colorInput);
    $(".drink").text(drinkInput);
    $(".born").text(bornInput);

    $("#story").show();
    alert("hi")

    event.preventDefault();
  });

});
