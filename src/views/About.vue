<template>
  <div class="about" id="about">
    <div class="title-cont">
      <div class="title-text-cont">
        <h1>About</h1>
      </div>
      <div class="shapes">
        <div class="square"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    viewport: Object,
    },
}
</script>

<style>
.about {
  min-width: 100vw;
  height: 100vh;
  
  background: var(--lngd-bg-about);
  color: var(--clr-words-light);
}

.about .title-cont {
  height: 100vh;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.about .shapes {
  width: 4em;
  background: white;
  /* fill: var(--clr-words-light);
  transition: fill 0.4s ease-out; */
}

.about .shapes .square{
  width: 4em;
  background: white;
  /* fill: var(--clr-words-light);
  transition: fill 0.4s ease-out; */
}

.about .title-text-cont {
  font-family: "Roboto Mono", monospace;
  width: 15ch;
  text-align: right;
}

.about .title-text-cont h1 {
  margin: 0;
  font-size: 0.6em;
}
</style>
