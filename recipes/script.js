var keywordSearch = document.querySelector("#keywordSearch").value;
var resultsListSpan = document.querySelector("#resultsList");


$("#submitBtn").on("click", function displayInfo(event) {
  event.preventDefault();


  var keywordSearch = $("#keywordSearch").val().trim();
  console.log(keywordSearch);


  var queryURL = "https://api.edamam.com/search?q=" + keywordSearch + "&app_id=d5baaeda&app_key=b58e5e8313bfda2a320bd5a85b6d9ff5"

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      var results = response.data;
      console.log(response);
      console.log(response.hits[0].recipe.image)

      var row = $("<div>").addClass("row").appendTo($("#resultsList"));
      for (var i = 0; i < 12; i++) {

        //creating div row to contain Cards


        var card = $("<div>").addClass("card col m4 l4").appendTo(row);

        var cardImage = $("<div>").addClass("card-image waves-effect waves-block waves-light").appendTo(card);

        var activator = $("<img>").addClass("activator");


        // Storing image
        var imgURL = response.hits[i].recipe.image;

        // Creating an element to have the image displayed
        // var image = $("<img>").attr("src", imgURL);

        activator.attr("src", imgURL)
        cardImage.append(activator);

        var cardContent = $("<div>").addClass("card-content").appendTo(card);
        var cardTitle = $("<span>").addClass("card-title activator grey-text text-darken-4").appendTo(cardContent);
        var title = response.hits[i].recipe.label;
        cardTitle.html(title);
        var iElement1 = $("<i>").addClass("material-icons right");
        iElement1.html("more_vert")
        cardTitle.append(iElement1);
        var instructions = response.hits[i].recipe.url;
        var pOne = $("<p>").appendTo(cardContent);
        var link = $("<a>").appendTo(pOne);
        link.attr("href", instructions);
        link.html("Instructions");


        var cardReveal = $("<div>").addClass("card-reveal").appendTo(card);
        var cardTitle = $("<span>").addClass("card-title grey-text text-darken-4").appendTo(cardReveal);

        cardTitle.html("Ingredients");
        var iElement = $("<i>").addClass("material-icons right");
        iElement.html("close")
        cardTitle.append(iElement);
        var ptwo = $("<p>").appendTo(cardReveal);
        var ingredients = response.hits[i].recipe.ingredientLines;

        for (var j = 0; j < ingredients.length; j++) {
          var ingredient = ingredients[j];
          var listItem = $("<li>").text(ingredient);

          ptwo.append(listItem);


        }







        // Storing the title data
        // var title = response.hits[i].recipe.label;
        // cardTitle.text(title);

        // Creating an element to have the title displayed
        // var pOne = $("<p>").text("Recipe: " + title);

        // var card = $("<div>").addClass("card-reveal");

        // Storing ingredients
        // Creating an element to have the ingredients displayed
        // var ptwo = $("<p>").text("Ingredients: " + ingredients);

        // var ingredients = response.hits[i].recipe.ingredientLines;


        // for (var j = 0; j < ingredients.length; j++) {
        //     var ingredient = ingredients[j];
        //     var listItem = $("<li>").text(ingredient);
        //     // listItem.textContent = ingredient;
        //     $(".card-reveal").append(listItem);
        //     // console.log(ingredient);

        // }

        // Instructions button
        // // var instructions = response.hits[i].recipe.url;
        // // Creating an element to have the ingredients displayed
        // var pthree = $("<a>");
        // pthree.attr("href", instructions);
        // pthree.html("Instructions");

        // Displaying the title
        // $("#resultsList").append(image);
        // $("#resultsList").append(pOne);

        // $("#resultsList").append(pthree);
        // $("#resultsList").append("<br>");

      }

    });

});







