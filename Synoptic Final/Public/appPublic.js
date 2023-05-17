function onDonationFoodClick(event){
    event.preventDefault();

    const donations =  $('#donationform').serializeArray()
    donationsLength = (donations.length - 1);


    var donationsToAdd=[];
    for (let i = 1; i < donationsLength; i=i+2){
        //make const value
        donationsToAdd.push({ dropOffDate : donations[0].value, foodItem : donations[i].value, expiryDate : donations[i+1].value })
        //add to end of json value 

    }
    stringifyDonations = JSON.stringify(donationsToAdd);

    fetch ("/DonateFood",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:stringifyDonations})
        .catch(error => {
            console.log(error);
        })

}

const submitFoodDonation = document.getElementById("donationform");
try{
    submitFoodDonation.addEventListener("submit",onDonationFoodClick) //when the form is submitted (not clicked, but everything is submittable!) call the function
}
catch(error){
    //console.log('No submit food donation button on this page')
}






function onCompostDonationFoodClick(event){
    event.preventDefault();


    form = {
        dropOffDate : document.getElementById("txtDate").value,
        noOfBags : document.getElementById("bag").value,
        rewardPoints : document.getElementById("value").value
    }
    stringifyForm = JSON.stringify(form)

    fetch ("/DonateCompost",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:stringifyForm})
        .catch(error => {
            console.log(error);
        })

}

const submitCompostDonationButton = document.getElementById("compostform");
try{
    submitCompostDonationButton.addEventListener("submit",onCompostDonationFoodClick)
}
catch(error){
    //console.log('No submit compost donation button on this page')
}






function getFoodFromServer(){

    fetch("/getFood",{
        method: "GET",
        headers:{"Content-Type": "application/json"}
    })
    .then(response => response.json()) //makes sure the promise is complete
    
    .then(donations => { //donations is the variable returned from the get method (retrieving from the json file on the server)
        console.log(donations);

        //donations only exists inside of this .then


        //add elements for html in here?





    })
    .catch(error => {
        console.log("error while retreving food donations: "+ error);
    })
}

//getFoodFromServer()