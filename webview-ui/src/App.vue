<template>
  <main>
    <h1>Hello world!</h1>
    <router-view/>
    <vscode-button @click="handleHowdyClick">Howdy!</vscode-button>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import { vscode } from "./utilities/vscode";
import { COMMAND } from "../../src/constants";

export default defineComponent({
  mounted () {
    window.addEventListener('message', this.receiveMessage);
  },
  beforeDestroy() {
    window.removeEventListener('message', this.receiveMessage);
  },
  methods: {
    receiveMessage (event: any) {
      console.log('receiveMessage', event.data);
      if (event.data && event.data.id === 'linkTo') {
        if (!event.data.path) {
          console.log('path is empty.')
          return;
        }
        if (this.$route.path === event.data.path) {
          return;
        }
        
        console.log('linkTo', event.data.path);
        this.$router.push({path: event.data.path, query: this.$route.query});
      }
    },
    handleHowdyClick() {
      vscode.executeCommand(COMMAND.newProject, "Hey there partner! 🤠");
    }
  }
})
</script>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
}

main > * {
  margin: 1rem 0;
}
</style>
