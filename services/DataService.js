const DBService = require("./DBService");

class DataService {

    dbService;
    constructor() {
        this.dbService = new DBService();
    }

    getNotes(context) {
        try {
            const notes = this.dbService.getNotes();
            context.res.status(200).json(notes);
        } catch (error) {
            context.res.status(500).send(error);
        }
    }

    addNotes(context) {
        try {
            const response = this.dbService.addNotes(context.req.body.note);
            context.res.status(200).json(response);
        } catch (error) {
            context.res.status(500).send(error);
        }
    }

    deleteNotes(context) {
        try {
            const response = this.dbService.deleteNotes(context.req.params.id);
            context.res.status(200).json(response);
        } catch (error) {
            context.res.status(500).send(error);
        }
    }

    updateNotes(context) {
        try {
            const response = this.dbService.updateNotes(context.req.body.note);
            context.res.status(200).json(response);
        } catch (error) {
            context.res.status(500).send(error);
        }
    }
}

module.exports = DataService;