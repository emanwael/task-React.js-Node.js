const express = require("express");
const router = express.Router();
const axios = require("axios");
const Access = require("./Access");

router.use(express.json());



router.get("/:number", async function (req, res) {
    Access(res);
    try {
        const API_ACC_KEY = "24y8awoWgkpMj3st94nWoPtgx8rK7DMW";

        const response = await axios(
            {
                method: 'get',
                baseURL: 'https://api.apilayer.com/number_verification/validate',
                headers: { apikey: API_ACC_KEY },
                params: {
                    number: req.params.number
                }
            });
        res.json(response.data);

    } catch (error) {
        if (error.response) {
            console.log("ee", error.response.data);
        } else if (error.request) {
            console.log("rr", error.request);
        } else {
            console.log("Error", error.message);
        }
    }
});


module.exports = router;