<template>
  <v-footer absolute dark padless app color="rgb(164,4,4)">
    <v-card
      flat
      tile
      width="100%"
      class="white--text text-center"
    >
      <v-card-text>
        <v-img contain src="../../assets/img/logo.png" height="50"> </v-img>
      </v-card-text>

      <v-card-text class="white--text">
        <p>
          NEW CREATION STUDIOS <br />
          38-2272 Mowat Avenue, Oakville, Ontario, L6H-5L8 <br />
          <a
            href="mailto:bookings@newcreationstudios.com"
            class="font-weight-bold white--text"
          >
            bookings@newcreationstudios.com
          </a>
          <v-icon class="pa-1">mdi-email</v-icon>
        </p>
      </v-card-text>

      <v-card-text>
        <v-btn
          v-for="item in social"
          :key="item.id"
          :href="item.href"
          target="_blank"
          icon
          class="mx-4 white--text"
        >
          <v-icon size="24px" color="white"> {{ item.icon }} </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>

    <v-divider></v-divider>

    <v-card-text>
      <v-row>
        <v-col align="center" justify="center" class="white--text">
          {{ new Date().getFullYear() }}
          <v-icon size="18px" color="white"> mdi-copyright </v-icon>
          <strong>{{ copyright }}</strong>
        </v-col>
      </v-row>
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      content: [],
      social: [
        {
          id: 1,
          icon: "mdi-facebook",
          href: "https://www.facebook.com/NewCreationMusicStudios/?tn-str=k*F",
        },
        {
          id: 2,
          icon: "mdi-instagram",
          href: "https://www.instagram.com/newcreationstudios/",
        },
        {
          id: 3,
          icon: "mdi-youtube",
          href: "https://www.youtube.com/channel/UCRsrAx4pUrLh5abL7o0AUB",
        },
        {
          id: 4,
          icon: "mdi-soundcloud",
          href: "https://soundcloud.com/user-159625968",
        },
      ],
      copyright: " Property of New Creation Studios - All Rights Reserved",
    };
  },
};
</script>

<style>
</style>