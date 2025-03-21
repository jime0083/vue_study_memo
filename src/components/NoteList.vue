<template>
  <div>
    <transition-group name="fade" tag="ul">
      <li v-for="note in notes" :key="note.id" class="note-item">
        {{ note.text }}
        <button @click="deleteNote(note.id)">削除</button>
        <button @click="editNote(note)">編集</button>
      </li>
    </transition-group>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.note-item {
  background: #fff;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
  
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
      editNote(note) {
      const newText = prompt('編集後の内容を入力:', note.text);
      if (newText !== null && newText.trim() !== '') {
          this.$store.commit('editNote', { id: note.id, text: newText });
      }
      }
},
  };
  </script>