<template>
  <v-card class="mx-auto my-12" color="grey darken-3" max-width="374" elevation="10">
    <v-card-title> {{ name }} </v-card-title>
    <v-card-subtitle> {{ role }} </v-card-subtitle>
    <v-card-text>
      <v-row class="mx-0 pa-2">
        <v-rating
          :value="rating"
          color="amber"
          dense
          half-increments
          readonly
          size="30"
        ></v-rating>
        <p class="grey--text ml-4">{{ rating }}</p>
      </v-row>
      <v-row>
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <p class="body-1 pa-2">{{ text }}</p>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    role: {
      type: String,
    },
    rating: {
      type: Number,
    },
    text: {
      type: String,
    },
  },
};
</script>

<style>
</style>