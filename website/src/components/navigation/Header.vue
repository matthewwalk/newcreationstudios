<template>
  <v-container>
    <v-app-bar
      dark
      prominent
      color="rgb(164,4,4)"
      src="../../assets/video/wave_still.jpg"
      fade-img-on-scroll
      dense
      app
      shrink-on-scroll
      elevate-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props">
          <video-background
            :src="require('../../assets/video/wave.mp4')"
            style="max-height: 300px; height: 100vh"
            overlay="linear-gradient(45deg,rgba(75,75,75,0.5),rgba(0,0,0,0.5))"
          >
          </video-background>
        </v-img>
      </template>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-avatar tile>
        <v-img contain src="../../assets/img/logo.png"></v-img>
      </v-avatar>

      <v-toolbar-title class="pa-2">
        <div class="hidden-md-and-up">NCS</div>
        <div class="hidden-sm-and-down font-weight-black">
          New Creation Studios
        </div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          grow
          color="white"
          background-color="rgba(0,0,0,0.70)"
        >
       <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item.id" :to="item.path">
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" dark absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="tab">
          <v-list-item v-for="item in items" :key="item.id">
            <v-list-item-title> {{ item.title }} </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      drawer: false,
      items: [
        // {
        //   id: 1,
        //   title: "Studio",
        //   path: "/studio",
        // },
        {
          id: 2,
          title: "Photography",
          path: "/photography",
        },
        {
          id: 3,
          title: "Videography",
          path: "/videography",
        },
        {
          id: 4,
          title: "Lessons",
          path: "/lessons",
        },
        {
          id: 5,
          title: "About",
          path: "/about",
        },
        {
          id: 6,
          title: "Contact",
          path: "/contact",
        },
      ],
    };
  },
  watch: {
    tab() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>