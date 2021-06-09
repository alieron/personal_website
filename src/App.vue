<template>
  <div class="nav-btn-cont">  
  <router-link v-if="this.$route.meta.prev" :to="{ name: this.$route.meta.prev }">
    <svg class="nav-btn" id="prev" viewBox="0 0 20 20">
      <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"/>
    </svg>
  </router-link>
  <router-link v-if="this.$route.meta.next" :to="{ name: this.$route.meta.next }">
    <svg class="nav-btn" id="next" viewBox="0 0 20 20">
      <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"/>
    </svg>
  </router-link>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" />
      <!-- <router-view /> -->
    </transition>
  </router-view> 
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap");

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
  font-size: 65px;
}

.nav-btn-cont {
  position: absolute;
  display: flex;
}

.nav-btn {
  z-index: 100;
  position: relative;
  fill: cyan;
  height: 1em;
  margin: 0 1em;
}

.main,
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



/* .main a .nav-button #next,
.about a .nav-button #next,
.projects a .nav-button #next {
  float: right;
} */

.main .logo {
  height: 2em;
}

.about {
  background-color: black;
  color: white;
}

/* Slide between pages, transition */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}

/* .slide-enter-active, .slide-leave-active {
  transition: all .25s ease-out;
}

.slide-enter, .slide-leave-active {
  opacity: 0;
  transform: scale(0.95);
  transform-origin: 50% 50%;
} */

</style>
