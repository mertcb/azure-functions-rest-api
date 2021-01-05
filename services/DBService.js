class DBService {

    data = {
        notes: [
            {
                id: 1,
                note: 'note1',
            },
            {
                id: 2,
                note: 'note2',
            },
            {
                id: 3,
                note: 'note3',
            },
            {
                id: 4,
                note: 'note4',
            },

        ]
    };

    getNotes() {
        return this.data.notes;
    }

    addNotes(note) {
        note.id = this.data.notes.length + 1;
        this.data.notes.push(note);
        return {
            message: "note added",
            notes: this.data.notes.length
        }
    }

    deleteNotes(id) {
        this.data.notes = this.data.notes.filter(note => note.id != id)
        return {
            message: "note deleted",
            notes: this.data.notes.length
        }
    }

    updateNotes(note) {
        this.data.notes = this.data.notes.map(_note => {
            if (_note.id === note.id) _note = note;
            return _note;
        });
        return {
            message: "note edited",
            notes: this.data.notes.length
        }
    }

}

module.exports = DBService;