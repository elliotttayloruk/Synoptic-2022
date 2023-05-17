//This is the javascript file outside of the public directory

//Setup required bits
const express = require('express');
const app = express();

//Create static file location for server
app.use(express.static('public'));
app.use(express.json());

//fs allowing us to interact with the filesystem, in this case write the form data to a file
const fs = require('fs');
const expressValidator = require('express-validator');

//Middleware bodyparser helper
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

//Shows index.html as the opening page when you access localhost:5000
app.get("/", function (req, res) {
    res.sendFile("/Users/elliotttaylor/Downloads/Synoptic 2022/Public/Homepage.html");
});

    app.post("/DonateFood", jsonParser, function (req, res) {
        const body = req.body; //req.body is the form data from the website
        //console.log(body); //we can just store the values stringified to the
        fs.readFile('test.json', 'utf-8', (err, data) => {
            if (err) { //when an error occurs trying to read the json file, log it onto the console
                console.log(err);
                return
            } else {
                var fromFile = JSON.parse(data); //this will parse all of the information stored in the json file into the variable
                for (let i = 0; i < body.length; i++) {
                    fromFile.foodDonations.push(body[i])
                }
                //fromFile.foodDonations.push(body);//this will add the data from the form just submitted to the variable


                fromFile = JSON.stringify(fromFile); //stringify ready to store back to the file
                fs.writeFile('test.json', fromFile, 'utf-8', err => { //store back to file
                    if (err) { //if there is an error trying to write back to file, log to console
                        console.log(err)
                        return
                    }
                })
          }
        })
    })

    app.post("/DonateCompost", jsonParser, function (req, res) {
        console.log("donate called");


        const body = req.body; //req.body is the form data from the website
        fs.readFile('test.json', 'utf-8', (err, data) => {
            if (err) { //when an error occurs trying to read the json file, log it onto the console
                console.log(err);
                return
            } else {
                var fromFile = JSON.parse(data); //this will parse all of the information stored in the json file into the variable
                fromFile.compostDonations.push(body)
                //fromFile.foodDonations.push(body);//this will add the data from the form just submitted to the variable


                fromFile = JSON.stringify(fromFile); //stringify ready to store back to the file
                fs.writeFile('test.json', fromFile, 'utf-8', err => { //store back to file
                    if (err) { //if there is an error trying to write back to file, log to console
                        console.log(err)
                        return
                    }
                })
            }
        })
    })


    app.get("/getFood", jsonParser, function (req, res) {
        console.log("recieved a get request");
        fs.readFile('test.json', 'utf-8', (err, data) => {
            if (err) { //when an error occurs trying to read the json file, log it onto the console
                console.log(err);
                return
            } else {
                var fromFile = JSON.parse(data);
                //console.log(fromFile.foodDonations);
                res.send(fromFile.foodDonations);
            }


        })
    })



    app.listen(5000, () =>  //make the port 3000 listen
        console.log("Express listening at port 5000"))
//log that this is happening

