<template>
  <v-card class ="pa-2">
    <v-row dense>
      <v-col
        v-for="image in images"
        :key="image.pathLong"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card class="overflow-hidden" tile>
          <v-img
            :src="image.pathLong"
            aspect-ratio="0.8"
            class="zoom"
          >
            <template v-slot:placeholder>
              <v-card width="100%" height="100%" color="grey darken-3" >
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-3"
                  ></v-progress-circular>
                </v-row>
              </v-card>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      dialog: false,
    };
  },
  mounted() {
    this.importAll(require.context("../assets/img/folio/", true, /\.jpg$/));
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    },
  },
};
</script>

<style scoped>
.zoom {
  transition: transform 0.5s ease;
}
.zoom:hover {
  transform: scale(1.05);
}
</style>