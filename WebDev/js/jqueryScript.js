//Notes

//Immediatelty invoked function
$(function () {
  $(".load-info").on("click", function () {
    $.ajax({
      //method and dataType are GET and json by default so they can be ommitted
      method: "GET",
      url: "./assets/data.json",
      dataType: "json",
    }).done(function (data) {
      $.each(data.artists, function (key, value) {
        $(".info-artists").append("<li>" + value.name + "</li>");
      }); //each
    }); // ajax done
  }); // click event
}); // jQuety Ready
