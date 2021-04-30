<template>
<v-container></v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["setWelcome"]),
  },
  mounted() {
    this.setWelcome(false);
  }
};
</script>

<style>
</style>