<template>
  <Header/>

  <NavButton @direction="setDirection"/>
  
  <router-view v-slot="{ Component }" :viewport="viewport">
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
      direction: null,
      viewport: {
        w: window.innerWidth,
        h: window.innerHeight,
        is568: window.innerWidth <= 568,
        is768: window.innerWidth <= 768,
        is1024: window.innerWidth <= 1024,
      },

    };
  },
  created() {
    // update viewport
    this.updateViewport();
    // add resize listener
    window.addEventListener('resize', this.updateViewport);
    window.addEventListener("beforeunload", () => window.scroll(0,0));

    // handle arrowkey presses for navigation
    // window.addEventListener('keydown', this.keyHandler(i));
  },

  methods: {
    setDirection(i) {
      this.direction = i
    },
    updateViewport() {
      // update
      this.viewport = {
        w: window.innerWidth,
        h: window.innerHeight,
        is568: window.innerWidth <= 568,
        is768: window.innerWidth <= 768,
        is1024: window.innerWidth <= 1024,
      }
    },
    // keyHandler(i) {
    //   switch (i.keycode) {
    //     case 37: 
    //       document.getElementById('prev-btn').click();
    //       break;
    //     case 39:
    //       document.getElementById('next-btn').click();
    //       break;
    //   }
    // },
  },
  components: {
    Header,
    NavButton
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,500;1,400&display=swap');

:root {
  --clr-bg-dark: #282c34; /*#34425a*/
  --clr-words-light: #f4f9ff;
  --clr-accent: #0094ea;

  --lngd-bg-main: linear-gradient(45deg, #252c38 0%, #252c38 35%, #33486b 100%);
  --lngd-bg-about: linear-gradient(150deg, #2f4fa8 0%, #043d5e 45%, #243b7c 100%);
  --lngd-bg-projects: linear-gradient(105deg, #2b0069 0%, #3427bf 65%, #38067e 100%);
  --lngd-words-red: linear-gradient(36deg, #e4942c 0%, #e44156 100%);
}

html {
  font-size: 56px;
}

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-size: 64 px;
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

.disable-scrollbar::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* Chrome/Safari/Webkit */
}

.disable-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
}
</style>
