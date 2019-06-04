// key:GBIwIdUd9LHfAwQNE14JT5BeLpePhLAD
$(document).ready(function(){

    //var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + input + "&api-key=GBIwIdUd9LHfAwQNE14JT5BeLpePhLAD";
    //console.log(queryURL);
    // https://api.nytimes.com/svc/books/v3/lists.json
// get request

// search term textbox
//Number of Records to Retrieve textbox, input
//Start Year, input box
//End Year
//Search (on click)
// clear results
let getAjax = function(search,number,start,end){
    console.log(search);

    let buildURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M&q=${search}&begin_date=${start}&end_date=${end}`

    console.log(buildURL);
    $.ajax({
        url: buildURL,
        method: "GET"
      })
        .then(function(response){
            console.log(response)
            renderResult(response);
        })

}

let renderResult = function(data){

}

$("#submit").on("click", function (event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    let searchTerm = $("#search").val().trim().replace(/\s/g, "+");;
    let noOfResults = $("#noOfResults").val().trim();
    
    let startDate = $("#startDate").val().trim();
    let endDate = $("#endDate").val().trim();
    // if(startDate )
    // let startDate =20180202;
    // let endDate = 20190101;
    if(startDate == ""){
        console.log("blankstring")
        startDate = 20180202;
    }
    if(endDate == ""){
        endDate = 20180202;
    }
    getAjax(searchTerm, noOfResults, startDate, endDate)
    
  });

//Output Top Articles


})