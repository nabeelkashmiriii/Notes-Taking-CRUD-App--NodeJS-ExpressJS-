module.exports = (app) => {
    const notes = require('../controllers/note.controller');

    // Create Note
    app.post('/notes', notes.create);

    // list All notes 
    app.get('/notes', notes.findAll);

    // read single node with ID
    app.get('/notes/noteId', notes.findOne);

    // update Note
    app.put('/notes/noteId', notes.update);

    // delete Note 
    app.delete('/notes/noteId', notes.delete);
}