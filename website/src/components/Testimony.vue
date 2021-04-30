<template>
  <v-card class="mx-auto pa-2" color="grey darken-3" max-width="374" min-width="200" elevation="10">
    <v-card-title> {{ name }} </v-card-title>
    <v-card-subtitle> {{ role }} </v-card-subtitle>
    <v-card-text>
      <v-row >
        <v-rating
          :value="rating"
          color="amber"
          dense
          half-increments
          readonly
          size="25"
        ></v-rating>
        <p>{{ rating }}</p>
      </v-row>
      <v-row>
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <p class="text-md-body-1 text-body-2 pa-2 white--text">{{ text }}</p>
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