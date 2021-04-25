<template>
  <v-sheet dark>
    <v-card class="mx-auto pa-4" contain>
      <v-card-title class="display-2 font-weight-black white--text">
        Photography
      </v-card-title>

      <v-divider></v-divider>

      <v-card-subtitle class="display-1 font-weight-bold">
        About Me
      </v-card-subtitle>

      <v-img
        class="white--text align-end"
        contain
        src="../assets/img/photos/me.jpg"
      >
        <v-card-text>
          <p class="text-left body-1" >
            Born in South America, raised in Toronto, photography has been a
            part of my life for a long time. My interest in photography started
            in high school, when I took a class to get an easy credit. Little
            did I know that it would spark a passion and a love for this craft.
            Although I developed an interest and passion in photography, I ended
            up persuing music in college. But I still loved to take photos on my
            Minolta 35mm film camera..
          </p>
          <p class="text-right body-1" >
            While persuing a career in music I was also working on film
            technique photographing landscapes; and portraits of family and
            friends. Since then, I have developed my skills at portrature,
            family, fashion, achitechture and now lifestyle and urban
            photography. I strive to make every photography session an exciting
            and fun experience; while capturing the essence of the moment with
            an artistic vision.
          </p>
        </v-card-text>
      </v-img>
    </v-card>

    <v-card class="mx-auto pa-4" elevation="2">
      <v-card-title class="display-2 font-weight-black white--text">
        Gallery
      </v-card-title>
      <v-divider></v-divider>
    </v-card>

    <Gallery />
  </v-sheet>
</template>

<script>
import Gallery from "../components/Gallery";

export default {
  components: {
    Gallery,
  },
};
</script>

<style>
.container {
  max-width: 100vw;
  padding: 0px;
}
</style>