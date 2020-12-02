<template>
  <v-container>
    <v-carousel
      class="pa-0"
      cycle
      height="600"
      hide-delimiter-background
      hide-delimiters
      dark
      interval="10000"
    >
      <v-carousel-item>
        <v-img src="../../public/slide1.jpg"></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img src="../../public/slide2.jpg"></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img src="../../public/slide3.jpg"></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img src="../../public/slide4.jpg"></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img src="../../public/slide5.jpg"></v-img>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src:
            "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
        },
      ],
    };
  },
};
</script>
