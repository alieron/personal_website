<template>
  <Header :viewport="viewport"/>

  <NavButton @direction="setDirection"/>
  
  <router-view v-slot="{ Component }">
    <transition :name="direction">
      <component :is="Component" />
      <!-- <router-view /> -->
    </transition>
  </router-view> 
</template>

<script>
import Header from '@/components/Header.vue';
import NavButton from '@/components/NavButton.vue';


export default {
  data() {
    return {
      direction: 'slide-right',
      viewport: {
        w: window.innerWidth,
        h: window.innerHeight,
        is568: window.innerWidth <= 568,
        is768: window.innerWidth <= 768,
        is1024: window.innerWidth <= 1024,
      },

    };
  },
  methods: {
    setDirection(i) {
      this.direction = i
    },
  },
  components: {
    Header,
    NavButton
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap");

:root {
  --clr-bg-dark: #282c34;
  --clr-words-light: #f4f9ff;
  --clr-accent: #0094ea;

  --lngd-bg-dark: linear-gradient(45deg, var(--clr-bg-dark), var(--clr-bg-dark) 45%, #34425a); 
  --lngd-words-red: linear-gradient(36deg, #e4942c 0%, #e44156 100%);;
}

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-size: 80px;
}

.about,
.projects {
  min-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Roboto Mono", monospace;
  font-size: 80px;
}

/* .main h1,
.about h1,
.projects h1 {
  border: 1px solid red;
} */


.main p {
  font-size: 10px;
}

.about {
  background-color: black;
  color: white;
}

/* Slide between pages, transition */
.slide-left-enter-active, 
.slide-right-enter-active,
.slide-left-leave-active, 
.slide-right-leave-active {
  transition: all 0.75s ease-out;
}

.slide-right-enter-to {
  position: absolute;
  right: 0;
}

.slide-right-enter-from {
  position: absolute;
  right: -100%;
}

.slide-right-leave-to {
  position: absolute;
  left: -100%;
}

.slide-right-leave-from {
  position: absolute;
  left: 0;
}

.slide-left-enter-to {
  position: absolute;
  left: 0;
}

.slide-left-enter-from {
  position: absolute;
  left: -100%;
}

.slide-left-leave-to {
  position: absolute;
  right: -100%;
}

.slide-left-leave-from {
  position: absolute;
  right: 0;
}
</style>
