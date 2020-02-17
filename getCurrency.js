document.getElementById("dateSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    let value = document.getElementById("year").value;
    //console.log(value);
    if (value === "")
    {
      alert("Please enter a date!");
      return;
    }


    const url = "http://data.fixer.io/api/"+ value+ "?access_key=4db81127b158fd3c9e05d6f08ea066b2&symbols=USD,CAD,JPY";
    console.log(url);
    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      console.log(json);
      results += '<img src="flags/usa.png" width="30" height="26"/>' + json["rates"].USD + '<br />';
      results += '<br />'
      results += '<img src="flags/canada.png" width="30" height="26"/>' + json["rates"].CAD + '<br />';
      results += '<br />'
      results += '<img src="flags/japan.png" width="30" height="26"/>'+ json["rates"].JPY + '<br />';
      document.getElementById("currencyResults").style.background = "white";
      document.getElementById("result").innerHTML = results;
    })
    .catch(err => alert("Wrong Data Formating! Please use the same format as suggested"))});
