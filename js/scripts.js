$(function(){
  // console.log("Got into the doc")
  $("#form1").submit(function(){
    // console.log("Got here")
    // $(".bullet").hide();
    $(".bullet, .bulldog, .fireant").hide();
    var antSelection = "." + $("input:radio[name=ant]:checked").val()
    console.log(antSelection);
    $(antSelection).show();

    event.preventDefault();
  });
});
