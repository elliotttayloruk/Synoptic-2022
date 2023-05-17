


//fetch called to retrieve data
fetch('jsonFile.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        displayData(data); //run function below
    })
    .catch(function (err) {
        console.log(err); //error handling
    });


//function to scan through the json file and display the data in the div element on the browse.html page
function displayData(data) {
    let browseDiv = document.getElementById("data-goes-here");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = 'Item: ' + data[i].foodItem + ' ----- ' + "Expiry date: " + data[i].expiryDate;
        browseDiv.appendChild(div);
    }
}
