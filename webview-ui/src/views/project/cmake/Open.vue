<template>
  <div>
    <h1>Create project</h1>
    <vscode-button @click="handleHowdyClick">Howdy!</vscode-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { vscode } from "../../../utilities/vscode";
import { COMMAND } from "../../../../../src/constants";

export default defineComponent({
  mounted () {
    window.addEventListener('message', this.receiveMessage);
  },
  beforeDestroy() {
    window.removeEventListener('message', this.receiveMessage);
  },
  methods: {
    receiveMessage (event: any) {
    },
    handleHowdyClick() {
      vscode.executeCommand(COMMAND.newProject, "Hey there partner! 🤠");
    }
  }
})
</script>