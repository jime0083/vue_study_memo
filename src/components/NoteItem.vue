<template>
    <div>
      <p>{{ note.text }}</p>
      <button @click="$emit('delete-note', note.id)">削除</button>
      <button @click="edit">編集</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['note'],
    methods: {
      edit() {
        const newText = prompt('新しいメモを入力してください', this.note.text);
        if (newText !== null) {
          this.$emit('edit-note', { noteId: this.note.id, newText });
        }
      }
    }
  };
  </script>