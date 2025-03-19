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
      newNote: '', // ✅ 変数名を確認
    };
  },
  methods: {
    ...mapMutations({
      addNoteToStore: 'addNote', // ✅ [] ではなく {} に修正
    }),
    addNote() {
      if (this.newNote.trim() !== '') { // ✅ 正しい変数名を使用
        this.addNoteToStore({ id: Date.now(), text: this.newNote });
        this.newNote = '';
      }
    },
  },
};
</script>