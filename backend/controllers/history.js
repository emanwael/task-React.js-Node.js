const historyModel = require("../models/history");

async function getAllhistory() {
    try {
        return await historyModel.find({});
    } catch (error) {
        console.log(error);
    }
}

async function createItemHistory(phoneData) {
    try {
        return await historyModel.create(phoneData);
    } catch (error) {
        console.log(error);
    }
}
async function deleteAllHistory() {
    try {
        return await historyModel.deleteMany({});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllhistory,
    createItemHistory,
    deleteAllHistory
};
