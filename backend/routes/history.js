const express = require("express");
const Access = require("./Access");
const router = express.Router();
const {
    getAllhistory,
    createItemHistory,
    deleteAllHistory,
} = require("../controllers/history");

router.get("/", async (req, res) => {
    Access(res);
    return res.json(await getAllhistory());
});

router.post("/", async (req, res) => {
    Access(res);
    return res.json(await createItemHistory(req.body));
});
router.delete("/", async (req, res) => {
    Access(res);
    return res.json(await deleteAllHistory());
});
module.exports = router;
