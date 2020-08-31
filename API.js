$(document).ready(function () {
  var input = "";

  $("#create").click(function () {
    $("#genre").each(function () {
      $("#genre").text($(this).text());
      picture = $("#genre").val();
      console.log(picture);
    });
    $("#start-year").each(function () {
      $("#start-year").text($(this).text());
      startYear = $("#start-year").val();
      console.log(startYear);
    });
    $("#end-year").each(function () {
      $("#end-year").text($(this).text());
      endYear = $("#end-year").val();
      console.log(endYear);
    });
    $(".artists").each(function () {
      $(".artists").text($(this).text());
      artist1 = $("#artist1").val();
      console.log(artist1);
      artist2 = $("#artist2").val();
      console.log(artist2);
      artist3 = $("#artist3").val();
      console.log(artist3);
    });

    var giphy = "https://api.giphy.com/v1/gifs/search?q=";
    var apiKey = "&api_key=PiLL4Mb9FVIRIrm1qyZ3q2rJ9FZnYREK&limit=1";
    giphyURL = giphy + picture + apiKey;

    $.ajax({
      url: giphyURL,
    }).then(function (response) {
      console.log(response);
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var image = $("<img>");
        image.attr("src", results[i].images.fixed_height.url);
        gifDiv.append(image);
        $("#gifresponse").prepend(gifDiv);
      }
    });
    var base = "http://ws.audioscrobbler.com/2.0/?method=";
    var artistTag = "artist.getsimilar&artist=";
    var topTag = "tag.gettoptracks&tag=";
    var apiKey = "&api_key=bca23c6b4836f640d11260f76cba502b";
    var format = "&format=json";

    artist1URL = base + artistTag + artist1 + apiKey + format;
    artist2URL = base + artistTag + artist2 + apiKey + format;
    artist3URL = base + artistTag + artist3 + apiKey + format;
    genreURL = base + topTag + picture + apiKey + format;
    yearURL = base + topTag + startYear + apiKey + format;

    console.log(genreURL);
    console.log(yearURL);

    $.ajax({
      url: artist1URL,
    }).then(function (response) {
      console.log(response);
      var musicians = response.similarartists.artist;
      for (var i = 0; i < 3; i++) {
        var artist1Div = $("<div>");
        var text1 = $("<p>");
        text1.text(musicians[i].name);
        artist1Div.append(text1);
        $("#response").append(artist1Div);
      }
    });
    $.ajax({
      url: artist2URL,
    }).then(function (response) {
      console.log(response);
      var musicians = response.similarartists.artist;
      for (var i = 0; i < 3; i++) {
        var artist2Div = $("<div>");
        var text2 = $("<p>");
        text2.text(musicians[i].name);
        artist2Div.append(text2);
        $("#response").append(artist2Div);
      }
    });
    $.ajax({
      url: artist3URL,
    }).then(function (response) {
      console.log(response);
      var musicians = response.similarartists.artist;
      for (var i = 0; i < 3; i++) {
        var artist3Div = $("<div>");
        var text3 = $("<p>");
        text3.text(musicians[i].name);
        artist3Div.append(text3);
        $("#response").append(artist3Div);
      }
    });

    $.ajax({
      url: genreURL,
    }).then(function (response) {
      console.log(response);
      var SimGenre = response.tracks.track;
      for (var i = 0; i < 5; i++) {
        var genreDiv = $("<div>");
        var Gtext = $("<p>");
        Gtext.text(SimGenre[i].name);
        genreDiv.append(Gtext);
        $("#response").append(genreDiv);
      }
    });

    $.ajax({
      url: yearURL,
    }).then(function (response) {
      console.log(response);
      var topYear = response.tracks.track;
      for (var i = 0; i < 3; i++) {
        var yearDiv = $("<div>");
        var Ytext = $("<p>");
        Ytext.text(topYear[i].name);
        yearDiv.append(Ytext);
        $("#response").append(yearDiv);
      }
    });
  });
});
