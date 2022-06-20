const express = require("express");
const {repeatNTimesWithSpace, capitalizeFirstLetter} = require("../utils/stringUtils");
const controller = express.Router();

controller.get("/capitalizeName/:name", (request, response) => {
    try {
        const name = request.params.name;
        const capitalizedName = capitalizeFirstLetter(name);
        response.send(capitalizedName);
    } catch (error) {
        response.send("Can't finde the name")
    }
})

controller.get("/:name/:times", (request, response) => {
    try {
        // get name
        const name = request.params.name;

        // get times
        const times = request.params.times;

        // get result of repeatNTitmeWithSpace
        const repeatedNames = repeatNTimesWithSpace(name, times);

        // send string response of result
        response.send(repeatedNames)


    } catch (error) {
        response.send("There was an error.")
    }
})

module.exports = controller;