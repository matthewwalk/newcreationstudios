<template>
  <v-container fluid dark class="pa-0 ma-0">
    <v-container>
      <v-card class="mx-auto pa-4" elevation="10" dark>
        <v-card-title class="display-2 font-weight-black white--text">
          Booking Contact
        </v-card-title>
        <v-card-subtitle class="">
          Contacting <i> New Creation Studios (NCS) </i>
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text>
          <v-row class="pa-2">
            Welcome to New Creation Studios; where we strive to help you make
            your dreams a reality.
          </v-row>
          <v-row class="pa-2">
            We have a variety of services to offer, such as Music Production,
            Audio Mixing, Writing and Recording, Photography, Videography and
            Music Lessons.
          </v-row>
          <v-row class="pa-2">
            Contact Johnny or Rachelle for more information on any of our
            services.
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="mx-auto pa-0" max-width="374" elevation="10">
            <v-img contain src="../assets/img/photos/J-Contact.jpg" tile>
              <v-card-title> Johnny </v-card-title>
            </v-img>
            <v-card-text class="pa-5 text-center">
              <div>Producer / Photographer / Videographer</div>
              <div>To contact Johnny, please email:</div>
              <div>
                <v-icon>mdi-email</v-icon>
                <a
                  href="mailto:johnny@newcreationstudios.com"
                  class="font-weight-bold white--text pa-2 text-center"
                >
                  johnny@newcreationstudios.com</a
                >
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto pa-0" max-width="374" elevation="10">
            <v-img contain src="../assets/img/photos/R-Contact.jpg" tile>
              <v-card-title> Rachelle </v-card-title>
            </v-img>
            <v-card-text class="pa-5 text-center">
              <div>
                Vocalist / Vocal Teacher / Piano Teacher / Flute Teacher
              </div>
              <div>To contact Rachelle, please email:</div>
              <div>
                <v-icon>mdi-email</v-icon>
                <a
                  href="mailto:rachelle@newcreationstudios.com"
                  class="font-weight-bold white--text pa-2 text-center"
                >
                  rachelle@newcreationstudios.com</a
                >
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-card class="mx-auto pa-4" elevation="10" dark>
        <v-card-title class="display-2 font-weight-black white--text">
          Contact Info
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div>
            <v-icon class="pa-2">mdi-phone</v-icon> Phone - (647) 205-5202
          </div>
          <div>
            <v-icon class="pa-2">mdi-email</v-icon> Email -
            bookings@newcreationstudios.com
          </div>
          <div>
            <v-icon class="pa-2">mdi-map-marker</v-icon> Address - 38-2272 Mowat
            Avenue, Oakville, Ontario, L6H-5L8
          </div>
        </v-card-text>
        <v-card-title class="heading-5 font-weight-bold white--text">
          Thinking about booking our services?
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div>
            Please send us an Email with your request and questions, and someone
            from our team with get back to you shortly.
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>