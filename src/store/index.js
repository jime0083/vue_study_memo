import { createStore } from 'vuex';

export default createStore({
  state: {
    notes: [],
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
    },

    deleteNote(state, noteId) {
      state.notes = state.notes.filter(note => note.id !== noteId);
    },

    editNote(state, updatedNote) {
      const index = state.notes.findIndex(note => note.id === updatedNote.id);
      if (index !== -1) {
        state.notes[index] = updatedNote;
      }
    },


  },
  actions: {},
  getters: {
    getNotes: state => state.notes,
  },
});