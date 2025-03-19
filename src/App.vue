<template>
  <div class="app-container">
    <h1>Vue Study Memo</h1>
    <NoteForm />
    <NoteList />
  </div>
</template>

<script>
import NoteForm from './components/NoteForm.vue';
import NoteList from './components/NoteList.vue';

export default {
  components: {
    NoteForm,
    NoteList,
  },
};
</script>

<style>
.app-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>