import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      notes: [] // メモのリスト
    };
  },
  mutations: {
    addNote(state, note) {
      state.notes.push({ id: Date.now(), text: note });
    },
    deleteNote(state, noteId) {
      state.notes = state.notes.filter(note => note.id !== noteId);
    },
    editNote(state, { noteId, newText }) {
      const note = state.notes.find(note => note.id === noteId);
      if (note) {
        note.text = newText;
      }
    }
  },
  actions: {},
  getters: {}
});

export default store;