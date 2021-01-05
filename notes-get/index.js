const DataService = require("../services/DataService");

module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a GET request.');

    const dataService = new DataService();
    const res = dataService.getNotes(context);
    context.res = {
        body: res
    };

}