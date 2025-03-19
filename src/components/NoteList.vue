<template>
    <div>
      <ul>
        <li v-for="note in notes" :key="note.id">
          {{ note.text }}
          <button @click="deleteNote(note.id)">削除</button>
          <button @click="editNote(note)">編集</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapMutations } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['getNotes']),
      notes() {
        return this.getNotes;
      },
    },
    methods: {
      ...mapMutations(['deleteNote', 'editNote']),
    },
  };
  </script>