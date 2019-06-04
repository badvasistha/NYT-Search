// key:GBIwIdUd9LHfAwQNE14JT5BeLpePhLAD
$(document).ready(function(){
    var input = ;
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + input + "&api-key=GBIwIdUd9LHfAwQNE14JT5BeLpePhLAD";
    console.log(queryURL);
    // https://api.nytimes.com/svc/books/v3/lists.json
// get request
$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response){
        console.log(response)
    })
// search term textbox
//Number of Records to Retrieve textbox, input
//Start Year, input box
//End Year
//Search (on click)
// clear results

//Output Top Articles


})