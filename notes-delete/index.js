const DataService = require("../services/DataService");

module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a DELETE request.');
    const dataService = new DataService();

    if (req.params && req.params.id) {
        const res = dataService.deleteNotes(context);
        context.res = {
            status: 200,
            body: res
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass note id on the query string"
        };
    }
}