<template>
  <v-container>
    <v-app-bar
      app
      dark
      color="rgb(164,4,4)"
      :src="
        $vuetify.breakpoint.mdAndUp ? '../../assets/video/wave_still.jpg' : null
      "
      fade-img-on-scroll
      :shrink-on-scroll="$vuetify.breakpoint.mdAndUp"
      elevate-on-scroll
      dense
    >
      <template v-if="$vuetify.breakpoint.mdAndUp" v-slot:img="{ props }">
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

      <v-avatar tile class="">
        <v-img contain src="../../assets/img/logo.png"></v-img>
      </v-avatar>

      <v-toolbar-title class="pa-2">
        <div v-if="$vuetify.breakpoint.mdAndUp">New Creation Studios</div>
        <div v-else>NCS</div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.mdAndUp" v-slot:extension>
        <v-tabs
          :v-model="tab"
          grow
          color="white"
          background-color="rgba(0,0,0,0.70)"
        >
          <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item.id" :to="item.path">
            <div :v-if="$vuetify.breakpoint.mdAndUp">
              <v-icon class="ma-2" color="grey darken-2">{{
                item.icon
              }}</v-icon>
            </div>
            <div>
              {{ item.title }}
            </div>
            <v-icon class="ma-2" color="transparent">{{ item.icon }}</v-icon>
            <!-- dummy icon to center the text instead of the space between icon and text -->
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app dark temporary>
      <v-list nav dense>
        <v-list-item-group :v-model="tab">
          <v-list-item v-for="item in items" :key="item.id" :to="item.path">
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
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
          icon: "mdi-camera-outline",
        },
        {
          id: 3,
          title: "Videography",
          path: "/videography",
          icon: "mdi-video-outline",
        },
        {
          id: 4,
          title: "Lessons",
          path: "/lessons",
          icon: "mdi-clipboard-outline",
        },
        {
          id: 5,
          title: "About",
          path: "/about",
          icon: "mdi-information-outline",
        },
        {
          id: 6,
          title: "Contact",
          path: "/contact",
          icon: "mdi-card-account-phone-outline",
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