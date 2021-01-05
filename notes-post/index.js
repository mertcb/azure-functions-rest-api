const DataService = require("../services/DataService");

module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a POST request.');
    const dataService = new DataService();

    if (req.body && req.body.note) {
        context.res = {
            status: 200,
            body: dataService.addNotes(context)
        };
    } else {
        context.res = {
            status: 400,
            body: "Please pass a note in request body"
        };
    }
}