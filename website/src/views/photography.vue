<template>
  <v-container fluid>
    <v-container fluid>
      <v-card class="mx-auto">
        <v-img src="../assets/img/photos/me_cropped.jpg">
          <v-slide-y-reverse-transition appear>
            <v-card-title class="display-2 font-weight-black white--text">
              Photography
            </v-card-title>
          </v-slide-y-reverse-transition>

          <v-slide-y-reverse-transition appear>
            <v-card-subtitle class="display-1 font-weight-bold">
              About Me
            </v-card-subtitle>
          </v-slide-y-reverse-transition>

          <v-spacer></v-spacer>

          <v-card-text>
            <v-row>
              <v-col md="5">
                <v-slide-x-transition appear>
                  <v-card color="transparent" outlined>
                    <v-card-text>
                      <p class="text-left body-1 white--text">
                        Born in South America, raised in Toronto, photography
                        has been a part of my life for a long time. My interest
                        in photography started in high school, when I took a
                        class to get an easy credit. Little did I know that it
                        would spark a passion and a love for this craft.
                        Although I developed an interest and passion in
                        photography, I ended up persuing music in college. But I
                        still loved to take photos on my Minolta 35mm film
                        camera..
                      </p>
                    </v-card-text>
                  </v-card>
                </v-slide-x-transition>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>

            <v-row>
              <v-spacer></v-spacer>
              <v-col md="5">
                <v-slide-x-reverse-transition appear>
                  <v-card color="rgba(0,0,0,0.7)">
                    <v-card-text>
                      <p class="text-right body-1 font-weight-bold white--text">
                        While persuing a career in music I was also working on
                        film technique photographing landscapes; and portraits
                        of family and friends. Since then, I have developed my
                        skills at portrature, family, fashion, achitechture and
                        now lifestyle and urban photography. I strive to make
                        every photography session an exciting and fun
                        experience; while capturing the essence of the moment
                        with an artistic vision.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-slide-x-reverse-transition>
              </v-col>
            </v-row>
          </v-card-text>
        </v-img>
      </v-card>
    </v-container>

    <v-container fluid>
      <v-card class="mx-auto pa-4" elevation="2">
        <v-card-title class="display-2 font-weight-black white--text">
          Customer Testimony
        </v-card-title>

        <v-divider></v-divider>

        <v-row>
          <v-col v-for="(testimony, index) in testimonies" :key="index">
            <Testimony
              :name="testimony.name"
              :role="testimony.role"
              :rating="testimony.rating"
              :text="testimony.text"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <v-container fluid>
      <v-card class="mx-auto pa-4" elevation="2">
        <v-card-title class="display-2 font-weight-black white--text">
          Portfolio
        </v-card-title>
        <v-divider></v-divider>
      </v-card>

      <Gallery />
    </v-container>

    <v-container fluid>
      <v-card class="mx-auto pa-4" elevation="2">
        <v-card-title class="display-2 font-weight-black white--text">
          Like what you see?
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <p class="text-left body-1 white--text">
            Thinking of booking a phography session? Questions about the
            process?
          </p>
          <p class="text-left body-1 white--text">
            Feel free to reach out through the contact page, or email me at
            <a
              href="mailto:johnny@newcreationstudios.com"
              class="font-weight-bold white--text"
            >
              johnny@newcreationstudios.com</a
            >
            <v-icon class="pa-1">mdi-email</v-icon>
          </p>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import Gallery from "../components/Gallery";
import Testimony from "../components/Testimony";

export default {
  components: {
    Gallery,
    Testimony,
  },
  data() {
    return {
      testimonies: [
        {
          name: "Akin",
          role: "Computer Scientist",
          rating: 4.8,
          text:
            "Johnny was extremely professional, the photos were amazing; I couldn't have had a better experience!",
        },
        {
          name: "Melissa",
          role: "Psychologist",
          rating: 5,
          text:
            "Such a sweet man! I am in awe with how my wedding photos turned out - especially for the price.",
        },
        {
          name: "Matthew",
          role: "Software Engineer",
          rating: 4.7,
          text:
            "Johnny took my headshots and I have recieved multiple compliments on them. I would reccomend him to my friends / colleagues / family.",
        },
        {
          name: "Alah",
          role: "Business Analyst",
          rating: 4.5,
          text:
            "I hired Johnny to take a few photos of my me and my girl, he totally rocked it!",
        },
      ],
    };
  },
};
</script>

<style>
</style>