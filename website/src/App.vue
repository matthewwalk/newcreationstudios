<template>
  <v-app>
    <!-- main app tag -->
    <Header />
    <v-main
      ><!--where pages are to be loaded-->
      <v-container fluid>
        <v-fade-transition mode="out-in" :hide-on-leave="true">
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-main>
    <Footer />
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

  data: () => ({
    //
  }),

};
</script>