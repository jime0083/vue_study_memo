<template>
    <div>
      <h2>メモ一覧</h2>
      <NoteItem v-for="note in notes" :key="note.id" :note="note" @delete-note="deleteNote" @edit-note="editNote" />
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';
  import NoteItem from './NoteItem.vue';
  
  export default {
    components: { NoteItem },
    computed: {
      ...mapState(['notes'])
    },
    methods: {
      ...mapMutations(['deleteNote', 'editNote'])
    }
  };
  </script>