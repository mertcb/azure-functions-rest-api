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

    addToDo(note) {
        note.id = this.data.notes.length + 1;
        this.data.Notes.push(note);
        return {
            message: "note added",
            notes: this.data.notes.length
        }
    }

    deleteNotes(id) {
        this.data.Notes = this.data.notes.filter(todo => todo.id != id)
        return {
            message: "note deleted",
            notes: this.data.notes.length
        }
    }

    editNotes(note) {
        this.data.Notes = this.data.notes.map(todo => {
            if (todo.id === note.id) todo = note;
            return todo;
        });
        return {
            message: "note edited",
            notes: this.data.notes.length
        }
    }

}

module.exports = DBService;