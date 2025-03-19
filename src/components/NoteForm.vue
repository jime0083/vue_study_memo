<template>
    <div>
      <input v-model="newNote" placeholder="メモを入力" />
      <button @click="addNote">追加</button>
    </div>
  </template>
  
  <script>
  import { mapMutations } from 'vuex';
  
  export default {
    data() {
      return {
        newNote: '',
      };
    },
    methods: {
      ...mapMutations(['addNote']),
      addNote() {
        if (this.newNote.trim() !== '') {
          this.addNote({ id: Date.now(), text: this.newNote });
          this.newNote = '';
        }
      },
    },
  };
  </script>