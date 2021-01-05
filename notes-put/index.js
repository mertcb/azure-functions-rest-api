const DataService = require("../services/DataService");

module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a PUT request.');
    const dataService = new DataService();

    if (req.body && req.body.note) {
        const res = dataService.updateNotes(context)
        context.res = {
            status: 200,
            body: res
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass note in request body"
        };
    }
}