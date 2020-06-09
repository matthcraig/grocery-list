$(document).ready(function(){
  $("#groceries").submit(function(event){
    const entry1 = $("input#entry1").val();
    const entry2 = $("input#entry2").val();
    const entry3 = $("input#entry3").val();
    const entry4 = $("input#entry4").val();
    const entry5 = $("input#entry5").val();
    const entry6 = $("input#entry6").val();

    const array = [entry1, entry2, entry3, entry4, entry5, entry6];
    array.sort();
    let result;
    array.forEach(function(result){
    array.slice(0);
    $("#result").append("<li>" + result + "</li");
    })
    event.preventDefault();
  });
});

