<template>
  <div>
    <h1>New Terminal</h1>
    <vscode-text-field v-model="host" type="text">Host</vscode-text-field>
    <vscode-text-field v-model="port" type="text">Port</vscode-text-field>
    <vscode-text-field v-model="username" type="text">Usename</vscode-text-field>
    <vscode-text-field v-model="password" type="password">Passowrd</vscode-text-field>
    <vscode-button @click="handleHowdyClick">New Terminal</vscode-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { vscode } from "../../../utilities/vscode";
import { COMMAND } from "../../../../../src/constants";

export default defineComponent({
  data() {
    return {
      host: '',
      port: 5432,
      username: '',
      password: '',
    }
  },
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
      vscode.executeCommand(COMMAND.newMmlTerminal, "Hey there partner! 🤠");
    }
  }
})
</script>