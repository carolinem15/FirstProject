///SIMILAR ARTISTS: http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=nirvana&api_key=bca23c6b4836f640d11260f76cba502b&format=json
//GENRE: http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=rock&api_key=bca23c6b4836f640d11260f76cba502b&format=json
//YEAR: use the same tag.gettoptracks ^^

$(document).ready(function () {
  var input = "";

  $("#create").click(function () {
    alert("submit search");

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
        $(".results").prepend(gifDiv);
      }
    });
    var base = "http://ws.audioscrobbler.com/2.0/?method=";
    var artistTag = "artist.getsimilar&artist=";
    //var artistSearch = document.getElementById(artist1);
    var topTag = "tag.gettoptracks&tag=";
    //topTag is for genre & year searches
    //var yearSearch = document.getElementById("#start-year");
    //var genreSearch = document.getElementById(picture);
    var apiKey = "&api_key=bca23c6b4836f640d11260f76cba502b";
    var format = "&format=json";

    artistURL = base + artistTag + artist1 + apiKey + format;
    genreURL = base + topTag + picture + apiKey + format;
    yearURL = base + topTag + startYear + apiKey + format;
    console.log(artistURL);
    console.log(genreURL);
    console.log(yearURL);

    $.ajax({
      url: artistURL,
    }).then(function (response) {
      console.log(response);
      var numResults = "5";
      var musicians = response.similarartists;
      for (var i = 0; i < musicians.length; i++) {
        // var artist1Div = $("<div>");
        //var text = $("<p>");
        //var artistpic1 = $("<img>");
        //text.attr("src", musicians[i].similarartists.artist[0]);
        //artistpic1.attr("src", musicians[i].image[1]);
        //artist1Div.append(artist1pic);
        //artist1Div.append(text);
        //$(".results").prepend(artist1Div);
        var musiciansEL = document.getElementsByClassName(".results");
        musiciansEL.innerHTML;
      }
    });

    $.ajax({
      url: genreURL,
    }).then(function (response) {
      console.log(response);
      var numResults = "5";
      var SimGenre = response.track;
      for (var i = 0; i < SimGenre.length; i++) {
        var genre1Div = $("<div>");
        var Gtext = $("<p>");
        //var artistpic1 = $("<img>");
        text.attr("src", SimGenre[i].track.name);
        //artistpic1.attr("src", musicians[i].image[1]);
        //genre1Div.append(artist1pic);
        genre1Div.append(Gtext);
        $(".results").prepend(genre1Div);
      }
    });

    $.ajax({
      url: yearURL,
    }).then(function (response) {
      console.log(response);
      var numResults = "5";
      var topYear = response.artist;
      for (var i = 0; i < topYear.length; i++) {
        var year1Div = $("<div>");
        var text = $("<p>");
        //var year1pic = $("<img>");
        text.attr("src", topYear[i].artist.name);
        //year1pic.attr("src", topYear[i].image[1]);
        //year1Div.append(year1pic);
        year1Div.append(text);
        $(".results").prepend(year1Div);
      }
    });
  });
});
