<template>
  <v-app>
    <!-- main app tag -->
    <div v-if="welcome">
      <Header />
    </div>

    <v-main
      ><!--where pages are to be loaded-->
      <v-container fluid :class="welcome ? '' : 'video'">
        <v-fade-transition mode="out-in" :hide-on-leave="true">
          <div>
            <div v-if="welcome">
              <router-view />
            </div>

            <div v-if="!welcome">
              <video-background
                :src="require('./assets/video/dream.mp4')"
                style="max-height: 100%; height: 100vh"
                overlay="linear-gradient(45deg,rgba(75,75,75,0.5),rgba(0,0,0,0.5))"
                class="pa-0 ma-0"
              >
                <v-container fill-height fluid>
                  <v-row align="center" justify="center">
                    <v-col>
                      <v-card color="transparent" elevation="0">
                        <v-slide-y-reverse-transition appear>
                          <v-card-title
                            class="text-md-h1 text-h2 justify-center"
                          >
                            NEW CREATION STUDIOS
                          </v-card-title>
                        </v-slide-y-reverse-transition>
                        <v-slide-y-reverse-transition appear>
                          <v-card-title
                            class="text-md-h2 text-subtitle-1 justify-center"
                          >
                            CREATING THE DREAM
                          </v-card-title>
                        </v-slide-y-reverse-transition>

                        <v-card-actions class="justify-center">
                          <v-btn
                            outlined
                            @click="setWelcome(true)"
                            to="/photography"
                          >
                            GET STARTED
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </video-background>
            </div>
          </div>
        </v-fade-transition>
      </v-container>
    </v-main>
    <div v-if="welcome">
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      w: false,
    };
  },
  computed: {
    welcome() {
      return this.w;
    },
  },
  methods: {
    setWelcome(bool) {
      this.w = bool;
    },
  },
};
</script>

<style scoped>
.video {
  max-width: 100vw;
  padding: 0px;
}
</style>