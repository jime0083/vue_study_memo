import { createStore } from 'vuex';

const STORAGE_KEY = 'vue_study_memo_notes';

export default createStore({
  state: {
    notes: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notes));
    },
    deleteNote(state, noteId) {
      state.notes = state.notes.filter(note => note.id !== noteId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.notes));
    },
    editNote(state, updatedNote) {
      const index = state.notes.findIndex(note => note.id === updatedNote.id);
      if (index !== -1) {
        state.notes[index] = { ...updatedNote }; // スプレッド演算子を使って変更を反映
        localStorage.setItem('notes', JSON.stringify(state.notes)); // ローカルストレージも更新
      }
    },
  },
  getters: {
    getNotes: state => state.notes,
  },
});